angular.module('strongtower')
.controller('mainCtrl', function ($scope, $timeout, $state) {

  // nav btns
  $scope.activeBtn = function (activeClass) {
    if ($state.current.name === activeClass) {

      return true
    }
  };
  $scope.activeBtn()

  // Owl Carousel
  $scope.owlitems = [];

  $scope.owlproperties = {
      items: 1,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplaySpeed: 800,
      dots: false,
      loop: true,
      nav: true,
      navText: ['<div class="btn-circle"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>','<div class="btn-circle"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>']
  };

  $scope.owlpropertiesPartners = {
    center: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplaySpeed: 900,
      dots: false,
      loop: true,
      nav: true,
      margin: 90,
      autoWidth:true,
      responsive: {
        768: {
          dots: true,
          items: 2,
          margin: 85
        },
        1200: {
          dots: true,
          items: 4,
          margin: 100
        }
      },
      navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
  };

  //Facebook Plugin
  $scope.pluginOn = true;
  $scope.rendering = false;

  $scope.rendered = function () {
    $scope.rendering = false;
  };

  $scope.$watch('pluginOn', function (newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.rendering = true;
    }
  });

  $scope.$on('$routeChangeSuccess', function () {
    $scope.rendering = true;
  });

})
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=902009893274771";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'))
