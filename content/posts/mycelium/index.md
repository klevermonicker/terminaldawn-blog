+++
date = '2026-08-21T00:04:59-07:00'
draft = false
title = 'Mycelium'
description = ""
summary = ""
tags = []
categories = ["Software Development"]
keywords = []
series = ["Mycelium"]
series_order = 1
showComments = true
showDate = true
showAuthor = true
showReadingTime = true
showEdit = false
showToc = true
heroStyle = "background"
+++

So I've never been a huge fan of living that plugin life. Whether it be 87 Dongles ... what even is that word, it's a weird word to say, it's the Peanut Butter of words. Just feels round and sticky for no good reason. Anyhow, that hatred applies to software. It's why Jenkins and I never got along, 16 plugins just to have a UI? Miss me with that shit. I'm here to talk about Mycelium, one I find Mushrooms absolutely fucking fascinating but two it really talks about knowledge and ideas and how they spread. We've all been there, one moment we're thinking about cats, and 5 moments later we're wondering how many slugs it would take to cover the floor of a grocery store. Seemingly unrelated but they had a common thread. I wanted to take the whole concept and make a second brain, yes I stole that shamelessly from Obsidian.

Obsidian is a PHENOMENAL note taking tool. I used it, and then went absolutely bonkers. I had a full set of 18 plugins all Star Trek themed. It turned it from a note taking app into my specific brain....and turned into Jenkins the note taking edition, a mess of plugins for me to maintain.

Enter Mycelium. Now I'll go dig into the application itself later. I want to talk about Mycelium's knowledge graph. I loved what Obdisian did with hardlinks but I did the thing. What if ... it did more. Inferred links. Now we're talking about a knowledge graph that starts to find hives of knowledge. I did this with lexical and semantic matching, and then I asked again. What if, I found a way to correlate those items and start creating correlated family groupings. I call these Double Cask links. None of this is novel, most of it is over-engineered and I don't know if it's necessary. The idea being you can ask the graph *why* it drew an edge and get an answer (if it actually talks back, stop taking 'shrooms).

## The problem

There's a few dominant designs here, both mildly broken in different ways.

The **hard-link graph**, Obsidian's default. This one just shows you the links you typed, the obvious relationships. It's 100% honest but it's just not super interesting. If I say wrote `[[Q3 Planning]]` in 7 different notes, the graph dutifully draws 7 edges. I already know those are related, this is just a gross visualization of things I typed that are easily correlated with a simple blush. Good for building hard links but misses the whole journey from Apples to Couches.

The **inferred-link graph**. This is the "AI second brain" angle. This tries to draw edges everywhere that some clanker thinks notes are related. Cosine similarity, embedding distance, LLM judgements. This does the very thing you shouldn't do with AI, let it figure out what you know and how it's related. This is false positive central, full of connections, so much signal that it turns into noise. Every meeting ends up being related to other meetings because it shares the word "Attendees". It's really pretty, but drilling in is VERY difficult.

These both don't make any distinction from "I said this" from "The algo noticed it". Both options draw fun lines and a graph can't tell you which edges are declarations and which are guesses, it's a simple moment mentally where you go "neat" but doesn't make you want to dig in.

I wanted a different thing. I wanted the graph to be a research tool, something I could point at and go "Why is this connected to that?" I wanted to be enticed to look at the data and play with it, explore it. What am I missing? What didn't I miss and I should double down on?

## Three edge classes

The methodology starts with acknowledging that not all edges are the same. Mycelium has three.

**Hard** user asserted. Explicit `[[wikilink]]`, or a `participants:` / `refs:` in frontmatter. Weight `1.0` on the code (`mycelium-graph/src/edge.rds`):

```rust
pub fn hard_link(source, target, edge_type, label) -> Self {
    Self { confidence: EdgeConfidence::Hard, weight: 1.0, ... }
}
```

This is bedrock grounded truth by declaration. If the connection is wrong, that's on me, the graph is just reporting what I wrote. These render as solid teal lines and stay visible at every zoom level.

**Soft** the haunted silicon noticed a pattern. Two notes share a tag, or occurred in the same location or lexically resemble each other. The soft threshold default to `0.30` (`settings.graph.soft_link_threshold`), which means I want some level of compelling to draw the edge. Soft edges are dim purple, semi-transparent and can be filtered out. Useful to have en-masse: "Notes that share a lot of soft edges probably belong together". That's as far as the trust goes for this.

**Double Cask**

The hardest part here was naming this thing and a longer process to justify it's existence. This is an inferred link on steroids. This is inferred from **two or more independent signals**, it brings a reason showing which signals fired. The metaphor comes from whiskey aged in two different barrels: the adult liquid picks up character from *both* casks. The edge picks up epistemic weight from *both* signals.

The v1 thresholds are in `mycelium-graph/src/double_cask.rs`:

- `min_signals`: 2
- `co_occurrence`: 0.30
- `lexical`: 0.15
- `shared_tags_min`: 2
- `mention_frequency_min`: 3
- `shared_participants_min`: 1

If a soft edge candidate picks up >= 2 passing signals, it gets promoted to `EdgeConfidence::DoubleCask` a very distinct variant, not a "high-confidence soft." This matters. Double cask edges render as a **dashed teal** line, sit between hard and soft in the layout and are eligible for the "Double Cask connections" dashboard panel where I can choose it's fate.

This as originally called "Attested," which was mostly accurate but honestly it wasn't fun, it wasn't sexy it had all the fun of a jury summons. It was renamed to Double Cask after talking with a friend and getting ideas. The rename cost nothing and made the concept explainable without needing to break out a whiteboard and going bonkers with lines. 

The thing to remember the three tiers, one philosophy: **the confidence tier is a promise about the evidence, not a promise about the strength.** A soft edge with weight 0.8 is still a soft edge, one signal fired. A Double Cask edge with weight 0.75 has multiple signals agreeing at a level.

## What "evidence trail" means in practice

Every Double Cask edge carries a "DoubleCaskRecord":

```rust
pub struct DoubleCaskRecord {
    pub attested_at: DateTime<Utc>,
    pub last_reviewed_at: DateTime<Utc>,
    pub signals: Vec<DoubleCaskSignal>,
    pub stability_days: u32,
}
```

Each `DoubleCaskSignal` is a typed enum - `CoOccurence`, `LexicalSimilarity`, `SharedParticipants`, `SharedTags`, `mentionFrequency` carrying the evidence, not just the score. If the participants signal fired, the record stores the actual (`vec!["Alice", "Bob"]`). If the lexical chunk it stores the similarity score (`0.31`). If co-occurence fired, it stores the score *and* the number of neighborhood notes that helped.

The record persists to SQLite alongside the edge row. Restarts and Reindexes don't lose the receipts. When I promote a Double Cask edge to Hard by typing an explicit wikilink, the record stays attached the hard edge still knows *why* it was flagged  in the first place.

The UI reads the records and on hover shows you. A Double Cask edge tooltip looks like this:
```
Co-occurrence: 0.42 across 8 notes
Lexical similarity: 0.31
Shared participants: Alice, Bob
```

Three lines, three signals, all chiller no filler. I can take a quick looksee at the tool tip and see which signal I disagree with. If it's "Alice and Bob" and they shouldn't count, this tells me something about the signal set and not necessarily the edge.

There's a stability window, 14 days by default. This is specifically to wet blanket the re-evaluation. Once an edge is promoted to Double Cask, we don't recompute it on every reindex; this is only revisited when the record is stale. Stale and still-passing -> refresh the record and bump the `stability days`. If it's stale, demote it back to a soft link, clear out the record. 

The clustering layer takes this a step further. The **double-cask subgraph** consisting of only Double Cask edges is decomposed into connected components via a union-find in linear time. Each component gets a `ClusterReceipt` that aggregates signals across all edges in the cluster:

- "Universal" signals appear on 100% of the cluster's edges
- "Majority" signals appear on >= 50% of supporting evidence
- Signals below 50% are dropped but not shared enough to explain the grouping.

The Modal on the knowledge graph renders reasoning directly. "6 edges. Alice appears on 6/6 edges. `#q3` appears on 4/6 edges. Average Lexical similarity: 0.34" This is a little dense, super nerdy but it's the software explaining why it thinks these notes belong together numerically. Right click on any node inside the double-cask cluster to open it and from there you can access your batch actions.

## Closing

Real talk folks. I'm exhausted it's 2am and I'm going cross-eyed. I'll dig into rest in a part 2 or 3 and well...the fiddly bits. You can dig in yourself in the repo.
