+++
title = "Why I'm rebuilding TerminalDawn: Journey from POC to Proper Design"
date = "2025-07-05T13:40:43-07:00"
draft = false
description = "The POC worked, it's not winning any beauty contests. Time to build it right"
summary = "So, I built TerminalDawn v1 - my off-grid Raspberry Pi computer. Here's what went wrong and why I'm starting over."
tags = ["hardware", "design", "raspberry-pi", "solar", "freecad"]
keywords = ["off-grid computing", "raspberry-pi", "solar", "freecad", "hardware design"]
series = ["TerminalDawn"]
series_order = 1
showComments = true
showDate = true
showAuthor = true
showReadingTime = true
showEdit = false
showToc = true
heroStyle = "background"
+++

Pretty much a good news bad news situation as one would expect in your first foray into a new area. Let's get the good news out of the way. It worked. Worked better than I expected, and even uncovered a new function which feels core to it's mission. Bad News. There's a lot here, from me not knowing exactly how to design heat-set inserts, to the placing of hardware, so much went wrong. 

## What didn't work
Let's start with the obvious. The heat-set inserts. This was a design flaw on my part, I picked up a jig from Amazon, but every single hole I had made wasn't large enough to put the inserts in and when I did get them setup everything was shifted off center by a few millimeters in any direction. This led to...me getting really cozy with plastic epoxy and JB Weld.

The missile switches worked great, except I soldered my wires onto them, which is not how it should have been done. Screws.. this was the right answer, whatever treatment was on the metal made it hard to solder everything on and I didn't realize what was happening while I *used a wire brush to get the coating off* that I was doing it wrong. This lends itself to solid core wiring, and I was using silicon sleeved highly flexible multi-strand. The layout of parts wasn't the best inside the case. I knew that going in. Everything was built with the Honeycomb Storage Wall and some community built inserts for zip-ties. 
{{< alert "triangle-exclamation" >}}
**User Error Alert:** The placement failure had nothing to do with the projects listed, they are amazing and you *should* check them out. This was **ALL** me.
{{< /alert >}}

The OLED screen I embedded in the top end of TerminalDawn wasn't mounted well. The sides were all off by anywhere between 0.5mm - 2mm. The swinging doors on the back weren't level and I didn't leave enough space for the pivot. Hey, my first time designing something like this! Cut me a little slack! At least my first attempt to carve out a wire channel and space for the screen was successful in Tinkercad.

The cabling for the audio....I repurposed a failed attempt at making a braided USB cable since it had 4 wires in it and an aviator plug. Recycle your failed experiments folks! This worked well enough but was sensitive to movement. I think the sensitivity was more on how I connected everything vs the actual setup. However, this really reinforced that I wanted this to be a connector and not a cable.

## What did work
The entire solar setup. From the storage for the solar panel built into the back, right up to the keyboard, trackball, and speakers. The solar worked so well in fact that when I ran out of backup battery power while camping. I was able to disconnect the Pi, and get myself about 30% of a charge on my backup battery and bring my phone back to life. I hadn't even thought about this previously. 

Everything "Worked" as described, it just wasn't pretty and had some...let's call it jankiness to it. Very raw vibe to the whole thing but ultimately this was not about making it pretty, it was testing functionality. Functionally, everything was about 87%.

## Solar, an Unexpected Journey
I took this thing out to the middle of a forest about 20 miles from cell signal and even further from electricity. I set it up on a picnic table in the middle of a campground about 10 feet from my tent, and I turned it on. A few tense seconds and then the screen flashed, the keyboard did it's little LED dance and boom I was at the desktop playing FreeDOOM. I let it sit for a bit, then turned it off and finished making camp. 

A Day and a half later, my spare battery for my phone and watch were dead and the devices themselves were dead. This would be highly problematic as I had reservations to a very specific area of the forest I was in and needed my tickets. 

I hinted at it, so I'll just shine a flashlight on it here. In a moment of either sheer brilliance or desperation....let's go with brilliance. I decided to pull the USB-C out of the raspberry pi, setup the Solar, and plug that into my backup battery. Nothing happened initially until I remembered I would need to turn the circuit on to potentially connect the backup battery to TD's power. I did so, and the battery lit up and started charging. I let it sit in the sun while I broke camp. I never designed the system to be 24x7, I had only wanted the solar to "slow the bleed", however I had never thought I could use this in a pinch to charge my phone..albeit in multiple steps. That...is exactly what I did and it worked well enough to halfway fill my phone up before I got to where I needed my tickets.

## What's next
A rework of the entire setup. I'm going to be teaching myself *FreeCAD* and rebuilding everything. Larger screen, countersunk spaces for the heatset inserts, better cable management, a new slot system for component mounting in the back. A new audio setup that's closer to what I had originally wanted (a simple connector vs a cable). Larger battery capacity, reworked electronics to include a dedicated charging circuit or hybrid function + charge. Lots more as I work through everything, including field replaceable ...or at least easier to replace parts. It's going to be a wild ride folks, stay tuned for me to walk face first into brick walls you all saw coming, tripping over curbs and potholes that I saw coming but ran into anyway.

## Links
**Hardware Mentioned**
- [Raspberry Pi](https://rpi.org)
- [Voltaic Solar Panel](https://voltaicsystems.com/)
- [Adafruit](https://adafruit.org)
- [OLED Screen](https://a.co/d/41QOGPs)
- [Heat Set Inserts](https://a.co/d/cVBb7nO)
- [Vertical Heat Set Insert Tool](https://a.co/d/fZnS5zX)

**Software Mentioned**
- [FreeCAD](https://freecad.org)
- [Tinkercad](https://tinkercad.com)
- [FreeDOOM](https://freedoom.github.io)

**3D Prints**
- [Honeycomb Storage Wall](https://www.printables.com/model/152592-honeycomb-storage-wall) 
- [Heavy-Duty Zip Tie Inserts](https://www.printables.com/model/745708-heavy-duty-zip-tie-inserts-for-honeycomb-storage-w)

---

Still figuring out FreeCAD and why my circuits work better in theory than practice. 

