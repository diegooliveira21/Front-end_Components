import "./styles.css";
import "./slider.css";
import "animate.css/animate.min.css";
import "bulma/css/bulma.min.css";

function swiperProject() {
  let swiper = new Swiper(".swiper-container", {
    slidesPerView: 1.4,
    centeredSlides: true,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}

const list = {
  projects: [
    {
      postID: "01",
      title: "Hey, Spider-man!",
      review:
        "She did this for a year until her mom got better, and she told everyone at the roundtable that the reason she joined our campaign was so that she could help the millions of other children in the country who want and need to help their parents too.",
      featured:
        "https://cdnb.artstation.com/p/assets/images/images/017/834/715/large/julen-urrutia-spideycloseup-00000.jpg?1557501131",
      gallery: [
        {
          link:
            "https://cdna.artstation.com/p/assets/images/images/017/834/710/large/julen-urrutia-spiderman-callejon.jpg?1557501128",
          description: ""
        },
        {
          link:
            "https://cdna.artstation.com/p/assets/images/images/017/867/404/large/julen-urrutia-sun3-00000.jpg?1557656901",
          description: ""
        },
        {
          link:
            "https://cdna.artstation.com/p/assets/images/images/017/834/714/large/julen-urrutia-3.jpg?1557501131",
          description: ""
        },
        {
          link:
            "https://cdna.artstation.com/p/assets/images/images/017/834/708/large/julen-urrutia-1.jpg?1557503370",
          description: ""
        },
        {
          link:
            "https://cdnb.artstation.com/p/assets/images/images/017/834/711/large/julen-urrutia-2.jpg?1557501128",
          description: ""
        }
      ]
    },
    {
      postID: "59",
      title: "You are Amazing!!",
      review:
        "She did this for a year until her mom got better, and she told everyone at the roundtable that the reason she joined our campaign was so that she could help the millions of other children in the country who want and need to help their parents too.",
      featured:
        "https://cdnb.artstation.com/p/assets/images/images/017/834/715/large/julen-urrutia-spideycloseup-00000.jpg?1557501131",
      gallery: [
        {
          link:
            "https://cdna.artstation.com/p/assets/images/images/017/834/710/large/julen-urrutia-spiderman-callejon.jpg?1557501128",
          description: ""
        },
        {
          link:
            "https://cdna.artstation.com/p/assets/images/images/017/867/404/large/julen-urrutia-sun3-00000.jpg?1557656901",
          description: ""
        },
        {
          link:
            "https://cdna.artstation.com/p/assets/images/images/017/834/714/large/julen-urrutia-3.jpg?1557501131",
          description: ""
        },
        {
          link:
            "https://cdna.artstation.com/p/assets/images/images/017/834/708/large/julen-urrutia-1.jpg?1557503370",
          description: ""
        },
        {
          link:
            "https://cdnb.artstation.com/p/assets/images/images/017/834/711/large/julen-urrutia-2.jpg?1557501128",
          description: ""
        }
      ]
    }
  ]
};

function galleryLoop() {
  let projectlist = [];

  for (let index of list.projects) {
    let gallerylist = [];
    console.log(index);

    let jsonPostID = index.postID;
    let jsonFeatured = index.featured;
    let jsonTitle = index.title;
    let jsonReview = index.review;
    let jsonGallery = index.gallery;

    for (let image of jsonGallery) {
      let gallery =
        '<div class="image swiper-slide gallery-thumb" data-lightbox-id="' +
        jsonPostID +
        '" style="background-image: url(' +
        image.link +
        ')">' +
        "</div>";
      gallerylist.push(gallery);
      console.log(gallery);
    }

    var project =
      '<div class="swiper-slide">' +
      '<div class="container gallery-item">' +
      '<div class="columns">' +
      '<div class="column">' +
      '<div class="image featured-image swiper-slide" data-lightbox-id="' +
      jsonPostID +
      '" style="background-image: url(' +
      jsonFeatured +
      ')">' +
      "</div>" +
      "<!-- nested-columns.Description + Gallery -->" +
      '<div class="columns">' +
      '<div class="column is-half">' +
      '<div class="card">' +
      '<div class="card-content">' +
      "<h3>" +
      jsonTitle +
      "</h3>" +
      "<h4>" +
      jsonReview +
      "</h4>" +
      '<a href="">Saiba Mais</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="column">' +
      '<div class="gallery-list is-inline-flex">' +
      gallerylist.join("") +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    console.log(project);
    projectlist.push(project);
  }

  document.querySelector("#app2 .container").innerHTML =
    '<div class="swiper-container">' +
    '<div class="swiper-wrapper">' +
    projectlist.join("") +
    '</div><div class="carrosel-control"><a href="#" class="swiper-button-prev"></a>' +
    '<a href="#" class="swiper-button-next"></a></div>' +
    "</div>";

  swiperProject();
}
galleryLoop();
