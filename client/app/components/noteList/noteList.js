import angular from 'angular';
import {noteModule} from '../note/note';
import {NoteListComponent} from './noteList.component';

let noteListModule = angular
  .module('noteList', [noteModule.name])
  .directive('noteList', NoteListComponent);

export {noteListModule};
