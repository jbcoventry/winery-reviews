type NumberInputProps = {
  title: string;
  number: 0;
  setNumber: (value: number | string) => void;
  maxLength: number;
};

const NumberInput = ({
  title,
  number,
  setNumber,
  maxLength,
}: NumberInputProps) => {
  return (
    <div
      className="
     col-start-1"
    >
      <label className="grid grid-cols-2 items-center">
        {title}
        <input
          className="w-16 rounded"
          type="text"
          inputMode="decimal"
          value={number}
          maxLength={maxLength}
          onChange={(e) => {
            Number(setNumber(e.target.value.replace(/[^0-9]/g, "")));
          }}
          onFocus={() => {
            setNumber("");
          }}
        />
      </label>
    </div>
  );
};

export default NumberInput;
