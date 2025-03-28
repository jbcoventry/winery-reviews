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
    <label className="contents">
      {title}
      <input
        className="w-12 appearance-none rounded border"
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
  );
};

export default NumberInput;
