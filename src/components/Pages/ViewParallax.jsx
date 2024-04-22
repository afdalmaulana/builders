export const ViewParallax = () => {
  return (
    <>
      <div className="relative flex justify-center items-center h-64 desktop:h-96  bg-fixed bg-cover bg-parallax text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="z-10 text-3xl desktop:text-5xl uppercase text-white font-bold relative">
          Your Vision, Your Branding Solution
        </h1>
      </div>
    </>
  );
};
