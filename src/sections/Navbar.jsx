import { useEffect, useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <section className="relative">
      <div className="container flex justify-between items-start mx-auto max-md:px-4 py-10 lg:px-35">
        <div>
          <img src="/logo.svg" alt="Logo" />
        </div>

        <div className="flex space-x-10 items-end font-poppins text-[var(--color-dark-grayish-blue)] max-md:hidden text-[15px]">
          <div className="cursor-pointer hover:text-[var(--color-soft-red)]">
            Home
          </div>
          <div className="cursor-pointer hover:text-[var(--color-soft-red)]">
            New
          </div>
          <div className="cursor-pointer hover:text-[var(--color-soft-red)]">
            Popular
          </div>
          <div className="cursor-pointer hover:text-[var(--color-soft-red)]">
            Trending
          </div>
          <div className="cursor-pointer hover:text-[var(--color-soft-red)]">
            Categories
          </div>
        </div>

        <div
          className="md:hidden flex items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`${isOpen ? "icon-menu-close.svg" : "icon-menu.svg"}`}
            alt="hamburger"
            className="z-4 size-13 object-contain -mt-1 transition-all duration-1000 ease-in-out"
          />
        </div>
      </div>
      {isOpen && (
        <div className="bg-very-dark-blue h-full w-full z-2 fixed top-0 opacity-50" />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg 2 z-3 transform transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col space-y-8 py-50 px-10 font-poppins text-[25px]">
          <div className="cursor-pointer ">Home</div>
          <div className="cursor-pointer">New</div>
          <div className="cursor-pointer">Popular</div>
          <div className="cursor-pointer ">Trending</div>
          <div className="cursor-pointer">Categories</div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
