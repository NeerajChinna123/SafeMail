
import AfterEffectsVideo from "../components/AfterEffects";
import { BannerType, FitZoneType } from "../../typings";

export interface propsData {
  banner: [BannerType];
  fitZone: [FitZoneType];
}

const Main = (props: propsData) => {
  return (
    //@ts-ignore
    <div className="relative">
    {/* @ts-ignore */}
      <div className="relative">
        {/* @ts-ignore */}
        <div className="h-screen bg-white">
          <AfterEffectsVideo />
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
      </div>
      {/* @ts-ignore */}
      <main className="bg-white min-h-screen">

        <div className="max-w-7xl mx-auto mt-[4rem] h-screen border border-solid-800 rounded-lg shadow shadow-md shadow-gray-400">
ok ok 

        </div>
        {/* @ts-ignore */}
        <div className="">
          {/* <Header /> */}
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
        <div className="">
          {/* <Banner bannerData={props?.banner} /> */}
          {/* <PersonalAiTrainer fitZone={props?.fitZone}  /> */}
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
        <div>
          {/* @ts-ignore */}
          {/* <RunoutPrediction /> */}
          {/* @ts-ignore */}
        </div>
        {/* @ts-ignore */}
        
        {/* @ts-ignore */}
      </main>
      {/* <div className="max-w-7xl ml-1 lg:mx-auto flex flex-row justify-center">
        <Nav />
      </div> */}
      {/* <div className="  max-w-7xl  lg:mx-auto  ">
        <AudioComponent />
      </div> */}
      {/* @ts-ignore */}
    </div>
  );
};

export default Main;
