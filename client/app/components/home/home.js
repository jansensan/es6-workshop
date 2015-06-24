import angular from 'angular';
import {HomeComponent} from './home.component';
import {noteMakerModule} from '../noteMaker/noteMaker';
import {noteListModule} from '../noteList/noteList';

let homeModule = angular.module('home', [noteMakerModule.name, noteListModule.name])
  .directive('home', HomeComponent);

export { homeModule };
