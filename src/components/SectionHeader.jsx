const SectionHeader = ({ title, subTitle }) => {
  return (
    <div>
      <div className=" mx-auto mb-10 mt-20 max-w-xl p-4 md:mt-32">
        <h1 className="mb-4 text-center text-3xl font-bold text-primary md:text-5xl md:font-extrabold">
          {title}
        </h1>
        <p className="text-center text-sm font-medium text-neutral md:text-base">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
