import { compro } from "../../assets";

export const CompanyProfile = () => {
  const handleExternalClick = () => {
    window.open("https://anugerahraprisejahtera.vercel.app/", "_blank");
  };

  return (
    <div id="company-profile" className="flex">
      <div className="w-1/2 flex justify-center items-center">
        <img src={compro} alt="company" className="w-[20rem] h-[15rem]" />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl font-primary">Company Profile</h1>
        <h1 className="mt-6 font-primary">
          We provide comprehensive company profile services to help your
          business establish a strong presence and stand out in a competitive
          market.
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
