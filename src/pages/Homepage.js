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
    <div
      className="w-screen flex flex-col items-center justify-between md:flex-row gap-16"
      id="homepage"
    >
      <div className="flex-[0.5] w-full bg-red-500 self-center flex justify-center items-center clip-circle h-[80%] ">
        <img
          src={mainImage}
          alt="pesonal"
          className="scale-125 translate-y-6"
        />
      </div>
      <div className="text-2xl font-black font-body flex-[0.5] self-center md:ml-20 dark:text-white">
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
