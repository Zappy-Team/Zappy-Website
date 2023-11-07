interface PropTypes {
  title: string;
  description: string;
  bg?: boolean;
}

const ContainerServicesAll: React.FC<PropTypes> = ({
  title,
  description,
  bg,
}) => {
  return (
    <div
      className={`${
        bg ? "border-white" : "border-black"
      } duration-500 w-[80%] max-w-[800px] h-fit lg:w-auto p-2 flex flex-col gap-2 border border-dotted border-black rounded-md`}
    >
      <h2
        className={`${
          bg ? "text-white" : "text-black"
        } duration-500 text-center text-xl py-2`}
      >
        {title}
      </h2>
      <hr className="md:w-[70%] md:mx-auto" />
      <aside>
        <p
          className={`${
            bg ? "text-white" : "text-black"
          } duration-500 text-center text-base tracking-wide`}
        >
          {description}
        </p>
      </aside>
    </div>
  );
};

export default ContainerServicesAll;
