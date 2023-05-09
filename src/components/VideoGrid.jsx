import { useGetVideosQuery } from "../Redux/features/apiSlice/apiSlice";
import SingleVideo from "./SingleVideo";

const VideoGrid = () => {
  let { data, isError, isLoading, error, isSuccess } = useGetVideosQuery();

  return (
    <>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {isSuccess &&
              data?.length > 0 &&
              data?.map((items) => {
                return <SingleVideo key={items.id} data={items} />;
              })}

            {/* error section */}
            {isError && <div className="col-span-12">{error}</div>}
          </div>
        </section>
        {isLoading && <div className="col-span-12">Loading...</div>}
      </section>
    </>
  );
};

export default VideoGrid;
