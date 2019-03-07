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
      var dotSelectScroll = carouselDom.children[1].children[2];
      var dotSelectScrollOne = angular.element(dotSelectScroll.children[0]);
      var dotSelectScrollTwo = angular.element(dotSelectScroll.children[1]);
      var dotSelectScrollThree = angular.element(dotSelectScroll.children[2]);
      var dotSelectScrollFour = angular.element(dotSelectScroll.children[3]);
      var dotSelectScrollFive = angular.element(dotSelectScroll.children[4]);
      var dotSelectScrollSix = angular.element(dotSelectScroll.children[5]);
      var dotSelectScrollSeven = angular.element(dotSelectScroll.children[6]);
      var scrollWidth = 200;
      
      // debugger;

      btnLeft.on('click', scrollLeft);
      btnRight.on('click', scrollRight);
      dotSelectScrollOne.on('click',{index:dotSelectScrollOne},dotscrollRight);
      dotSelectScrollTwo.on('click',{index:dotSelectScrollTwo},dotscrollRight);
      dotSelectScrollThree.on('click',{index:dotSelectScrollThree},dotscrollRight);
      dotSelectScrollFour.on('click',{index:dotSelectScrollFour},dotscrollRight);
      dotSelectScrollFive.on('click',{index:dotSelectScrollFive},dotscrollRight);
      dotSelectScrollSix.on('click',{index:dotSelectScrollSix},dotscrollRight);
      dotSelectScrollSeven.on('click',{index:dotSelectScrollSeven},dotscrollRight);

      // dotSelectScrollOne.on('click',)

      //scrollLeft & scrollRight Functions based on event
      indexButton = 0;
      function scrollLeft() {

        if (carouselContainer.scrollLeft >= 800) {
           angular.element(carouselContainer).animate({ scrollLeft: '0' }, 900);
           indexButton = 0;
             }
       else {
           angular.element(carouselContainer).animate({ scrollLeft: '-=' + scrollWidth }, 400);
           indexButton--;
            }
        var li=angular.element(dotSelectScroll.children[indexButton]);
            
            selectedDot(li);

       }	            

      function scrollRight() {

        if (carouselContainer.scrollLeft < 800) {
          indexButton++;
           angular.element(carouselContainer).animate({ scrollLeft: '+=' + scrollWidth }, 400);
         }
    else {
        angular.element(carouselContainer).animate({ scrollLeft: '0' }, 900);
        indexButton = 0;
    }
    var li=angular.element(dotSelectScroll.children[indexButton]);
    selectedDot(li);
}
      
      function dotscrollRight(selected) { 

        var value=selected.data.index;
        // selectedDot(value);
        // indexButton = value;
        // console.log(value);
        switch(value){
          case dotSelectScrollOne:
          angular.element(carouselContainer).animate({scrollLeft: '0'}, 400);
           indexButton = 0;
          break;
          case dotSelectScrollTwo:
          angular.element(carouselContainer).animate({scrollLeft: '200'}, 400);
             indexButton = 1;

          break;
          case dotSelectScrollThree:
          angular.element(carouselContainer).animate({scrollLeft: '400'}, 400);
            indexButton = 2;

          break;
          case dotSelectScrollFour:
          angular.element(carouselContainer).animate({scrollLeft: '600'}, 400);
             indexButton = 3;
          break;
          case dotSelectScrollFive:
          angular.element(carouselContainer).animate({scrollLeft: '800'}, 400);
             indexButton = 4;
          break;
          case dotSelectScrollSix:
          angular.element(carouselContainer).animate({scrollLeft: '1000'}, 400);
             indexButton = 5;
          break;
          case dotSelectScrollSeven:
          angular.element(carouselContainer).animate({scrollLeft: '1200'}, 400);
              indexButton = 6;
          break;
     }
      
    selectedDot(value);
    //  var indexvalue=selected.data.index;
    
    }
    function selectedDot(literalelement){
      $element.find('li').filter(function() {
          return angular.element(this).removeClass('active');
      });
     
     // angular.element(dotSelectScroll.children[value]).addClass('active');
      
       angular.element(literalelement).addClass('active');
  
    }
}}
});