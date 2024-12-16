const ServiceCard = (props) => {
  return (
    <div className="flex gap-4 px-8 py-12 bg-[#E7E8FB] border border-[#C6D3E3] rounded-xl ">
      <div className="text-4xl font-semibold text-primary">{props.index}</div>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-dark">{props.heading}</h1>
        <p className="max-w-lg text-xl text-para">{props.desc}</p>
        <button className="px-3 py-2 text-white rounded-lg bg-primary">
          Free Expert Consultation
        </button>
      </div>
    </div>
  );
};
export default ServiceCard;
