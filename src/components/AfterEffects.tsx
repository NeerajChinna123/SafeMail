const AfterEffectsVideo = () => {
    return (
      <div className=" flex items-center justify-center  ">
        <video autoPlay muted loop className=" lg:w-[50%] rounded-lg">
          <source src="/Smart Umpire.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default AfterEffectsVideo;
  