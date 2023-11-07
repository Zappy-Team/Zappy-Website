interface PropTypes {
  img: string;
  name: string;
  title: string;
}

const TeamContainer: React.FC<PropTypes> = ({ img, name, title }) => {
  return (
    <div className="flex flex-col gap-4">
      <header className="rounded-xl overflow-hidden">
        <img src={img} alt={name} />
      </header>
      <p className="text-center text-2xl">{name}</p>
      <span className="text-center text-xl font-bold">{title}</span>
    </div>
  );
};

export default TeamContainer;
