import Hero from "../components/hero";
import wave from '../assets/wave.svg'
const Home = () => {
  return (
    <div className="min-h-screen relative">
        <Hero></Hero>
        <img src={wave} alt="" className="absolute w-full bottom-0" />
    </div>
  );
};

export default Home;
