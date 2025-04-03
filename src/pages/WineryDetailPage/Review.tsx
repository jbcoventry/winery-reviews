import { ReviewDetail } from "../../types";

export function Review(
  { rating, timestamp, text, responseFromOwnerText }: ReviewDetail,
  showWineryResponse: boolean,
) {
  return (
    <div className="m-2 grid grid-cols-1 odd:bg-slate-100 md:grid-cols-[100px_50px_1fr] odd:dark:bg-zinc-700">
      <div>{new Date(timestamp * 1000).toLocaleDateString()}</div>
      <div>
        <div className="inline font-bold md:hidden">Rating:</div>
        {rating}
      </div>
      <div className="max-w-prose">
        {text} <br />
        <div className="text-red-500 italic">
          {showWineryResponse ? responseFromOwnerText : null}
        </div>
      </div>
    </div>
  );
}

export default Review;
