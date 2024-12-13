import Wrapper from "../UI/Wrapper";
import heroImg from "../assets/heroImg.svg";
const Hero = (props) => {
  return (
    <div className="bg-light_bg">
      <Wrapper className="flex justify-between py-12 items-center">
        <div>
          <h1 className="text-5xl text-heading font-semibold leading-[5rem]">
            Level Up Your Education Journey with{" "}
            <span className="text-primary">LevelPro</span>
          </h1>
          <p className="text-para my-6 text-lg tracking-wide">
            Find the perfect school, college and postgraduate program with
            expert guidance. Let us simplify your admissions process and shape
            your future.
          </p>
        </div>
        <img src={heroImg} alt="illustration for hero section" className="" />
      </Wrapper>
    </div>
  );
};
export default Hero;
