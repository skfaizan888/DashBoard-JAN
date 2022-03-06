import React, { useState } from "react";
import { useDispatch } from "react-redux";
const MyCarouselChild = () => {
  const [carouselImg, setCarouselImg] = useState();
  const [carouselTitle, setCarouselTitle] = useState();
  const [carouselDescription, setCarouselDescription] = useState();
  const myDispatch = useDispatch();
  const dispatchHandler = () => {
    if (
      carouselImg == undefined &&
      carouselTitle == undefined &&
      carouselDescription == undefined
    ) {
      alert("Please fill require field");
    }else if(!carouselImg){
      alert("please fill image")
    }else if(!carouselTitle){
      alert("please fill Title");
    }else if(!carouselDescription){
      alert("please fill Description");
    }else{
      myDispatch({
        type:"ADD_CAROUSEL",
        data:{carouselImg, carouselTitle, carouselDescription},
      });
    }
   
  };

  return (
    <div>
      <input
        type="text"
        placeholder="https://blog.ndepend.com/wp-content/uploads/global-coding-standards-2-960x460.jpg"
        className="m-2"
        onChange={(e) => setCarouselImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="dispatch title here"
        className="m-2"
        onChange={(e) => setCarouselTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="dispatch desc "
        className="m-2"
        onChange={(e) => setCarouselDescription(e.target.value)}
      />
      <button
        onClick={() =>
          myDispatch({
            type: "ADD_CAROUSEL",
            data: { carouselImg, carouselTitle, carouselDescription },
          })
        }
      >
        Add Carousel
      </button>
    </div>
  );
};

export default MyCarouselChild;
