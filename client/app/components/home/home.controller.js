class HomeController {

  // requires experimental features of babel
  // static $inject

  // TODO: look into difference between dependency injection and params
  constructor($log) {

  }
}
HomeController.$inject = ['$log'];

export {HomeController};