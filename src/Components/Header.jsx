import Wrapper from "../UI/Wrapper";

const Header = (props) => {
  return (
    <div className="shadow-md relative z-10">
      <Wrapper className="flex justify-between items-center py-8 ">
        <h1 className="text-primary font-bold  text-4xl">LevelPro</h1>
        <div className="flex items-center gap-5 tracking-tight text-md font-semibold ">
          <p>About Us</p>
          <p>
            Services <span className="mx-1">∨</span>
          </p>
          <p>
            Courses Available <span className="mx-1">∨</span>
          </p>
          <p>
            Study In Abroad <span className="mx-1">∨</span>
          </p>
          <button className="font-medium text-white bg-primary px-5 py-3 rounded-lg">
            Contact Us
          </button>
        </div>
      </Wrapper>
    </div>
  );
};
export default Header;
