const Stats = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold tracking-tight text-primary">
        {props.head}
      </h1>
      <p className="font-semibold tracking-tight text-md text-dark">
        {props.des}
      </p>
    </div>
  );
};
export default Stats;
