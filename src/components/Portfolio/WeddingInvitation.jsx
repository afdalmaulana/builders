import { weddingInv } from "../../assets";

export const WeddingInvitation = () => {
  const handleExternalClick = () => {
    window.open("https://wedding-of-rimba-dewi.vercel.app/", "_blank");
  };

  return (
    <div className="flex mt-[6rem]" id="wedding-invitation">
      <div className="w-1/2 flex flex-col">
        <h1 className="text-4xl font-primary">Wedding Invitation</h1>
        <h1 className="mt-6 font-primary text-greys">
          We offer comprehensive wedding invitation services to make your
          special day unforgettable and stand out with unique and elegant
          designs.
        </h1>
        <button
          className="w-[20rem] px-8 py-2 bg-oranges text-primary text-xl rounded-xl mt-4 hover:bg-secondary hover:text-primary"
          onClick={handleExternalClick}
        >
          See Portfolio
        </button>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={weddingInv}
          alt="wedding invitation"
          className="w-[20rem] h-[15rem]"
        />
      </div>
    </div>
  );
};
