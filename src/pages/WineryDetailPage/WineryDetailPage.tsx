import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import fetchWineryById from "../../helpers/fetchWineryById";

export function WineryDetailPage() {
  const { wineryId } = useParams({ from: "/winery/$wineryId" });

  const wineryData = useQuery({
    queryKey: ["winery", wineryId],
    queryFn: fetchWineryById,
  });

  if (wineryData.isError) {
    return <span>ERROR</span>;
  }

  if (wineryData.isLoading) {
    return <span>LOADING</span>;
  }

  if (!wineryData.data) {
    return <span>NO DATA</span>;
  }

  return (
    <>
      {/* Winery basic details */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2">
        <div id="winery-detail-information" className="">
          <h3 className={""}>{wineryData.data.title}</h3>
          <div className={""}>
            <div>{wineryData.data.street}</div>
            <div>{wineryData.data.city}</div>
            <div>{wineryData.data.postalCode}</div>
          </div>
          <div className="">
            <a
              href={`tel:${wineryData.data.phone}`}
              className={"no-underline hover:text-blue-400 hover:underline"}
            >
              {wineryData.data.phone}
            </a>
          </div>
          <div className="">
            <Link
              to={wineryData.data.website}
              className={"no-underline hover:text-blue-400 hover:underline"}
            >
              {wineryData.data.website}
            </Link>
          </div>

          {/* Opening Hours */}
          <div className={"my-4 max-w-96 rounded-md border px-2 py-2"}>
            {wineryData.data.openingHours
              ? wineryData.data.openingHours.map((oh, i) => (
                  <div key={i} className={"flex justify-between"}>
                    <span>{oh.day}</span>
                    <span>{oh.hours}</span>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query="${wineryData.data.location?.lat}%2C${wineryData.data.location?.lng}&query_place_id=${wineryData.data.placeId}`}
          rel="noreferrer"
        >
          <img
            src={`https://wineries.jbcov.com/api/map/${wineryData.data.id}`}
            alt="map showing winery location"
            className="h-[400px] w-[400px] max-w-full"
          />
        </a>
      </div>
    </>
  );
}
