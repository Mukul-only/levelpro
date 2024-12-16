import Wrapper from "../UI/Wrapper";
import I1 from "../assets/i_001.svg";
const Cta = (props) => {
  return (
    <Wrapper className="flex items-center gap-4 py-20">
      <img src={I1} alt="cta image" className="w-[605px]" />
      <div className="">
        <p className="text-2xl font-bold text-primary font-caveat">
          Free Expert
        </p>
        <h1 className="text-4xl text-dark ">
          Your <span className="font-bold">Trusted Partner</span>
        </h1>
        <p className="mt-3 text-xl text-para">
          LevelPro, India’s trusted leader in career related consultancy, has
          been turning dreams into reality and shaping the futures of ambitious
          students for over 10 years. With a legacy of excellence, we are your
          partners in achieving global academic success.
        </p>
        <button className="px-4 py-3 mt-6 text-lg text-white rounded-md bg-primary">
          Get Free Consultation
        </button>
      </div>
    </Wrapper>
  );
};
export default Cta;
