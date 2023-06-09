import { Link } from "react-router-dom";
// import Delete from "./Delete";

/* eslint-disable react/prop-types */
const SingleVideo = ({ data }) => {
  return (
    <>
      <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
        <div className="w-full flex flex-col">
          <div className="relative">
            <Link to={`video/${data.id}`}>
              <img
                src={data.thumbnail}
                className="w-full h-auto"
                alt="Some video title"
              />
            </Link>

            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              12:10
            </p>
          </div>

          <div className="flex flex-row mt-2 gap-2">
            <Link to={`video/${data.id}`}>
              <img
                src="https://avatars.githubusercontent.com/u/73503432?v=4"
                className="rounded-full h-6 w-6"
                alt="Learn with Sumit"
              />
            </Link>

            <div className="flex flex-col">
              <Link to={`${data.id}`}>
                <p className="text-slate-900 text-sm font-semibold">
                  {data.title}
                </p>
              </Link>
              <Link
                to={`video/${data.id}`}
                className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                href="#"
              >
                Learn with Sumit
              </Link>
              {/* <Delete /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVideo;
