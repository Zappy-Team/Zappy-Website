interface PropTypes {
  url: string;
  name: string;
}

const SkillsContainer: React.FC<PropTypes> = ({ url, name }) => {
  return (
    <div className="p-3">
      <img
        src={url}
        alt={name}
        className="w-full h-full object-contain mix-blend-darken object-center max-h-32"
      />
    </div>
  );
};

export default SkillsContainer;
