import angular from 'angular';
// Material design css
import 'angular-material/angular-material.css';
import 'bootstrap/dist/css/bootstrap.css';
// Animation
import 'angular-animate';
// Materail Design lib
import 'angular-material';


import '../style/app.css';

let app = () => {
  return {
    templateUrl: 'app.html',
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngMaterial'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

//@require "./**/*.html"
//@require "./*/**/*.js"

export default MODULE_NAME;