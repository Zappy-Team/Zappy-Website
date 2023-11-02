interface PropTypes {
  nextFun: () => void;
  prevFun: () => void;
}

const ButtonsCo: React.FC<PropTypes> = ({ nextFun, prevFun }) => {
  return (
    <div className="flex justify-between  max-w-[160px] gap-[1px] mt-5 mx-auto md:absolute md:right-0">
      <button
        className="w-[77px] text-center text-white relative before:content-[''] before:w-10 before:h-4 before:bg-gray-700 before:opacity-30 before:absolute before:bottom-0 before:left-[35px] duration-300 hover:before:w-5 hover:before:duration-300"
        onClick={prevFun}
      >
        PRV
      </button>
      <hr className="h-[32px] w-[1px] bg-white" />
      <button
        className="w-[77px] text-center text-white relative before:content-[''] before:w-10 before:h-4 before:bg-gray-700 before:opacity-30 before:absolute before:bottom-0 before:right-[35px] duration-300 hover:before:w-5 hover:before:duration-300"
        onClick={nextFun}
      >
        NXT
      </button>
    </div>
  );
};

export default ButtonsCo;
