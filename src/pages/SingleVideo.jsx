import Nav from "../components/Nav";

import RelatedVideos from "./RelatedVideos";
import DeleteOrEditVideo from "./DeleteOrEditVideo";

import { useGetSingleVideoQuery } from "../Redux/features/apiSlice/apiSlice";
import { useParams } from "react-router-dom";

const SingleVideo = () => {
  const { id } = useParams();

  const { data } = useGetSingleVideoQuery(id);

  return (
    <>
      <Nav />

      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <iframe
                width="100%"
                className="aspect-video"
                src={data?.link}
                title="Some video title"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                  {data?.title}
                </h1>
                <div className="pb-4 flex items-center space-between border-b">
                  <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on 23 Nov 2022
                  </h2>

                  {/* like/unlike */}
                  <DeleteOrEditVideo id={id} />
                </div>

                <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                  {data?.description}
                </div>
              </div>
            </div>

            {/* related videos */}
            <RelatedVideos id={data?.id} title={data?.title} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVideo;
