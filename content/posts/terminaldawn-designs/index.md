+++
title = 'TerminalDawn Design Decisions: Reality Checks and Dreams'
date = '2025-07-21T23:18:10-07:00'
draft = true
description = "So now that the POC worked, I'm digging into the actual design and learning lessons."
summary = "I built the whole thing just to see if I could. Harsh reality set in and I want to do more of this."
tags = []
keywords = []
series = ["TerminalDawn"]
series_order = 2
showComments = true
showDate = true
showAuthor = true
showReadingTime = true
showEdit = false
showToc = true
heroStyle = "background"
+++

Like I've said in other posts, it worked. Not only did it work but it saved me getting to the tickets I had on my phone. I learned a lot..and had to take a hard look at everything I did. We'll do a dive into each one.

## Form Factor

This thing is big. 12"x18". Putting it on my desk, it covered my desk, no room at all. That's not portability, that's a square kettle bell with extra steps. I wanted to make sure I made it smaller this time around, so I set an arbitrary goal of a single sheet of A4 paper...8.5"x11".I feel like this is more portable and will be easier to take with you. This is going to give me fits around fitting everything in and with Dawn's new mission, that's new batteries and more weight, less space, extra heat. You know all the things that make portability hard and computers cry.

## Screen Size

This is obvious, the original version of Dawn has a 5" screen. This is exceedingly tiny but functional. An incredibly good thing for a POC. So I've decided to up the size of this to 7". I wrestled with the 10" screen as that's the obvious winner here for usability and size however all the calculations I did on this one upped the battery requirement a lot. Something in the neighborhood of doubling the need. With me already cramped on size, this was a bad move. So yea, the 10" screen would absolutely rock, however it's just not feasible. Brain says "YES", math says "NO".

## Audio

I loved the 3" monster speakers in the lid but it's overkill and I'm already pressed for space. I went with the rectangular speakers that were full range and 4ohm. Smaller form factor which lets me take them and put them on the front plate instead of mountain on the side like I was thinking. Just mounting them on the side really removes a lot. I didn't want to go that route and it wrecked the plans I had for the side anyhow. So no go on the 3" ones and down to the rectangular variety.

## Power

With the extra mission of having Dawn be a central power hub for everything. This means more battery and more solar panels. This is extra USB ports, this is some complicated power stuff. This will have 3 seperate modes, charging, on and off. I've had to up the batteries from 1 to 4, I've had to add more solar panels to make up for the extra battery capacity. Expanding from one to three panels. I'll be doing magnetic mounts for outside of the panel storage.

## Side Panels

Heat is going to be an issue. All the electronics, and I really didn't want to invest in a fan from a power perspective. So I opted to add doors to both sides. The doors will open up and hold themselves in place, not sure on the mechanism yet. With both side doors open and some magentic mounts on the outside, I'll be able to use the top and both sides as external mounts for the solar panels. The panels will be stored in the lid instead of the back like the old design.

## Power Monitoring

The new setup is still going to be powered by a screen, this one will be e-ink however as it consumes net zero power when not "powered on". The fun surprise with this is the fact that I'm going to be powering this with an Elite-C. A simple button will trigger the power, run off the main batteries long enough to take readings, update the display and shut itself off. When the Pi is on, it will circumvent the Elite-C and update the power monitoring on it's own.Incredibly small, fast, and highly power efficient.

## Stretch Goals

I'm thinking about building out an entire cartridge like plugin ecosystem to go with it. Things like having GPS and topographical maps, stronger wifi, LORA addons, extra sensors (temp/humidity). I might add a projector to it to make the movie/tv stuff better than it currently is..err..will be. I'm also planning to add some sort of carrying mount or strap.

That's all I have folks, just a lot of changes and design decisions to support those changes. Out of all of that, the side doors scare me. I keep thinking of a design with a shock, but I don't know if they make a shock that size. Ratcheting sure? How? I'm probably going to end up cannibalizing the swivels arms from a briefcase from 1978 to hold it up unless something brilliant comes to mind. This is like playing 4D Tetris. I'm designing and visualizing but who knows how it all ends up after I print out my POC. Would love to hear feedback on this stuff but if not and you're happy to watch me shoot myself in the foot, by all means stay tuned!
