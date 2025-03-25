type NumberInputProps = {
  title: string;
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
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
          className="w-16 rounded border"
          type="text"
          inputMode="decimal"
          value={number}
          maxLength={maxLength}
          onChange={(e) => {
            setNumber(Number(e.target.value.replace(/[^0-9]/g, "")));
          }}
          onFocus={() => {
            setNumber(0);
          }}
        />
      </label>
    </div>
  );
};

export default NumberInput;
