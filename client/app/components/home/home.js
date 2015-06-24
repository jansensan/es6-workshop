import './home.css';
import angular from 'angular';
import template from './home.html';
import {HomeController as controller} from './home.controller';
import {homeCopyModule} from './home-copy/home-copy';

// no issue, webpack handles duplication and circular refs

// create var to export
let homeModule = angular
  .module('home', getDependencies())
  .directive('home', Home);

// export for derefencing (todo: read more about this)
export {homeModule};

function Home() {
  let home = {
    template,
    controller,
    restrict: 'E'
  };
  return home;
}

function getDependencies() {
  return [
    homeCopyModule.name
  ];
}