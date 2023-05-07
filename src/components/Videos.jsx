import { useGetSingleVideoQuery } from "../Redux/features/apiSlice/apiSlice";

const Videos = () => {
  const { data } = useGetSingleVideoQuery(1);
  console.log(data);

  return <div>Videos</div>;
};

export default Videos;
