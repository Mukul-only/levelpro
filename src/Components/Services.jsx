import Wrapper from "../UI/Wrapper";
import ServiceCard from "./ServiceCard";

const Services = (props) => {
  const cardClass = "flex justify-center flex-auto gap-4 mt-4";
  return (
    <div className="py-20 bg-light_bg">
      <Wrapper>
        <p className="text-2xl font-bold text-center text-primary font-caveat">
          Services
        </p>
        <h1 className="mt-6 text-5xl tracking-tight text-center text-dark">
          What Services <span className="font-semibold">We Provide</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 mb-20 text-center text-para">
          At LevelPro, we’re dedicated to empowering you to achieve your
          academic and career goals with confidence.
        </p>
        <div className={cardClass}>
          <ServiceCard
            index="1"
            heading="Admission In India"
            desc="We help you secure admissions to top schools and universities in India and abroad, aligning with your goals and aspirations."
          />
          <ServiceCard
            index="2"
            heading="Counselling and guidance"
            desc="Our expert counsellors provide personalised advice, helping you make informed decisions about your education, career, and future. We’re here to turn your dreams into actionable plans."
          />
        </div>
        <div className={cardClass}>
          <ServiceCard
            index="3"
            heading="Post Admission Support"
            desc="We don’t stop at securing your admission. From visa assistance to travel and accommodation guidance, we ensure a smooth transition to your chosen destination."
          />
          <ServiceCard
            index="4"
            heading="internships"
            desc="Gain valuable experience with tailored internship programs that enhance your skills and prepare you for the professional world."
          />
        </div>
        <div className={cardClass}>
          <ServiceCard
            index="5"
            heading="Placements"
            desc="Our network and expertise help connect you with industry opportunities that align with your skills and aspirations, paving the way for a successful career."
          />
        </div>
      </Wrapper>
    </div>
  );
};
export default Services;
