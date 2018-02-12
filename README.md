# Songbird

## Background and Overview

Songbird is a music generator that applies basic rules of music theory to guide the user's experience in creating a short melody.

Users will begin by setting the key of the melody, and select a single note on a keyboard. An algorithm will then determine what notes will be available next, and highlight what can be chosen. The user will then repeat the process of selecting notes, until the generated song reaches a specific length.

Once a song has been created, the user will be able to play the song back on a loop with automatically generated chords and/or complimentary notes.



## Functionality and MVPs

Main features:
- [ ] Keyboard that plays corresponding sounds when keys are clicked
  - [ ] Individual keys play specific notes
- [ ] Timeline that stores and plays notes when playing state is active
- [ ] Action to select and save sounds from keyboard to timeline
- [ ] User flow for selecting and submitting next note
- [ ] Algorithm for determining next note based on current notes / previous notes
- [ ] Actions to play, pause, reset timeline

Additional features:
- [ ] Tempo adjustment
- [ ] Key transposing
- [ ] Pairing melody with chords

## Wireframes

### Main screen
A main screen will display the timeline with the selected notes if the user has created a melody. It will also have controls for playback and options to start a new melody.

https://www.dropbox.com/s/f2frmqe3seb9op6/New%20Mockup%201.png?dl=0

The melody screen will display information about each note and the upcoming notes as the user selects them.

https://www.dropbox.com/s/gai5sshkesir68u/New%20Mockup%201%20copy.png?dl=0

A keyboard will be visible for both views.

## Technologies

Songbird will include the following technologies:

Structure: Vanilla JavaScript,
DOM and rendering: HTML
Sound generation: Web Audio API
Bundling: Webpack

Scripts:
- timeline.js: will handle logic for rendering the main music timeline
- keyboard.js: will handle rendering keyboard and note selection
- musical.js: will store main algorithm for choosing notes and applying supplementary chords
- audio.js: will store audio logic and AudioEvent creation

## Timeline

### Weekend: Explore what features to implement and research audio implementation.

- [ ] Get a basic idea of what kind of algorithm the generated songs will follow, and what kinds of chord progressions we want to generate.
- [ ] Research implementing sounds through JS

### Day 1: Set up webpack and Node modules, and implement basic sound generation.

- Goals:
- [ ] Set up webpack and render basic page
- [ ] Create a keyboard that generates sound when pressed
- [ ] Implement selecting and saving notes onto a timeline

### Day 2:

- Goals:
- [ ] Finish up timeline and ensure that saved notes can play
- [ ] Create start-stop button for timeline

### Day 3:

- Goals:
- [ ] Implement main algorithm and get correct notes to be presented for each time a user selects a note
- [ ] Create reset, tempo, and undo features for timeline
- [ ] Implement and style controls for note selection steps (play note on select, allow user to hear notes before selecting, etc)

### Day 4:

- Goals:
- [ ] Finish up features from Day 3
- [ ] Add instructions
- [ ] Style everything and make it look awesome

### Bonus:

- Goals:
- [ ] Random song generator
- [ ] Transposing
- [ ] Adding beats
- [ ] Adjustible
