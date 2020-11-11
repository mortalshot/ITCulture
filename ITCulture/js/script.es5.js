"use strict";

$(document).ready(function () {
  $(document).ready(function () {
    // libs
    // Dynamic Adapt v.1
    // HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
    // e.x. data-da="item,2,992"
    // Andrikanych Yevhen 2020
    // https://www.youtube.com/c/freelancerlifestyle
    "use strict";

    (function () {
      var originalPositions = [];
      var daElements = document.querySelectorAll('[data-da]');
      var daElementsArray = [];
      var daMatchMedia = []; //Заполняем массивы

      if (daElements.length > 0) {
        var number = 0;

        for (var index = 0; index < daElements.length; index++) {
          var daElement = daElements[index];
          var daMove = daElement.getAttribute('data-da');

          if (daMove != '') {
            var daArray = daMove.split(',');
            var daPlace = daArray[1] ? daArray[1].trim() : 'last';
            var daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
            var daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
            var daDestination = document.querySelector('.' + daArray[0].trim());

            if (daArray.length > 0 && daDestination) {
              daElement.setAttribute('data-da-index', number); //Заполняем массив первоначальных позиций

              originalPositions[number] = {
                "parent": daElement.parentNode,
                "index": indexInParent(daElement)
              }; //Заполняем массив элементов 

              daElementsArray[number] = {
                "element": daElement,
                "destination": document.querySelector('.' + daArray[0].trim()),
                "place": daPlace,
                "breakpoint": daBreakpoint,
                "type": daType
              };
              number++;
            }
          }
        }

        dynamicAdaptSort(daElementsArray); //Создаем события в точке брейкпоинта

        for (var _index = 0; _index < daElementsArray.length; _index++) {
          var el = daElementsArray[_index];
          var _daBreakpoint = el.breakpoint;
          var _daType = el.type;
          daMatchMedia.push(window.matchMedia("(" + _daType + "-width: " + _daBreakpoint + "px)"));

          daMatchMedia[_index].addListener(dynamicAdapt);
        }
      } //Основная функция


      function dynamicAdapt(e) {
        for (var _index2 = 0; _index2 < daElementsArray.length; _index2++) {
          var _el = daElementsArray[_index2];
          var _daElement = _el.element;
          var _daDestination = _el.destination;
          var _daPlace = _el.place;
          var _daBreakpoint2 = _el.breakpoint;
          var daClassname = "_dynamic_adapt_" + _daBreakpoint2;

          if (daMatchMedia[_index2].matches) {
            //Перебрасываем элементы
            if (!_daElement.classList.contains(daClassname)) {
              var actualIndex = indexOfElements(_daDestination)[_daPlace];

              if (_daPlace === 'first') {
                actualIndex = indexOfElements(_daDestination)[0];
              } else if (_daPlace === 'last') {
                actualIndex = indexOfElements(_daDestination)[indexOfElements(_daDestination).length];
              }

              _daDestination.insertBefore(_daElement, _daDestination.children[actualIndex]);

              _daElement.classList.add(daClassname);
            }
          } else {
            //Возвращаем на место
            if (_daElement.classList.contains(daClassname)) {
              dynamicAdaptBack(_daElement);

              _daElement.classList.remove(daClassname);
            }
          }
        }

        customAdapt();
      } //Вызов основной функции


      dynamicAdapt(); //Функция возврата на место

      function dynamicAdaptBack(el) {
        var daIndex = el.getAttribute('data-da-index');
        var originalPlace = originalPositions[daIndex];
        var parentPlace = originalPlace['parent'];
        var indexPlace = originalPlace['index'];
        var actualIndex = indexOfElements(parentPlace, true)[indexPlace];
        parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
      } //Функция получения индекса внутри родителя


      function indexInParent(el) {
        var children = Array.prototype.slice.call(el.parentNode.children);
        return children.indexOf(el);
      } //Функция получения массива индексов элементов внутри родителя 


      function indexOfElements(parent, back) {
        var children = parent.children;
        var childrenArray = [];

        for (var i = 0; i < children.length; i++) {
          var childrenElement = children[i];

          if (back) {
            childrenArray.push(i);
          } else {
            //Исключая перенесенный элемент
            if (childrenElement.getAttribute('data-da') == null) {
              childrenArray.push(i);
            }
          }
        }

        return childrenArray;
      } //Сортировка объекта


      function dynamicAdaptSort(arr) {
        arr.sort(function (a, b) {
          if (a.breakpoint > b.breakpoint) {
            return -1;
          } else {
            return 1;
          }
        });
        arr.sort(function (a, b) {
          if (a.place > b.place) {
            return 1;
          } else {
            return -1;
          }
        });
      } //Дополнительные сценарии адаптации


      function customAdapt() {//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
    })();
    /*
    let block = document.querySelector('.click');
    block.addEventListener("click", function (e) {
    	alert('Все ок ;)');
    });
    */

    /*
    //Объявляем переменные
    const parent_original = document.querySelector('.content__blocks_city');
    const parent = document.querySelector('.content__column_river');
    const item = document.querySelector('.content__block_item');
    //Слушаем изменение размера экрана
    window.addEventListener('resize', move);
    //Функция
    function move(){
    	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    	if (viewport_width <= 992) {
    		if (!item.classList.contains('done')) {
    			parent.insertBefore(item, parent.children[2]);
    			item.classList.add('done');
    		}
    	} else {
    		if (item.classList.contains('done')) {
    			parent_original.insertBefore(item, parent_original.children[2]);
    			item.classList.remove('done');
    		}
    	}
    }
    //Вызываем функцию
    move();
    */
    // components


    function testWebP(callback) {
      var webP = new Image();

      webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
      };

      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
      if (support == true) {
        document.querySelector('body').classList.add('webp');
      } else {
        document.querySelector('body').classList.add('no-webp');
      }
    });
    $('.header__burger').click(function (event) {
      $('.header__burger, .header__bottom').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });
  mediaQueryHeader = window.matchMedia('(min-width: 881px)');
  mediaQueryHeader.addListener(handleTabletChange);

  function handleTabletChange(e) {
    if (e.matches) {
      var navOffset = $('.site__header .header__bottom').offset().top;
      $(window).scroll(function () {
        var scrolled = $(this).scrollTop();

        if (scrolled > navOffset) {
          $('.site__wrap').addClass('nav-fixed');
        } else if (scrolled < navOffset) {
          $('.site__wrap').removeClass('nav-fixed');
        }
      });
    }
  }

  if (mediaQueryHeader.matches) {
    var navOffset = $('.site__header .header__bottom').offset().top;
    $(window).scroll(function () {
      var scrolled = $(this).scrollTop();

      if (scrolled > navOffset) {
        $('.site__wrap').addClass('nav-fixed');
      } else if (scrolled < navOffset) {
        $('.site__wrap').removeClass('nav-fixed');
      }
    });
  } // mediaQueryMdMin = window.matchMedia('(min-width: 768px)');
  // mediaQueryMdMin.addListener(handleTabletChange);
  // function handleTabletChange(e) {
  //     if (e.matches) {
  //     }
  //     else {
  //     }
  // }
  // if (mediaQueryMdMin.matches) {
  // }


  mediaQueryMax880 = window.matchMedia('(max-width: 880px)');

  if (mediaQueryMax880.matches) {
    $(".header__list .menu-item-has-children a").on("click", function (event) {
      $(this).toggleClass('active');
      $(this).next('.sub-menu').slideToggle(300);
    });
  }
});