import template from './home.html';
import {HomeController as controller} from './home.controller';

function HomeDirective() {
  let home = {
    template,
    controller,
    restrict: 'E'
  };
  return home;
}

export {HomeDirective};