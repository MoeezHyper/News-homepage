const Hero = () => {
  return (
    <section>
      <div className="container justify-between items-start max-md:px-4 max-md:flex-col mx-auto lg:px-35">
        {/*Grid 1*/}
        <div class="grid max-md:flex max-md:flex-col grid-cols-3 gap-2">
          <div className="col-span-2 items-center justify-center">
            <div className="items-start flex md:pr-8">
              <img
                src="/image-web-3-desktop.jpg"
                alt="web3"
                className="size-[100%] max-md:hidden"
              />

              <img
                src="/image-web-3-mobile.jpg"
                alt="web3"
                className="size-[100%] md:hidden"
              />
            </div>
          </div>

          {/*Grid 2*/}
          <div className="row-span-2 max-md:order-3 max-md:flex max-md:flex-col items-center justify-center">
            <div className="max-md:mt-12">
              <div className="bg-very-dark-blue py-6 px-6 font-poppins">
                <div className="font-bold text-soft-orange max-md:text-[32px] text-[42px] pb-2 max-md:pb-4">
                  New
                </div>

                <div className="font-poppins">
                  <h1 className="font-bold max-md:text-[20px] text-xl text-white py-4 hover:text-soft-orange cursor-pointer">
                    Hydrogen VS Electric Cars
                  </h1>
                  <p className="text-grayish-blue text-[16px] max-md:text-[14px] leading-[25px]">
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                  <div className="border-1 border-grayish-blue mt-7 mb-5 opacity-35"></div>
                </div>

                <div className="font-poppins">
                  <h1 className="font-bold max-md:text-[20px] text-xl text-white py-4 hover:text-soft-orange cursor-pointer">
                    The Downsides of AI Artistry
                  </h1>
                  <p className="text-grayish-blue text-[16px] max-md:text-[14px] leading-[25px]">
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                  <div className="border-1 border-grayish-blue mt-7 mb-5 opacity-35"></div>
                </div>

                <div className="font-poppins">
                  <h1 className="font-bold max-md:text-[20px] text-xl text-white py-4 hover:text-soft-orange cursor-pointer">
                    Is VC Funding Drying Up?
                  </h1>
                  <p className="text-grayish-blue text-[16px] leading-[25px] max-md:text-[14px]">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*Grid 3*/}
          <div>
            <div className="max-md:flex max-md:order-1 max-md:flex-col">
              <p className="mt-5 text-[56px] font-bold font-poppins max-md:text-[36px] leading-[55px] max-md:leading-[45px]">
                The Bright <br />
                Future of <br className="max-md:hidden" /> Web
                <br className="md:hidden" /> 3.0?
              </p>
            </div>
          </div>

          {/*Grid 4*/}
          <div>
            <div className="max-md:order-2 max-md:flex-col">
              <p className="mt-5 text-[15px] font-normal font-poppins leading-[30px] max-md:leading-[25px] text-dark-grayish-blue max-md:text-[15px] md:mr-10">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <button
                className="mt-5
         cursor-pointer bg-soft-red px-6 py-3 font-poppins tracking-[5px] font-bold text-[16px] uppercase hover:bg-very-dark-blue 
         hover:text-white transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
