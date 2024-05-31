type Props = {
  title: string;
  isScroll?: boolean;
  children: React.ReactNode;
};

function Section({
  title,
  isScroll = false,
  children,
}: Props) {
  return (
    <section className={`flex justify-center py-4`}>
      <div className="w-[95%] md:w-[85%]">

      <div className="w-full px-8 py-4">
        <h1 className="font-semibold text-3xl">{title}</h1>
      </div>
      <div
        className={`py-4 flex flex-wrap gap-8 justify-between items-center px-4 ${
          isScroll && "overflow-x-scroll"
        } xl:flex-nowrap`}
      >
        {children}
      </div>
      </div>
    </section>
  );
}

export default Section;
