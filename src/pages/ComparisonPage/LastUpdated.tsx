type LastUpdatedProps = {
  timestamp: string | unknown;
};

const LastUpdated = ({ timestamp }: LastUpdatedProps) => {
  return (
    <div className="text-xs md:my-2 md:text-base">
      Reviews Updated:
      {typeof timestamp === "string"
        ? " " +
          new Date(timestamp).toLocaleString("en-GB", {
            timeZoneName: "shortGeneric",
            hour12: true,
          })
        : " N/A"}
    </div>
  );
};
export default LastUpdated;
