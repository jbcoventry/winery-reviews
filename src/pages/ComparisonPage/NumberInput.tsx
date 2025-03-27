type NumberInputProps = {
  title: string;
  number: number | string;
  setNumber: React.Dispatch<React.SetStateAction<number | string>>;
  maxLength: number;
};

const NumberInput = ({
  title,
  number,
  setNumber,
  maxLength,
}: NumberInputProps) => {
  return (
    <div className="col-start-1">
      <label className="grid grid-cols-2 items-center">
        {title}
        <input
          className="w-16 appearance-none rounded border"
          type="number"
          inputMode="decimal"
          value={number}
          maxLength={maxLength}
          onChange={(e) => {
            setNumber(e.target.value);
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
