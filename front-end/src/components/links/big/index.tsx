interface PropTypes {
  link: string;
  title: string;
}

const LinkBig: React.FC<PropTypes> = ({ link, title }) => {
  return (
    <a
      href={link}
      className=" w-full p-8 text-center bg-black text-white mt-12 flex justify-between items-center md:max-w-[250px] md:mt-0 z-20"
    >
      {title} <span className=" bg-white h-[1px] w-8" />
    </a>
  );
};

export default LinkBig;
