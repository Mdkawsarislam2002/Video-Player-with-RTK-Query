import { Link } from "react-router-dom";
import lws from "../assets/lws.svg";

const Nav = () => {
  return (
    <div>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link to="/">
            <img className="h-10" src={lws} alt="Learn with Sumit" />
          </Link>
          {/* btn */}
          <div>
            <Link
              to={"/add"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add Video
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
