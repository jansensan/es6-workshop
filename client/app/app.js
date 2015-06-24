import 'normalize.css'; // no var name for importing css
import angular from 'angular';
import {homeModule} from './components/components';
// webpack loads imports in order, vs jspm which may not (uses async)


angular
  .module('app', getDependencies());

function getDependencies() {
  return [
    homeModule.name // returns the string value of the name
  ];
}