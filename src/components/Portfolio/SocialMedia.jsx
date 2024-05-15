import { compro } from "../../assets"; // Update the import to the correct path

export const SocialMedia = () => {
  const handleExternalClick = () => {
    window.open("https://anugerahraprisejahtera.vercel.app/", "_blank");
  };

  return (
    <div className="flex mt-[6rem]" id="social-media">
      <div className="w-1/2 flex justify-center items-center">
        <img src={compro} alt="social media" className="w-[20rem] h-[15rem]" />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl font-primary">Social Media Management</h1>
        <h1 className="mt-6 font-primary">
          We deliver comprehensive social media management services to elevate
          your brand's online presence and distinguish it in a crowded digital
          landscape.
        </h1>
        <button
          className="w-[20rem] px-8 py-2 bg-oranges text-primary text-xl rounded-xl mt-4 hover:bg-secondary hover:text-primary"
          onClick={handleExternalClick}
        >
          See Portfolio
        </button>
      </div>
    </div>
  );
};
