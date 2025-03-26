const LastUpdated = ({ timestamp }: { timestamp: string | unknown }) => {
  return (
    <div className="grid items-center rounded lg:col-start-3">
      Reviews Updated:
      {typeof timestamp === "string"
        ? " " + new Date(timestamp).toLocaleString()
        : "N/A"}
    </div>
  );
};
export default LastUpdated;
