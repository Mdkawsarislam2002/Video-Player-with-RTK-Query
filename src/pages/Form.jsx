/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
// import Success from "../ui/Success";
import { useState } from "react";
// import { useAddVideoMutation } from "../Redux/features/apiSlice/apiSlice";

// components
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import { useFormik } from "formik";

export default function Form() {
  // const addVideo = useAddVideoMutation();

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

  const formik = useFormik({
    initialValues: {
      title: "",
      Author: "",
      description: "",
      YouTubeVideoLink: "",
      ThumbnailLink: "",
      UploadDate: "",
      VideoDuration: "",
      views: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // addVideo({
    //   title,
    //   description,
    //   author,
    //   link,
    //   thumbnail,
    //   date,
    //   duration,
    //   views,
    // });
    resetForm();
  };

  return (
    <form method="POST" onSubmit={formik.handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video title"
                id="VideoTitle"
                //  using formic
                onChange={formik.handleChange}
                value={formik.values.title}
                //  default
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                id="author"
                onChange={formik.handleChange}
                value={formik.values.Author}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                id="Description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                id="videoLink"
                onChange={formik.handleChange}
                value={formik.values.YouTubeVideoLink}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                id="ThumbnailLink"
                title="Thumbnail link"
                onChange={formik.handleChange}
                value={formik.values.ThumbnailLink}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                id="UploadDate"
                onChange={formik.handleChange}
                value={formik.values.UploadDate}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                id="VideoDuration"
                onChange={formik.handleChange}
                value={formik.values.VideoDuration}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                id="VideoNoOfViews"
                onChange={formik.handleChange}
                value={formik.values.views}
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
  );
}
