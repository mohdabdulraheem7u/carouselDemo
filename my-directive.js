//get module reference

var appRoot = angular.module('myApp');

appRoot.directive('myCarousel', function () {
  return {
    restrict: 'E',
    templateUrl: 'my-carousel.html',
    scope: true,
    link: function ($scope, $element, $attrs) {
      var carouselDom = $element[0].children[0];
      var carouselContainer = carouselDom.children[0];
      var btnLeft = angular.element(carouselDom.children[1].children[0]);
      var btnRight = angular.element(carouselDom.children[1].children[1]);
      var scrollWidth = 200;

      btnLeft.on('click', scrollLeft);
      btnRight.on('click', scrollRight);

      //scrollLeft & scrollRight Functions based on event
      function scrollLeft() {
        angular.element(carouselContainer).animate({scrollLeft: '-=' + scrollWidth}, 400);
      };

      function scrollRight() {
        if(carouselContainer.scrollLeft >= 800) {
          angular.element(carouselContainer).animate({scrollLeft: '0'}, 900);
        }
        else {
          angular.element(carouselContainer).animate({scrollLeft: '+=' + scrollWidth}, 400);
        }
      }
    }
  };
});