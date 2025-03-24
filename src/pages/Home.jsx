import wave from "../assets/wave.svg";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
      <div className="">
        <div className="min-h-[calc(100vh-300px)] flex justify-center">
          <Hero></Hero>
        </div>
        <div className="w-full">
          <img src={wave} alt="" className=" w-full " />
        </div>
      </div>
    </>
  );
};

export default Home;
