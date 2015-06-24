import './home-copy.css';
import angular from 'angular';
import template from './home-copy.html';

// FIXME: figure out why not showing

let homeCopyModule = angular
  .module('homeCopy', [])
  .directive('homeCopy', HomeCopy);

export {homeCopyModule};

function HomeCopy() {
  let homeCopy = {
    template,
    restrict: 'E'
  };
  return homeCopy;
}