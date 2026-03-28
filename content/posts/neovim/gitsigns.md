+++
date = '2026-01-27T23:55:13-08:00'
draft = false
title = 'Gitsigns'
description = "Gitsigns - an addition to my config"
summary = "I added gitsigns important, who doesn't love blame?!"
tags = ["neovim", "configuration", "workflow", "technical-debt", "cli-tools", "engineering"]
categories = ["Software Development"]
keywords = ["neovim", "configuration", "technical-debt", "workflow", "engineering", "developer-tools"]
series = ["neovim"]
series_order = 2
showComments = true
showDate = true
showAuthor = true
showReadingTime = true
showEdit = false
showToc = true
heroStyle = "background"
+++

## Workflow

Be me, setting up neovim and knowing I want git involved because hey [VSCodium](https://vscodium.com) had it and the original goal was to make sure I had the same if not better functionality. Lazygit is in my config and I was using it. I was missing gitblame. It's in most modern IDEs because knowing that the absolute jerk who committed that chunk of code is you without a doubt is super useful. Anyway, I didn't have a way of doing this in neovim. All I had was everything you've already read.
{{< alert "triangle-exclamation" >}}
Almost always ME
{{< /alert >}}

This is the most critical part of being a developer. Looking at some janked up code, questioning if the authors parents were ever married....then bam gitblame hits and it's you. You're the asshole who wrote it. Granted it's 3 weeks ago asshole and you're all grown up and mature now. You'd of course *NEVER* write code like that again. It's humbling. 

I didn't get this experience. I had to go seek it out by using the actual commands and parsing the response. It's just not the same, time passes, you lose anger, you lose focus, and then wham you see your name. You grin sheepishly and fix it. Nothing like having all the rage hitting the buttons and getting slapped in the face.

## The Fix

This was simple. Missing out on a core feature is just...bonkers. So I put together a new gitsigns lua file. Just dumped in a gitsigns.lua and configured it. Now I can see myself break shit in real time. Let's tear into what I did and why. First since it's 2026 `event = "BufReadPre"`. I like things going fast, and I let most of my conditional things to lazy load. Now conditional and me saying this is core to the experience are in conflict. This is not a thing that needs to be loaded ALL the time. I'm not in repo's *all* the time. So it makes sense to have it lazy load. I now invoke the magic with `<leader>gb`.

What about large files? Good question, what about those? I put in another config item `max_file_length = 40000` Anything bigger than 40K lines. So like your average spreadsheet full of cloud issues. Gitblame won't show up for that crapshow.

There are a few other keymaps that came with this for convenience.
| Keymap | What it do |
|---|---|
| `]c / [c` | Jump to next/prev changed hunk, easier sin navigation! |
| `<leader>gp` | Preview the hunk in a floating window, have your sins jump off the screen! |
| `<leader>gs` | Stage hunk or selected lines in visual |
| `<leader>gu` | Undo the last stage - the "how about no" button |
| `<leader>gr` | Reset hunk back to HEAD - aka "nuke it from orbit, it's the only way to be sure" |
| `<leader>gd` | Diff the current file inside of nvim ... for science? |

Just the classics. Gitblame right where it belongs.

Next up: LSP Feedback. Turns out I screwed myself there and need to atone for more.
