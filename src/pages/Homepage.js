import mainImage from "../assets/main.png";

const Homepage = () => {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="w-[50%] h-[70%] bg-red-700 rounded-full flex items-center justify-center overflow-hidden scale-125 ">
        <img src={mainImage} alt="pesonal" className="scale-125" />
      </div>
      <div></div>
    </div>
  );
};

export default Homepage;
