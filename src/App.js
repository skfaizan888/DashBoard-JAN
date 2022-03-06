import React from "react";
import "./App.css";
// import UseRef from "./Components/Hooks/UseRef";
// import FetchData from "./Components/API/FetchData";
// import PostData from "./Components/API/PostData";
import MyCarousel from "./Components/Body/MyCarousel";
// import UseCallBack from "./Components/Hooks/UseCallBack/UseCallBack";
import { OurMentors } from "./Components/Body/OurMentors";
import { Navigation } from "./Components/Navigation/Navigation";
import Courses from "./Components/Body/Courses"
import Footer from "./Components/Body/Footer";



// import Testing from "./Components/Testing";
// import { ProductList } from "./Components/ProjectCRUD/ProductList";
// import FetchingDataFromRedux from "./Components/Redux/FetchingDataFromRedux";
function App() {
  return (
    <div className="App">
     
      {/* <h1>App Component</h1> */}
      <Navigation />
      <br />
      <br />
      <br />
      <MyCarousel />
      <OurMentors />
      <Courses /> 
      <Footer />
      {/* <ProductList /> */}
      {/* <PostData /> */}
      {/* <FetchData /> */}
      {/* <FetchingDataFromRedux /> */}
      {/* <UseRef /> */}
      {/* <UseCallBack /> */}
      {/* <Testing /> */}
    </div>
  );
}

export default App;
