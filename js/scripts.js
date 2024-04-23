document.addEventListener("DOMContentLoaded", function () {
  const items = [
    { id: 1, bgImg: "images/me/me+tyler.jpeg", title: "First Image" },
    { id: 2, bgImg: "images/me/spain2.jpeg", title: "Second Image" },
    { id: 3, bgImg: "images/me/flowers2.jpeg", title: "Third Image" },
  ];

  const swiperWrapper = document.querySelector(".swiper-wrapper");

  items.forEach((item) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
            <img src="${item.bgImg}" alt="description" class="bgImg">
            <div class="content">
                <h1 class='number'>${item.id}</h1>
                <h2 class='describe'>${item.title}</h2>
            </div>
        `;
    swiperWrapper.appendChild(slide);

    slide
      .querySelector(".bgImg")
      .addEventListener("click", () => handleChange(item.id));
  });

  function handleChange(id) {
    items.forEach((item) => {
      const img = swiperWrapper.children[item.id - 1].querySelector(".bgImg");
      const content =
        swiperWrapper.children[item.id - 1].querySelector(".content");
      if (item.id === id) {
        img.classList.add("active");
        content.classList.add("active");
      } else {
        img.classList.remove("active");
        content.classList.remove("active");
      }
    });
  }

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});
