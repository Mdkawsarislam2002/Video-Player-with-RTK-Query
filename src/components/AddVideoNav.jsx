import { Link } from "react-router-dom";

const AddVideoNav = () => {
  return (
    <div className="px-5 flex justify-start  py-4 bg-blue-400 mb-3">
      <Link
        to={"/"}
        className="bg-teal-500 hover:bg-teal-700 transition-all duration-200 p-2 rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
    </div>
  );
};

export default AddVideoNav;
