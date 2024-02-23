type queryLastUpdatedType = {
  isSuccess: boolean;
  data: string;
};

const LastUpdated = (queryLastUpdated: queryLastUpdatedType) => {
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
