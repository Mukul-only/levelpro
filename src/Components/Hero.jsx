import Wrapper from "../UI/Wrapper";
import heroImg from "../assets/heroImg.svg";
import Darrow from "../svg/downArrow";
import Search from "../svg/Search";
import Stats from "./Stats";
const Hero = (props) => {
  return (
    <div className="pb-6 bg-light_bg">
      <Wrapper className="">
        <div className="flex items-center justify-between pt-12 ">
          <div>
            <h1 className="text-5xl text-dark font-semibold leading-[5rem]">
              Level Up Your Education Journey with{" "}
              <span className="text-primary">LevelPro</span>
            </h1>
            <p className="my-6 text-lg tracking-wide text-para">
              Find the perfect school, college and postgraduate program with
              expert guidance. Let us simplify your admissions process and shape
              your future.
            </p>
            <div className="flex items-center gap-2 ">
              <button className="px-5 py-4 font-medium text-white rounded-md bg-primary">
                Book Free Consultation
              </button>
              <div className="flex items-center flex-1 gap-2 py-2 bg-white rounded-full text-dark">
                <div className="flex items-center justify-between flex-1 py-4 pl-6 font-semibold cursor-pointer">
                  <p>Destination</p>
                  <Darrow />
                </div>
                <div className="border border-[#113B4A] border-l-1 h-12 " />
                <div className="flex items-center justify-between flex-1 py-4 font-semibold cursor-pointer text-dark">
                  <p>Field</p>
                  <Darrow />
                </div>
                <div className="flex items-center justify-center w-12 h-12 p-4 mr-3 rounded-full bg-primary">
                  <Search className="" />
                </div>
              </div>
            </div>
          </div>
          <img src={heroImg} alt="illustration for hero section" className="" />
        </div>
        <div className="flex justify-between px-12 py-8 -mt-16 border bg-primary bg-opacity-10 border-primary rounded-3xl">
          <Stats head="5 Years" des="Of Excellence" />
          <div className="h-24 border border-l-2 border-primary" />
          <Stats head="1 Lacs" des="Success Stories" />
          <div className="h-24 border border-l-2 border-primary" />
          <Stats head="500+" des="Placement/Internships" />
          <div className="h-24 border border-l-2 border-primary" />
          <Stats head="2000+" des="Students Trained" />
        </div>
      </Wrapper>
    </div>
  );
};
export default Hero;
