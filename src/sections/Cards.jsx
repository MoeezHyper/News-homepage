const Cards = () => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row items-start py-15 max-lg:gap-y-10 -space-x-4 mx-auto lg:px-35 lg:pt-20 max-md:pr-5">
        <div className="flex items-start space-x-2 flex-1">
          <img
            src="/image-retro-pcs.jpg"
            alt="Retro PCs"
            className="object-contain size-35 shrink-0"
          />
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-soft-red max-md:text-[32px] text-4xl lg:text-4xl">
              01
            </h1>
            <p className="font-extrabold font-poppins max-md:text-[18px] text-xl cursor-pointer hover:text-soft-red">
              Reviving Retro PCs
            </p>
            <p className="font-poppins text-dark-grayish-blue max-md:text-[14px] leading-[25px]">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-2 flex-1">
          <img
            src="/image-top-laptops.jpg"
            alt="Retro PCs"
            className="object-contain size-35 shrink-0"
          />
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-soft-red max-md:text-[32px] text-4xl lg:text-4xl">
              02
            </h1>
            <p className="font-extrabold font-poppins max-md:text-[18px] text-xl cursor-pointer hover:text-soft-red">
              Top 10 Laptops of 2022
            </p>
            <p className="font-poppins text-dark-grayish-blue max-md:text-[14px] leading-[25px]">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-2 flex-1 mb-15">
          <img
            src="/image-gaming-growth.jpg"
            alt="Retro PCs"
            className="object-contain size-35 shrink-0"
          />
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-soft-red max-md:text-[32px] text-4xl lg:text-4xl">
              03
            </h1>
            <p className="font-extrabold font-poppins max-md:text-[18px] text-xl cursor-pointer hover:text-soft-red">
              The Growth of Gaming
            </p>
            <p className="font-poppins text-dark-grayish-blue max-md:text-[14px] leading-[25px]">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
