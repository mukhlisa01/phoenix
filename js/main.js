
// BURGER MENU
const burgerBtn = document.querySelector('.header .toggler'); 
const headerMenu = document.querySelector('.header .menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    headerMenu.classList.toggle('active')
})


// SCROLLMAGIC
const controller = new ScrollMagic.Controller()

// main
const main = new TimelineMax()
main.to('.main-img', 5, {
    x:'-6%'
})
.to('.social-links', 5, {
    y: '-100'
}, '-=5')
.to('.prev-next', 5, {
    y: '-100'
}, '-=5')

// services
const services = new TimelineMax()
services.to('.arrows-up', 5, {
    y: '400'
})
.to('.services .title-wrap', 5, {
    y: '200'
}, '-=5')
.to('.services .swiper-slide', 5, {
    y: '-150'
}, '-=5')
.to('.services .slider-btns', 5, {
    y: '200'
}, '-=5')

// about
const about = new TimelineMax()
about.to('.about-img', 10, {
    y:'-200'
})

// statistics
const statistics = new TimelineMax()
statistics.to('.statistics .yellow', 6, {
    y: '-200'
})
.to('.statistics .purple', 6, {
    y: '200'
}, '-=6')
.to('.statistics .pink', 6, {
    y: '-200'
}, '-=6')
.to('.statistics .blue', 6, {
    y: '200'
}, '-=6')

// sphere
const sphere = new TimelineMax()
sphere.to('.sphere .swiper', 6, {
    y:'-100',
    x: '-100'
})

// country
const country = new TimelineMax()
country.to('.map', 6, {
    y: '-50'
})

// choose
const choose = new TimelineMax()
choose.to('.choose .dots', 7,{
    y: '100',
    x: '100'
})
.to('.choose-img', 7, {
    y: '-100',
    x: '70'
}, '-=7')
.to('.choose .info.green', 7,{
    y: '300',
    x: '60'
}, '-=7')
.to('.choose .info.blue', 7,{
    y: '-300',
    x: '-50'
}, '-=7')
.to('.choose .info.red', 7,{
    y: '300',
    x: '50'
}, '-=7')

// students
const students = new TimelineMax()
students.to('.students .video', 6, {
    y: '-200'
})

// testimonials
const testimonials = new TimelineMax()
testimonials.to('.testimonials .swiper-slide.second', 6, {
    y: '-200'
})
.to('.testimonials .swiper-slide', 6, {
    y: '200'
}, '-=6')

// news
const news = new TimelineMax()
news.to('.news .news-card.first', 6, {
    y: '-200'
})
.to('.news .news-card.second', 6, {
    y: '200'
}, '-=6')
.to('.news .news-card.third', 6, {
    y: '-200'
}, '-=6')

// contact
const contact = new TimelineMax()
contact.to('.google-map', 6, {
    y: '-200'
})
.to('.contact-form', 6, {
    y: '100'
}, '-=6')


// Scenes
const sceneMain = new ScrollMagic.Scene({
    triggerElement: '.main',
    duration: '100%',
    triggerHook: 0
}). setTween(main).setPin().addTo(controller)

const sceneServe = new ScrollMagic.Scene({
    triggerElement: '.services',
    duration: '100%',
    triggerHook: 0
}).setTween(services).setPin().addTo(controller)

const sceneAbout = new ScrollMagic.Scene({
    triggerElement: '.about',
    duration: '100%',
    triggerHook: 0
}). setTween(about).setPin().addTo(controller)

const sceneStat = new ScrollMagic.Scene({
    triggerElement: '.statistics',
    duration: '100%',
    triggerHook: 0
}). setTween(statistics).setPin().addTo(controller)

const sceneSphere = new ScrollMagic.Scene({
    triggerElement: '.sphere',
    duration: '100%',
    triggerHook: 0
}). setTween(sphere).setPin().addTo(controller)

const sceneCountry = new ScrollMagic.Scene({
    triggerElement: '.country',
    duration: '100%',
    triggerHook: 0
}). setTween(country).setPin().addTo(controller)

const sceneChoose = new ScrollMagic.Scene({
    triggerElement: '.choose',
    duration: '100%',
    triggerHook: 0
}). setTween(choose).setPin().addTo(controller)

const sceneVideo = new ScrollMagic.Scene({
    triggerElement: '.students',
    duration: '100%',
    triggerHook: 0
}). setTween(students).setPin().addTo(controller)

const sceneComment = new ScrollMagic.Scene({
    triggerElement: '.testimonials',
    duration: '100%',
    triggerHook: 0
}). setTween(testimonials).setPin().addTo(controller)

const sceneNews = new ScrollMagic.Scene({
    triggerElement: '.news',
    duration: '100%',
    triggerHook: 0
}). setTween(news).setPin().addTo(controller)

const sceneContact = new ScrollMagic.Scene({
    triggerElement: '.contact',
    duration: '100%',
    triggerHook: 0
}). setTween(contact).setPin().addTo(controller)


// Tweenmax 
TweenMax.staggerFrom('.menu-item-link', 1, {
    opacity: '0',
    x: '30',
    ease: Expo.easeInOut,
    delay: 1
}, 0.5)

TweenMax.from('.main-img', 2, {
    x: '-6%',
    ease: Expo.easeInOut
})

TweenMax.from('.social-links', 3, {
    y: '-100',
    ease: Expo.easeInOut
})
TweenMax.from('.prev-next', 3, {
    y: '-100',
    ease: Expo.easeInOut
})
TweenMax.from('.main .girl', 4, {
    y: '-100',
    x:'50',
    ease: Expo.easeInOut
})
TweenMax.from('.glasses', 4, {
    y: '100',
    x:'-50',
    ease: Expo.easeInOut
})

// HEADER NAV
const menuLinks = document.querySelectorAll('.header .menu-item-link');

for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  
  
// WORLD MAP
const states = document.querySelectorAll('.country .map svg path');
states.forEach((state) => {
    state.addEventListener('click', () => {
        state.classList.toggle('active');
        const value = state.getAttribute('name')
        state.innerText = value
        console.log(value);
    })
})



// VIDEO PLAY ON CLICK
const videoBlock = document.querySelector('.students .video');
const video = videoBlock.querySelector('video')
const playBtn = videoBlock.querySelector('.play');

playBtn.addEventListener('click', (e) => {
    if (video.paused) {
        video.play();
        e.target.style.opacity = '0.2'
        videoBlock.style.opacity = '1'
    } else{
        video.pause()
        e.target.style.opacity = '1'
        videoBlock.style.opacity = '0.8'
    }
})

// SWIPER
const swiper = new Swiper('.swiper', {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  
const swiperSphere = new Swiper('.sphere-swiper', {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: '.sphere .swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.sphere .swiper-button-next',
      prevEl: '.sphere .swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.sphere .swiper-scrollbar',
    },
  });
  
  
