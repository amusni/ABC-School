let menu = document.querySelector('.menu-icon');

menu.onclick = () =>{
    menu.classList.toggle("move");
};

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  let header = document.querySelector("header");

  window.addEventListener("scroll", () => {
      header.classList.toggle("header-active", window.scrollY > 0);
  });
  let scrollTop = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
      scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
  });