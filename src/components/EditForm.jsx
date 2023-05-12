/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import {
  useGetSingleVideoQuery,
  useEditVideoMutation,
} from "../Redux/features/apiSlice/apiSlice";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import { useState } from "react";

const EditForm = () => {
  let { id } = useParams();
  const { data } = useGetSingleVideoQuery(id);
  const [EditVideo, { isSuccess, isLoading }] = useEditVideoMutation();

  const [NewTitle, SetNewTitle] = useState(data?.title || "");
  const [NewDescription, SetNewDescription] = useState(data?.description || "");
  const [NewAuthor, SetNewAuthor] = useState(data?.author || "");
  const [NewDate, SetNewDate] = useState(data?.date || "");
  const [NewDuration, SetNewDuration] = useState(data?.duration || "");
  const [NewViews, SetNewViews] = useState(data?.views || "");
  const [NewLink, SetNewLink] = useState(data?.link || "");
  const [NewThumbnail, SetNewThumbnail] = useState(data?.thumbnail || "");

  const EditedFormHandler = (value, type) => {
    switch (type) {
      case "title":
        SetNewTitle(value);
        break;
      case "description":
        SetNewDescription(value);
        break;
      case "author":
        SetNewAuthor(value);
        break;
      case "date":
        SetNewDate(value);
        break;
      case "duration":
        SetNewDuration(value);
        break;
      case "views":
        SetNewViews(value);
        break;
      case "link":
        SetNewLink(value);
        break;
      case "thumbnail":
        SetNewThumbnail(value);
        break;

      default:
        break;
    }
  };

  const FormHandler = (e) => {
    e.preventDefault();
    EditVideo({
      id,
      body: {
        title: NewTitle,
        description: NewDescription,
        author: NewAuthor,
        date: NewDate,
        duration: NewDuration,
        views: NewViews,
        link: NewLink,
        thumbnail: NewThumbnail,
      },
    });
  };

  return (
    <>
      <form onSubmit={FormHandler}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Video Title"
                  value={NewTitle}
                  id={id}
                  onChange={(e) => EditedFormHandler(e.target.value, "title")}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Author"
                  id={id}
                  value={NewAuthor}
                  onChange={(e) => EditedFormHandler(e.target.value, "author")}
                />
              </div>

              <div className="col-span-6">
                <TextArea
                  title="Description"
                  id={id}
                  value={NewDescription}
                  onChange={(e) =>
                    EditedFormHandler(e.target.value, "description")
                  }
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  title="YouTube Video link"
                  id={id}
                  value={NewLink}
                  onChange={(e) => EditedFormHandler(e.target.value, "link")}
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  title="Thumbnail link"
                  id={id}
                  value={NewThumbnail}
                  onChange={(e) =>
                    EditedFormHandler(e.target.value, "thumbnail")
                  }
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <TextInput
                  title="Upload Date"
                  id={id}
                  value={NewDate}
                  onChange={(e) => EditedFormHandler(e.target.value, "date")}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <TextInput
                  title="Video Duration"
                  id={id}
                  value={NewDuration}
                  onChange={(e) =>
                    EditedFormHandler(e.target.value, "duration")
                  }
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <TextInput
                  title="Video no of views"
                  id={id}
                  value={NewViews}
                  onChange={(e) => EditedFormHandler(e.target.value, "views")}
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              disabled={isLoading}
              type="submit"
              className={`inline-flex justify-center transition-all py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-0 focus:ring-offset-0  ${
                isLoading
                  ? " bg-slate-900 "
                  : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
              }   `}
            >
              {isLoading ? "saving..." : "Save "}
            </button>
          </div>
        </div>
      </form>

      {isSuccess && (
        <Link to={"/"} className=" absolute top-2 left-52  ">
          <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-center w-12 bg-emerald-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  Success
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200 ">
                  Your account was registered!
                </p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default EditForm;
