var app = angular.module("portfolioApp");
app.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "partials/#/",
    controller: "projectController"
  });
  $routeProvider.when("/about", {
    templateUrl: "partials/about.html",
    controller: "projectController"
  });
  $routeProvider.when("/contact", {
    templateUrl: "partials/contact.html",
    controller: "projectController"
  });
});
