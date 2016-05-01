import { Config } from './entities';
 
export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'client/templates/tabs.html'
      })
      .state('tab.places', {
        url: '/places',
        views: {
          'tab-places': {
            templateUrl: 'client/templates/places.html',
            controller: 'PlacesCtrl as placesCtrl'
          }
        }
      })
      .state('tab.map', {
        url:'/map',
        views: {
          'tab-map': {
            templateUrl: 'client/templates/map.html',
            controller: 'MapCtrl as mapCtrl'
          }
        }
      })
      .state('tab.settings', {
        url: '/settings',
        views: {
          'tab-settings': {
            templateUrl: 'client/templates/settings.html',
            controller: 'SettingsCtrl as settingsCtrl'
          }
        }
      });
 
    this.$urlRouterProvider.otherwise('tab/places');
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];