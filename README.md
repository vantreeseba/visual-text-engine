## Visual Text Engine

Visual Text Engine (working title) is meant to be a graphical user interface for [text-engine](https://www.github.com/okaybenji/text-engine), a tool for creating text adventure games that run in the browser.

[Try it out! (Live demo)](https://okaybenji.github.io/visual-text-engine/)

### Planned features include (this is my to-do list):

#### General
- [X] Import JSON game disks
- [X] Export JSON game disks
- [ ] Export game to webpage
- [ ] Export game to zip (for easy upload to [itch.io](https://itch.io))
- [X] Manage starting room ID
- [ ] Manage starting inventory
- [X] Add/remove rooms

#### Room Editor
- [X] Set/change room ID, name, description, exits and artwork
- [X] Drag and resize room cards
- [X] Add/remove room exits
- [X] Visualize connections between rooms*
- [ ] Selected card is highlighted; connections coming from and going to it are color-coded
- [ ] Add/remove/edit room items

*Needs improvement

### Item Editor
- [ ] Set/change name, description, isTakeable property
- [ ] Add/remove custom item properties
- [ ] Set item use function (perhaps save to/load from .js files)

### Someday/maybe
- [ ] Auto-size and -position rooms cards on load (look into box packing)
- [ ] Drag-and-drop connections between rooms
- [ ] Drag-and-drop items (move items to other rooms)
- [ ] Choose exit destination from drop-down list (not sure how I feel about this...)
- [ ] ASCII art editor
- [ ] CSS style editor
