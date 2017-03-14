import angular from 'angular';

import ButtonController from './controllers/button';
//import CocktailController from './controllers/cocktail';

angular
  .module('button', [])
  .controller('ButtonController', ButtonController)
//  .controller('CocktailController', CocktailController);
