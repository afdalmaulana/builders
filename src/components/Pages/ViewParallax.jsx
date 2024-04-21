export const ViewParallax = () => {
  return (
    <>
      <div className="relative flex justify-center items-center h-96 bg-fixed bg-cover bg-parallax">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="z-10 text-5xl uppercase text-white font-bold relative">
          Your Vision, Your Branding Solution
        </h1>
      </div>
    </>
  );
};
