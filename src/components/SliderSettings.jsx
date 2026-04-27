const settings = {
    className: "center",
    centerMode: false,
    infinite: true ,
    centerPadding: "60px",
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  export default settings;