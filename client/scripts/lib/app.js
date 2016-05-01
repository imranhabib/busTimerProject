// Libs
import angular from 'angular';
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';

// Modules
import Definer from '../definer';
import PlacesCtrl from '../controllers/places.controller';
import MapCtrl from '../controllers/map.controller';
import SettingsCtrl from '../controllers/settings.controller';
import RoutesConfig from '../routes';
 
// App
const App = angular.module('Busviews', [
  'angular-meteor',
  'ionic'
])

.config(function($ionicConfigProvider) {	
    $ionicConfigProvider.tabs.position('bottom');
});
 
new Definer(App)
  .define(PlacesCtrl)
  .define(MapCtrl)
  .define(SettingsCtrl)
  .define(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}
 
function onReady() {
  angular.bootstrap(document, ['Busviews']);
}