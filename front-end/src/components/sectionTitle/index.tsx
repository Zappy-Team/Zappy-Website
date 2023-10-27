interface PropTypes {
  title: string;
}

const SectionTitle: React.FC<PropTypes> = ({ title }) => {
  return (
    <header className=" max-w-fit w-10/12 min-h-16 p-9 bg-green-900 mx-auto text-center -translate-y-1/2">
      <h1 className=" text-5xl">{title}</h1>
    </header>
  );
};

export default SectionTitle;
