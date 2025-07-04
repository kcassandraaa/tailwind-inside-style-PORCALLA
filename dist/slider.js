var slider = tns({
  container: ".testimonials__slider",
  items: 3,
  slideBy: 1,
  rewind:true,
  autoplay: true,
  navPosition: "bottom",
  speed: 200,
  autoplayButtonOutput: false,
  nav:true,
  controls:false,
  responsive: {
    1250: {
        items: 3
    },
    200:{
        items: 1
    }
  }
});
