class NoteMakerController {
  constructor(Notes){
    this.Notes = Notes;
    this.newNote = '';
  }

  makeNote(content) {
    this.Notes.createNote(content);
  }
}
NoteMakerController.$inject = ['Notes'];

export {NoteMakerController};
