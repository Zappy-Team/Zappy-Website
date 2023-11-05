interface PropTypes {
  data: {
    title: string;
    description: string;
  };
  style?: string;
}

const ContainerServices: React.FC<PropTypes> = ({ data, style }) => {
  return (
    <div
      className={`${style} w-80% lg:w-auto p-2 flex flex-col gap-2 border border-black rounded-md
        bg-gray-400 first:-translate-x-full last:translate-y-full opacity-0`}
    >
      <h2 className="text-center text-xl py-2">{data.title}</h2>
      <hr className="md:w-[70%] md:mx-auto" />
      <aside>
        <p className="text-right text-base tracking-wide	">{data.description}</p>
      </aside>
    </div>
  );
};

export default ContainerServices;
