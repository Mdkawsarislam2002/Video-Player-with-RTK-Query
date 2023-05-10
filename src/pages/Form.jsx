/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useAddVideoMutation } from "../Redux/features/apiSlice/apiSlice";
import { useNavigate } from "react-router-dom";

// components
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

export default function Form() {
  const [addVideo, { isSuccess }] = useAddVideoMutation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [views, setViews] = useState("");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setAuthor("");
    setLink("");
    setThumbnail("");
    setDate("");
    setDuration("");
    setViews("");
  };

  const HandleInput = (e, type) => {
    switch (type) {
      case "title":
        setTitle(e);
        break;
      case "Description":
        setDescription(e);
        break;

      case "link":
        setLink(e);
        break;
      case "Author":
        setAuthor(e);
        break;
      case "setThumbnail":
        setThumbnail(e);
        break;
      case "Date":
        setDate(e);
        break;
      case "Duration":
        setDuration(e);
        break;
      case "Views":
        setViews(e);
        break;

      default:
        console.warn("No such type found" + type);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addVideo({
      title,
      author,
      description,
      link,
      thumbnail,
      date,
      duration,
      views,
    });

    resetForm();
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Video title"
                  id="VideoTitle"
                  value={title}
                  onChange={(e) => HandleInput(e.target.value, "title")}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Author"
                  id="author"
                  value={author}
                  onChange={(e) => HandleInput(e.target.value, "Author")}
                />
              </div>

              <div className="col-span-6">
                <TextArea
                  title="Description"
                  id="Description"
                  value={description}
                  onChange={(e) => HandleInput(e.target.value, "Description")}
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  title="YouTube Video link"
                  id="videoLink"
                  value={link}
                  onChange={(e) => HandleInput(e.target.value, "link")}
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  id="ThumbnailLink"
                  title="Thumbnail link"
                  value={thumbnail}
                  onChange={(e) => HandleInput(e.target.value, "setThumbnail")}
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <TextInput
                  title="Upload Date"
                  id="UploadDate"
                  value={date}
                  onChange={(e) => HandleInput(e.target.value, "Date")}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <TextInput
                  title="Video Duration"
                  id="VideoDuration"
                  value={duration}
                  onChange={(e) => HandleInput(e.target.value, "Duration")}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <TextInput
                  title="Video no of views"
                  id="VideoNoOfViews"
                  value={views}
                  onChange={(e) => HandleInput(e.target.value, "Views")}
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      {isSuccess && (
        <div className="w-full flex justify-center items-center ">
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
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  Your account was registered!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
