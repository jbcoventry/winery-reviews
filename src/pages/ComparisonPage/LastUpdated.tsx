type LastUpdatedProps = {
  timestamp: string | unknown;
};

const LastUpdated = ({ timestamp }: LastUpdatedProps) => {
  return (
    <div className="text-xs md:text-base">
      Reviews Updated:
      {typeof timestamp === "string"
        ? " " + new Date(timestamp).toLocaleString()
        : "N/A"}
    </div>
  );
};
export default LastUpdated;
