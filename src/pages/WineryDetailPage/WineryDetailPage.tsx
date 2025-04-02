import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import fetchWineryById from "../../helpers/fetchWineryById";

export function WineryDetailPage() {
  const { wineryId } = useParams({ from: "/winery/$wineryId" });

  const {
    data: winery,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["winery", wineryId],
    queryFn: fetchWineryById,
  });
  if (isLoading) {
    return <span>LOADING</span>;
  }
  if (isError) {
    return <span>ERROR</span>;
  }

  if (!winery) {
    return <span>NO DATA</span>;
  }

  return (
    <>
      {/* Winery basic details */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2">
        <div id="winery-detail-information" className="">
          <h3 className={""}>{winery.title}</h3>
          <div className={""}>
            <div>{winery.street}</div>
            <div>{winery.city}</div>
            <div>{winery.postalCode}</div>
          </div>
          <div className="">
            <a
              href={`tel:${winery.phone}`}
              className={"no-underline hover:text-blue-400 hover:underline"}
            >
              {winery.phone}
            </a>
          </div>
          <div className="">
            <Link
              to={winery.website}
              className={"no-underline hover:text-blue-400 hover:underline"}
            >
              {winery.website}
            </Link>
          </div>

          {/* Opening Hours */}
          <div className={"my-4 max-w-96 rounded-md border px-2 py-2"}>
            {winery.openingHours
              ? winery.openingHours.map((oh, i) => (
                  <div key={i} className={"flex justify-between"}>
                    <span>{oh.day}</span>
                    <span>{oh.hours}</span>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query="${winery.location?.lat}%2C${winery.location?.lng}&query_place_id=${winery.placeId}`}
          rel="noreferrer"
        >
          <img
            src={`https://wineries.jbcov.com/api/map/${winery.id}`}
            alt="map showing winery location"
            className="h-[400px] w-[400px] max-w-full"
          />
        </a>
      </div>
      <h2>Reviews</h2>
      <div id="review-list" className="max-w-5xl">
        {winery.reviews.map(
          ({ rating, timestamp, text, responseFromOwnerText }) => (
            <div className="m-2 grid grid-cols-1 odd:bg-slate-100 md:grid-cols-[100px_50px_1fr] odd:dark:bg-zinc-700">
              <div>{new Date(timestamp * 1000).toLocaleDateString()}</div>
              <div>{rating}</div>
              <div className="max-w-prose">
                {text} <br /> winery: {responseFromOwnerText}
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
}
