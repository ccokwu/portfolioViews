var app = angular.module("portfolioApp");
app.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "partials/#/",
    controller: "project"
  });
  $routeProvider.when("/about", {
    templateUrl: "partials/about.html",
    controller: "project"
  });
  $routeProvider.when("/contact", {
    templateUrl: "partials/contact.html",
    controller: "project"
  });
});
