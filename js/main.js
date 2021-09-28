const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    //Logic..
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window.addEventListener('scroll', function () {
//     console.log('scroll!');
// });

window.addEventListener('scroll', _.throttle(function() {
    console.log('scroll!'); 
    if (window.scrollY > 500) {
     // 배지 숨기기
    //  badgeEl.getElementsByClassName.display = 'none'; 
    //gsap.to(요소 지속시간, 옵션, {속성});
    gsap.to(badgeEl, .6, {  //객체데이터 형식자체에서는 속성을 추가할 수있다
        // name: ' ',
        // age: ' '
        opacity: 0,
        display: 'none' 
    });
    //버튼 보이기!
    gsap.to('#to-top', .2, {
        x: 0
    });

    } else {                               // 화면에서 보임
    //    badgeEl.getElementsByClassName.display = 'block'; 
      // 배지 보이기                        // 화면에서 안보임
      gsap.to(badgeEl, .6, { opacity: 3, display: 'block' });
      // 버튼 숨기기!
      gsap.to('#to-top', .2, {
          x: 100
      });
    }
}, 300));
// _.throttle(함수, 시간)
// 자바스크립트에 애니메이션 라이브러리를 도입해 보려고 한다!
// 그래서 자바스크립트를 통해서 
// HTML 요소에다가 간단한 애니메이션을 추가할 수 있는
// 여러가지 라이브러리가 있다 
// 그중에 G#이라는 라이브러리를 사용해 볼 것이다.
//★ 구글 검색창에서 gsap cdn  = 지삽 씨디엔 을 검색해보자~~
 
// const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
   gsap.to(window, .7, {
       scrollTo: 0
   });
});










// ★새로운 기능을 만든다~
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap. to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
      delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
      opacity: 1
  });
});

//new 키워드로 생성자함수를 만든다..
// new Swiper(선택자, 옵션)으로 스와이퍼의 기능을 만들어 낸다     
new Swiper('.notice-line .swiper-container', { 
            direction: 'vertical', 
            autoplay: true,        
            loop: true         
}); 


new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', 기본값으로 들어있다 추가할필요없음!!
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, 
    // autoplay: {
        // delay: 5000
    // }
    pagination: {
        el: '.promotion .swiper-pagination',// 페이지번호 요소선택자
        clickable: true //사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
//    direction: 'horizontal' 
      autoplay: true,
      loop: true,
      spaceBetween: 30,
      slidesPerView: 5,
      navigation: {
          prevEl: '.awards .swiper-prev',
          nextEl: '.awards .swiper-next'
       }
});




//                                          =promotionEl
//.promotion 프로모우션 클래스 요소를 찾아서 프로모우션엘리먼트변수에 할당한다
//.toggle-promotion 클래스 요소를 찾아서 프로모우션토글버튼 변수에 할당한다
//                                       =promotionToggleBtn
//promotionEl, promotionToggleBtn
//  요소     ,   요소

// 그리고, isHidePromotion이 지금 false인데, 이름에서 유추할 수 있듯이
// isHidePromotion이 영역이 숨겨졌니? 이름을 가지고 있는 변수 값이 지금 false니까
//  안 숨겨져 있다=보이고 있다=처음에는
// 그런데 promotionToggleBtn을 클릭을하면=선택하면 어떤 함수가 실행이 되고
//    그 함수에서  isHidePromotion 값을 체크를 해서 그것의 반대값을
// 다시 할당하는 것이다.. 그러면 처음에는 false 였으니까.. 그것의 반대값인
// true가 isHidePromotion에 재할당이 되고, 그렇게 재할당된 값은..
// true니까.. if조건문에서 숨김처리!하는 조건문이 실행이 된다
//                         =promotionEl.classList.add('hide');
// 다시 hide 구조를 지워라하면 다시 보일 수 있는 구조가 된다!!
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        // 숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
});

//자바스크립트로 직접적으로 보이고 안보이고를 제어하기 보다는..
//  클래스만 간단하게 추가하고 빼는 이런 역할들을 통해서,
//                 add('hide') remove('hide')
//  뭔가가 보이고 애니메어션 처리하는 부분은 css 쪽에서 제어해주는 것이 좋다.
// 

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);\
    gsap.to(selector, //선택자
         random(1.5, 2.5),  // 애니메이션 동작 시간
       { //옵션
        y: 20,    
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic
    .Scene({                     
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 
                                 
        triggerHook: .8 
     
     })                     

    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
 });

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 



















