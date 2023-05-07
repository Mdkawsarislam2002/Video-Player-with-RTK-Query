import { useGetVideosQuery } from "../Redux/features/apiSlice/apiSlice";

const Videos = () => {
  const { data } = useGetVideosQuery();
  console.log(data);

  return <div>Videos</div>;
};

export default Videos;
