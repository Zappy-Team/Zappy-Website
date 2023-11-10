interface PropTypes {
  name: string;
  changeFn: (e: string) => void;
  checked: boolean;
  bg: boolean;
}

const ListChooseComponent: React.FC<PropTypes> = ({
  name,
  changeFn,
  checked,
  bg,
}) => {
  return (
    <li className="flex justify-center items-center flex-col relative">
      <label
        className={`${
          bg ? "text-white" : "text-black"
        } duration-500 w-full h-full relative z-20 cursor-pointer text-lg md:text-2xl`}
        htmlFor={name}
      >
        {name}
      </label>
      <input
        type="radio"
        id={name}
        value={name}
        onChange={(e) => changeFn(e.target.value)}
        checked={checked}
        className="absolute w-full h-full cursor-pointer opacity-0"
      />
      {/* Round */}
      <div
        className={`${bg ? "bg-blue-300" : "bg-blue-950"} ${
          checked
            ? "opacity-1 -left-[16px] md:-left-[20px]"
            : "opacity-0 left-[120px]"
        } duration-500  absolute w-8 h-8 rounded-full  md:w-10 md:h-10 `}
      />
    </li>
  );
};

export default ListChooseComponent;
