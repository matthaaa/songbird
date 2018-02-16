# Songbird

## Background and Overview

Songbird is a music generator that applies basic rules of music theory to guide the user's experience in creating a short melody in the key of C.

Users begin by selecting a single note on a keyboard. An algorithm then determines what notes are be available next, and highlights what can be chosen. The user will then repeat the process of selecting notes, until the generated song reaches a specific length.

Once a song has been created, the user can play the song back on the timeline.


## Functionality and MVPs

Main features:
- [ ] Keyboard that plays corresponding sounds when keys are clicked
  - [ ] Individual keys play specific notes
- [ ] Timeline that stores and plays notes when playing state is active
- [ ] Action to select and save sounds from keyboard to timeline
- [ ] User flow for selecting and submitting next note
- [ ] Algorithm for determining next note based on current notes / previous notes
- [ ] Actions to play and reset timeline

Bonus features / In progress:
- [ ] Tempo adjustment
- [ ] Key transposing
- [ ] Pairing melody with chords

## Wireframes

### Main screen
A main screen displays the timeline with the selected notes if the user has created a melody. It also has controls for playback and options to start a new melody.

https://www.dropbox.com/s/ucilgijt9m0xpu9/Screenshot%202018-02-16%2001.01.44.png?dl=0

A keyboard will be visible for the main view as well.

## Technologies

Songbird will include the following technologies:

Structure / Sounds: Vanilla JavaScript,
DOM and rendering: HTML
Bundling: Webpack

Scripts:
- timeline.js: handles logic for rendering the main music timeline
- keyboard.js: handles rendering keyboard and note selection and store algorithm for next notes
- main.js: joins timeine and keyboard files together

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
