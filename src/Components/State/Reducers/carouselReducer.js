const initialState = {
  myCarousel: [
    {
      id: 1,
      carouselImg: `https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg`,
      carouselTitle: `First Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
    {
      id: 2,
      carouselImg: `https://jongund.github.io/aria-examples/bootstrap-carousel/images/lands-endslide__800x600.jpg`,
      carouselTitle: `Second Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
    {
      id: 3,
      carouselImg: `https://jssors8.azureedge.net/demos/img/gallery/980x380/002.jpg`,
      carouselTitle: `Third Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
  ],
};
export const carouselReducer = (state = initialState, action) => {
  // By usning Swicth case
  // switch (action.type) {
  //   case "ADD_CAROUSEL":
  //     return {
  //       ...state,
  //       myCarousel: [...state.myCarousel, action.data],
  //     };
  //   default:
  //     return state;
  // }
  // By usning if else
  console.log(action);
  if (action.type === "ADD_CAROUSEL") {
    return {
      ...state,
      myCarousel: [...state.myCarousel, action.data],
    };
  } else {
    return state;
  }
};
