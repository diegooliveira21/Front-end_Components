function SwiperCall() {
  let galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  let galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
}

function Light() {
  const imgList = document.querySelectorAll(".image");

  const lightbox = document.querySelector("#lightbox");
  const lightboxGallery = document.querySelector(".lightbox-gallery");
  const lightboxThumbs = document.querySelector(".lightbox-thumbnails");

  const closeLightboxBg = document.querySelector(".lightbox-background");
  const closeLightboxIcon = document.querySelector(".lightbox-close");

  function close() {
    lightboxGallery.innerHTML = "";
    lightboxThumbs.innerHTML = "";
    lightbox.classList.remove("is-active");
  }

  closeLightboxBg.addEventListener("click", close);
  closeLightboxIcon.addEventListener("click", close);

  const populateLightbox = event => {
    lightbox.classList.toggle("is-active");

    let lightboxID = event.currentTarget.getAttribute("data-lightbox-id");
    let lightboxIDSelect = ".image" + '[data-lightbox-id="' + lightboxID + '"]';
    let lightboxNode = document.querySelectorAll(lightboxIDSelect);

    for (let i = 0; i < lightboxNode.length; i++) {
      console.log(lightboxNode[i]);
      let cloned = lightboxNode[i].cloneNode(true);
      lightboxGallery.appendChild(cloned);
    }

    for (let i = 0; i < lightboxNode.length; i++) {
      console.log(lightboxNode[i]);
      let cloned = lightboxNode[i].cloneNode(true);
      lightboxThumbs.appendChild(cloned);
    }
    SwiperCall();
  };

  for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", populateLightbox);
  }
}
Light();
