import wave from "../assets/wave.svg";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
      <div className="">
        <div className="min-h-[calc(100vh-118px)] relative flex-col flex justify-center">
          <Hero></Hero>
        <div className="w-full absolute bottom-0">
          <img src={wave} alt="" className=" w-full " />
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
