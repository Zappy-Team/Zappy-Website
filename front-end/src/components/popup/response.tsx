interface PropsTypes {
  title: string;
  close: () => void;
}

const PopupComponent: React.FC<PropsTypes> = ({ title, close }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black py-10 px-14 flex justify-center items-center flex-col gap-5 w-[80%] max-w-[300px] text-center">
      <h2 className="text-white font-semibold text-xl tracking-wide">
        {title}
      </h2>
      <button
        onClick={close}
        className="bg-white py-2 px-3 rounded-sm font-semibold text-lg duration-300 hover:bg-black hover:text-white hover:duration-300"
      >
        Close
      </button>
    </div>
  );
};

export default PopupComponent;
