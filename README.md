# Songbird

Try it [here](https://matthaaa.github.io/songbird.com/)!

Songbird is a music generator that applies basic rules of music theory to guide the user's experience in creating a short melody in the key of C. This application is built using vanilla JavaScript and HTML5, and styled with CSS3.

## Main Features

### Keyboard

The keyboard displays simple note objects as boxes, that each play a unique sound file corresponding to its pitch when pressed. Pressed notes are then added to the timeline object.

![#](https://s3.amazonaws.com/songbird-screenshots/basic.png)

### Timeline

The timeline is composed of a simple div, that is populated with boxes representing the User's selected notes from the keyboard. As notes are added, the user can play back the current song, undo notes one at a time, and clear the entire timeline.

As keys are selected, the timeline is populated with the corresponding notes. When each key is selected, the next appropriate keys according to the algorithm are calculated, and any other notes are deselected.

![#](https://s3.amazonaws.com/songbird-screenshots/Screenshot+2018-03-17+18.12.09.png)

Notes on the timeline are highlighted in color during playback, along with their corresponding keys.

![#](https://s3.amazonaws.com/songbird-screenshots/Screenshot+2018-03-17+18.12.36.png)

## Future Ideas

### More Complete Algorithm

### Black Keys & Support for Other Key Signatures

### Automatic Song Generator
