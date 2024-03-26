const AfterEffectsVideo = () => {
    return (
      <div className=" flex items-center justify-center h-screen ml-[30rem] ">
        <video autoPlay muted loop className=" lg:w-[38%] rounded-lg">
          <source src="/Comp 6_2.mp4"  type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default AfterEffectsVideo;
  