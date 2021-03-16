
/*==================== 顯示 MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* //!============彈出式影片 開啟 open ==========*/
const btnOpenVideo = document.querySelectorAll(".city_video-content")
const cityPopup = document.getElementById("popup")

function poPup(){
    cityPopup.classList.add("show-popup")
}

btnOpenVideo.forEach(b => b.addEventListener("click",poPup))

/* //!============彈出式影片 關閉 close ==========*/
const btnCloseVideo = document.getElementById("popup-close")

btnCloseVideo.addEventListener("click",()=>{
    cityPopup.classList.remove("show-popup")
})

/*//!-------------swiper js-------------*/ 
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
  })

let galleryTop = new Swiper('.gallery-top', {
    effect:"fade",
    loop: true,
    thumbs: {
      swiper: galleryThumbs
    }
  })

/*//!-------------gsap js 未顯示??-------------*/ 
const controlImg = document.querySelectorAll(".controls_img")

function ScrollAnimation(){
    gsap.from(".city_subtitle",{opacity:0, duration:0.2, delay:0.2, y:-20})
    gsap.from(".city_title",{opacity:0, duration:0.3, delay:0.3, y:-20})
    gsap.from(".city_description",{opacity:0, duration:0.4, delay:0.4, y:-20})
    gsap.from(".city_button",{opacity:0, duration:0.5, delay:0.5, y:-20})
    gsap.from(".city_video-content",{opacity:0, duration:0.6, delay:0.6, y:-20})
}

controlImg.forEach(c => c.addEventListener("click", ScrollAnimation))
