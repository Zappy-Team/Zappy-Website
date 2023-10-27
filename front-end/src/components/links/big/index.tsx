interface PropTypes {
  link: string;
  title: string;
}

const LinkBig: React.FC<PropTypes> = ({ link, title }) => {
  return (
    <a
      href={link}
      className=" w-full p-8 text-center bg-lime-800 mt-12 flex justify-between items-center md:max-w-[250px] md:mt-0 "
    >
      {title} <span className=" bg-yellow-800 h-1 w-7" />
    </a>
  );
};

export default LinkBig;
