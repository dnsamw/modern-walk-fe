type Props = {
  isTopNav?: boolean;
  title: string;
  isScroll?: boolean;
  children: React.ReactNode;
};

function Section({
  isTopNav = false,
  title,
  isScroll = false,
  children,
}: Props) {
  return (
    <div className={`py-4 ${isTopNav ? "mt-36" : "mt-2"}`}>
      <div className="w-full px-8">
        <h1 className="font-semibold text-3xl">{title}</h1>
      </div>
      <div
        className={`py-4 flex gap-8 justify-center items-center px-4 ${
          isScroll && "overflow-x-scroll"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Section;
