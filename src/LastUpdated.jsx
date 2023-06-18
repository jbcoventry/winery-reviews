const LastUpdated = (queryLastUpdated) => {
  return (
    <div className="grid items-center rounded lg:col-start-3  ">
      Reviews Updated:
      {queryLastUpdated.isSuccess
        ? new Date(queryLastUpdated?.data).toLocaleString()
        : ""}
    </div>
  );
};
export default LastUpdated;
