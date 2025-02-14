const LastUpdated = ({ timestamp }: { timestamp: string }) => {
  return (
    <div className="grid items-center rounded lg:col-start-3  ">
      Reviews Updated:
      {new Date(timestamp).toLocaleString()}
    </div>
  );
};
export default LastUpdated;
