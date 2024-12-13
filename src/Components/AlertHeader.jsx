import Wrapper from "../UI/Wrapper";
import HeaderContact from "./HeaderContact";
import Mail from "../svg/mail";
import Tel from "../svg/tel";
const AlertHeader = () => {
  return (
    <div className="bg-primary">
      <Wrapper className="flex py-3 justify-between">
        <div className="w-44" />
        <div className="flex gap-2 items-center">
          <p className="text-md font-medium tracking-tight text-white">
            Admission Open At Sharda University
          </p>
          <button className="text-primary text-md font-medium tracking-tight bg-white rounded-md px-3 py-1">
            Get Enrolled
          </button>
        </div>
        <div className="flex gap-2">
          <HeaderContact svg={<Mail />} text={"levelpro@gmail.com"} />
          <HeaderContact svg={<Tel />} text={"+01 569 896 654"} />
        </div>
      </Wrapper>
    </div>
  );
};
export default AlertHeader;
