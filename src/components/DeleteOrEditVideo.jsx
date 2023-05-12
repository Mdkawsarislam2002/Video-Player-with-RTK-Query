/* eslint-disable react/prop-types */
import { useDeleteVideoMutation } from "../Redux/features/apiSlice/apiSlice";
import { Link, useNavigate } from "react-router-dom";

//  icons components
import Trash from "./icons/Trash";
import EditsIcon from "./icons/EditsIcon";

const DeleteOrEditVideo = ({ id }) => {
  const [deleteVideo] = useDeleteVideoMutation();
  const navigate = useNavigate();

  const deleteHandler = async () => {
    await deleteVideo(id);
    await navigate("/");
  };
  return (
    <>
      <div className="flex gap-10 w-48">
        <div className="flex gap-1 cursor-pointer" onClick={deleteHandler}>
          <div className="shrink-0">
            <Trash />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">
            Delete
          </div>
        </div>
        <Link to={`/edit/` + id} className="flex gap-1 cursor-pointer">
          <div className="shrink-0">
            <EditsIcon />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">Edit</div>
        </Link>
      </div>
    </>
  );
};

export default DeleteOrEditVideo;
