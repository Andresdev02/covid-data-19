import logo from "../img/brand/logo.png";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/solid";
import { BellIcon } from "@heroicons/react/outline";

const Navigation = () => {
  return (
    <nav id="navigation" className="covid-navigation ">
      <section className="covid-navigation-container">
        {/* Logo */}
        <section className="flex items-center space-x-2">
          <img src={logo} alt="logo covid app" className="w-10" />
          <h1 className="font-medium whitespace-nowrap">Covidata 19</h1>
        </section>
        {/* Search */}
        <section className="flex items-center space-x-4">
          <div className="relative text-gray-600 focus-within:text-gray-50 border-gray-20 border rounded-md h-[35px] w-[200px]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-30"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-3 text-sm border-gray-20 border rounded-md h-[35px] w-[200px] outline-none ring-0"
            />
          </div>

          <button className="rounded-full bg-gray-20 w-10 h-10 flex items-center justify-center shadow-sm relative">
            <BellIcon className="w-5 text-gray-50" />
            <div className="w-5 h-5 text-xs flex items-center justify-center rounded-full bg-secondary absolute -right-2 -top-2 shadow-sm">
              3
            </div>
          </button>

          <button className="flex items-center space-x-2 cursor-pointer">
            <p className="whitespace-nowrap text-sm">Belgium</p>
            <ChevronDownIcon className="w-5 text-gray-50 " />
          </button>
        </section>
      </section>
    </nav>
  );
};

export default Navigation;
