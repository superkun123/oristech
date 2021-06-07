$( document ).ready(function() {

  // Слайдер
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
      
        // If we need pagination
     
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        pagination: {
          el: '.swiper-pagination',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })

// Анимация для прокрутки полосы с логотипами
      $('.scroll-line').marquee({
        startVisible: true, 
        duplicated: true, 
        speed: 100,
      });



// Поиск
      $('.search').on('click', function() {
        $('.search-sect').toggleClass('show')
        $('body').toggleClass('open')
        $('.search').toggleClass('bg-color')
      })


// 

    $('.btn-link-in-filter').on('click', function(e) {
      e.preventDefault()
      $('.product-card-filter__container').toggleClass('block')
    })


    $('.product-card-filter__btn').on('click', function(e) {
      e.preventDefault()
    })


  // Главное меню
    $('.hamburger').on('click', function(e) {
      e.preventDefault()
      $('.mobile-menu').toggleClass('show-menu')
      $('.firstline').toggleClass('line-close-one')
      $('.secondline').toggleClass('line-close-two')
    })


// Каталог
    $('.catalog').on('click', function(e) {
      e.preventDefault()
      $('.aside-menu-catalog').toggleClass('show-aside')
      $('.search-mask-body').toggleClass('search-mask-body-show')
      $('body').toggleClass('noscroll')
    })


    $('.search-mask-body-show').on('click', function() {
      console.log('clock')
      $('.aside-menu-catalog').toggleClass('show-aside')
      $('.search-mask-body').toggleClass('search-mask-body-show')
      $('body').removeClass('noscroll')
    })


    $('.aside-catalog-cross').on('click', function() {
      $('.aside-menu-catalog').toggleClass('show-aside')
      $('.search-mask-body').toggleClass('search-mask-body-show')
      $('body').removeClass('noscroll')
    })


// Меню фильтров

const navExpandFilter = [].slice.call(document.querySelectorAll('.nav-expand-filter'))
console.log(navExpandFilter)
const backLinkFilter = ``

navExpandFilter.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLinkFilter)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


const filterBtn = document.getElementById('filter-btn')
const filterCross = document.querySelector('.cross-filter')
if (filterBtn) {
filterBtn.addEventListener('click', function() {
  document.body.classList.toggle('nav-is-toggled-filter')
})

}


// Закрыть фильтр

$('.cross-filter').on('click', function() {
  console.log('click-filter')
  $('body').toggleClass('nav-is-toggled-filter')
})


// Табы

$('.js-tab-trigger').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
  
  $('.js-tab-trigger.active').removeClass('active'); 
  $(this).addClass('active'); // 2
  
  $('.js-tab-content.active').removeClass('active'); 
  content.addClass('active'); 
});

// Плавный скролл

$('body').on('click', 'a.up', function(e){
  e.preventDefault()
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
   $('body,html').animate({scrollTop: top}, 1500);
  
});




})
