const NumberInput = ({ title, number, setNumber }) => {
  return (
    <div
      className="
     col-start-1"
    >
      <label className="grid grid-cols-2 items-center">
        {title}
        <input
          className="w-14 rounded"
          type="text"
          value={number}
          onChange={(e) => {
            Number(setNumber(e.target.value.replace(/[^0-9]/g, "")));
          }}
        />
      </label>
    </div>
  );
};

export default NumberInput;
