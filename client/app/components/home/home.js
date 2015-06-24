import './home.css';
import angular from 'angular';
import template from './home.html';
import {HomeController as controller} from './home.controller';

// no issue, webpack handles duplication and circular refs

// create var to export
let homeModule = angular
  .module('home', [])
  .directive('home', Home);

// export for derefencing (todo: read more about this)
export {homeModule};

function Home() {
  let _home = {
    template,
    controller,
    restrict: 'E'
  };
  return _home;
}

function getDependencies() {
  return [
    controller.name
  ];
}