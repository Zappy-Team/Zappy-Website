interface PropTypes {
  current: number;
  length: number;
}

const CounterForCo: React.FC<PropTypes> = ({ current, length }) => {
  return (
    <aside className="hidden md:flex md:flex-col md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 md:gap-3  md:w-fit text-right text-white">
      <p>0{current}</p>
      <div className="w-6 bg-white h-[1px]" />
      <p>0{length}</p>
    </aside>
  );
};

export default CounterForCo;
