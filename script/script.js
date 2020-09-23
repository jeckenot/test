$(function () {

  $('#demo-coverflow').coverflow({
    enableWheel: false,
    duration: 'normal',
  });

  let anchors = document.querySelectorAll("a[href*='#']");
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      let blockID = anchor.getAttribute('href')
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

    })
  }


  $(document).ready(function () {
    $(".anim_poster #top_poster").css({
      "left": "2000px",
      "transition": "3.5s",
      "transition-timing-function": "ease-in",
      "transition-delay": "0.15s"

    })
    $(".anim_poster .blue_line ").css({
      "left": "2000px",
      "transition": "3.5s",
      "transition-timing-function": "ease-in",
      "transition-delay": "0.17s"

    })
    $(".anim_poster #top_poster1, .yellow_line").css({
      "left": "2000px",
      "transition": "3.5s",
      "transition-timing-function": "ease-in",
      "transition-delay": "0.22s"

    })
    $(".anim_poster #top_poster_mirrored, .blue_line_mirrored").css({
      "left": "-2000px",
      "transition": "3s",
      "transition-timing-function": "ease-in",
      "transition-delay": "3.8s"

    })
    $(".anim_poster #top_poster1_mirrored, .yellow_line_mirrored").css({
      "left": "-2000px",
      "transition": "3s",
      "transition-timing-function": "ease-in",
      "transition-delay": "3.85s"

    })






  })





})