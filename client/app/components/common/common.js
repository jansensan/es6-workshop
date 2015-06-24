import {NotesModel} from './noteList.model';
import {Notes} from './noteList.factory';
import angular from 'angular';

let commonModule = angular
  .module('common', [])
  .factory('NotesModel', NotesModel)
  .factory('Notes', Notes);

export {commonModule};
