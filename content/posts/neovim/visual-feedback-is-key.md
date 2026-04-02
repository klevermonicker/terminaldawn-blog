+++
date = '2026-03-31T07:24:10.834-07:00'
draft = false
title = 'Visual Feedback is Key'
description = "Fidget - the visual indicator"
summary = "If a tree falls in the forest, do you get a visual indicator?"
tags = ["neovim", "configuration", "workflow", "technical-debt", "cli-tools", "engineering"]
categories = ["Software Development"]
keywords = ["neovim", "configuration", "workflow", "technical-debt", "cli-tools", "engineering"]
series = ["neovim"]
series_order = 3
showComments = true
showDate = true
showAuthor = true
showReadingTime = true
showEdit = false
showToc = true
heroStyle = "background"
+++

# Visual Feedback is Key

## Why
Let's face it, this is a pretty involved config as we dive into it. Multiple DAPs which make me feel good even though I don't generally write in all those languages, I'm leaving it in. I *do* write in them, just not as often as I wish. I manage people now which means my days are full of spreadsheets, forwarding emails with FYI in the subject line. You know...important leader-y stuff.

While I don't get called on to produce a ton of code, I do get called on to help debug things. That requires code, and honestly that's why I did gitsigns earlier. This is just the next step. Is my DAP loading. Honestly I don't know, it's like Schroedingers Cat up in here. Not until it actually pops up a floating window that says something about the code.

## Setup

The setup was ... scarily simple. So simple I didn't trust it. Kind of like [Starship Prompt](https://starship.rs), install the app, configure your profile and it's immediately useful. So it was with Fidget. It's literally this much config, what's your excuse for not using it? Here I'll even put the ENTIRE lua file up here.

**Config**:
```lua
return {
  "j-hui/fidget.nvim",
  event = "LspAttach",
  opts = {},
}
```

That's it. Nothing more nothing less. Sure there's options I can pass it for configuration other than just dropping this in.  There's way more here than I feel like regurgitating for the configs. You can do that yourself. The author `j-hui` did a fantastic job documenting everything. Sometimes Just Good Enough *is*, the challenge is being honest enough with yourself when it is. Leaving this as the default and not customizing it flies in the face of my Linux heart, but at the same time if the defaults work, why am I just adding more stuff I'll have to keep up and be right back in the same cycle?

## Conclusion

Look I know it's not the standard neovim/linux fanboy kind of thing to do. The defaults *just* work. I'm not going to add a bunch of levers and knobs and dials that I have to maintain. This is technical debt land mine territory and every one of us does it. Adding it in and getting the feedback is actually quite enough. So lesson here, just because you can bring it in and throw a metric crapload of configuration options doesn't mean you should. Dr. Ian Malcolm had it right "Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should". Don't be that guy.

