import mainImage from "../assets/main.png";
import ITyped from "react-ityped";

const Homepage = () => {
  const strings = [
    "I use",
    "React JS",
    "and create",
    "Reactive",
    "full responsive websites!",
  ];

  return (
    <div className="w-screen flex flex-col md:flex-row items-center justify-around ">
      <div className="w-[70vw] h-[40vh]  md:w-[40vw] md:h-[50vh] lg:w-[40vw] lg:h-[60vh] 2xl:w-[35vw] 2xl:h-[70vh] bg-red-700 rounded-full flex items-center justify-center overflow-hidden scale-125 ">
        <img src={mainImage} alt="pesonal" className="scale-125" />
      </div>
      <div className="text-2xl font-black font-body w-[35vw] h-[10vh] self-center">
        <h3 className="">Hi there, I'm</h3>
        <h1 className="text-5xl">Amir Kazemi</h1>
        <ITyped
          className="text-red-700 font-black text-2xl md:text-4xl"
          showCursor={false}
          strings={strings}
          typeSpeed={200}
          backSpeed={50}
          startDelay={100}
          backDelay={250}
        />
      </div>
    </div>
  );
};

export default Homepage;
