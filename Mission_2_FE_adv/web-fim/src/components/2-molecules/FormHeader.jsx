const FormHeader = ({ title, description }) => {
  return (
    <div className="form-header flex flex-col items-center gap-4">
      <img
        src="/img/logo/logo.png"
        alt="Logo"
        className="w-[94px] lg:w-[163px]"
      />
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-bold text-[18px] lg:text-[32px] text-[#ffffff]">
          {title}
        </h2>
        <p className="font-normal text-[#ffffff] text-[10px] lg:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
