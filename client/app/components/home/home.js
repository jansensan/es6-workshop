import './home.css';
import angular from 'angular';
import {HomeDirective} from './home.directive';
import {homeCopyModule} from './home-copy/home-copy';

// no issue, webpack handles duplication and circular refs

// create var to export
let homeModule = angular
  .module('home', getDependencies())
  .directive('home', HomeDirective);

// export for derefencing (todo: read more about this)
export {homeModule};

function getDependencies() {
  return [
    homeCopyModule.name
  ];
}