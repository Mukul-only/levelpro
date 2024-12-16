import Wrapper from "../UI/Wrapper";

const Header = (props) => {
  return (
    <div className="relative z-10 shadow-md">
      <Wrapper className="flex items-center justify-between py-8 ">
        <h1 className="text-4xl font-bold text-primary">LevelPro</h1>
        <div className="flex items-center gap-5 font-semibold tracking-tight text-md text-dark">
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
          <button className="px-5 py-3 font-medium text-white rounded-lg bg-primary">
            Contact Us
          </button>
        </div>
      </Wrapper>
    </div>
  );
};
export default Header;
