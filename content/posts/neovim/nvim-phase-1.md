+++
date = '2026-01-14T01:11:30-08:00'
draft = false
title = 'Nvim The Reckoning'
description = "The journey of a thousand miles begins by stepping on a Lego"
summary = "The start of neovim fixup. Paying for the sins of the past, regardless if I'm using the item or not."
tags = ["neovim", "configuration", "workflow", "technical-debt", "cli-tools", "engineering"]
categories = ["Software Development"]
keywords = ["neovim", "configuration", "technical-debt", "workflow", "engineering", "developer-tools"]
series = ["neovim"]
series_order = 1
showComments = true
showDate = true
showAuthor = true
showReadingTime = true
showEdit = false
showToc = true
heroStyle = "background"
+++

## The Start

I warned you this is where I was going. If you've learned from my self deprecating humor through this...I'm going to be throwing shade.

So I cataloged everything that was wrong - I'll admit to some AI help. Obviously I didn't care enough to try to fix it. I needed an impartial buddy to come in and slap me upside the head. Which the AI did.

We'll dive into each thing but here's the quick list of dirty fixes

1. Typo's in DAP.
1. Clipboard Config
1. Dead Plugin
1. Javascript acceptance
1. LSP Format Keymap Location
1. Error Handling non-existant
1. Redundant LSP
1. Unused Plugin
1. Random Meaningless Comments in the files

## Typos in DAP.

So apparently I don't know how to type. Every DAP UI listener had a Typo. I had `dapui_confg` instead of `dapui_config`. So the debug UI would never auto-open when starting a debug session because the listeners were never actually registered. 

Made this changes to the config file.

**File**: `lua/plugins/debugging.lua`
```lua
# BEFORE
dap.listeners.before.attach.dapui_confg = function()
dap.listeners.before.launch.dapui_confg = function()
dap.listeners.before.event_terminated.dapui_confg = function()
dap.listeners.before.event_exited.dapui_confg = function()

# AFTER
dap.listeners.before.attach.dapui_config = function()
dap.listeners.before.launch.dapui_config = function()
dap.listeners.before.event_terminated.dapui_config = function()
dap.listeners.before.event_exited.dapui_config = function()
```

## Clipboard Config

I had the wrong utiity setup for macOS. I was using `unamedplus`. For once in our lives macOS isn't being extra and it uses the rather pedestrian `unamed` register. Linux/Windows uses the plus. Bonus points, I KNEW IT WAS WRONG IN THE CONFIG.

**File**: `init.lua`
### Original
```lua
vim.opt.clipboard.append("unnamedplus") -- Not sure if this cross platform or note
```
### Changes Made
```lua
if vim.fn.has("mac") == 1 then
    vim.opt.clipboard = "unnamed"
else
    vim.opt.clipboard = "unnamedplus"
end
```

Now it works cross platform. Which you know was the original intent and since I am 100% macOS now...totally useless. This was never about making it work right out of the gate. This is me paying for my sins. So there, cross platform.
