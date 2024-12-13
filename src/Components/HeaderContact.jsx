const HeaderContact = (props) => {
  return (
    <div className="flex gap-1 items-center justify-center">
      <div className=" flex items-center justify-center bg-white rounded-full p-[0.4rem] w-8 h-8">
        {props.svg}
      </div>
      <p className="text-md text-white">{props.text}</p>
    </div>
  );
};
export default HeaderContact;
