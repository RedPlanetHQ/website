interface BentoProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const Bento = ({ left, right }: BentoProps) => {
  return (
    <div
      className="
        grid
        grid-rows-[auto]
        grid-cols-1
        sm:grid-cols-2
        auto-cols-fr
        pt-0
        pb-0
      "
    >
      <div className="sm:border-r border-border sm:pr-16 flex flex-col items-stretch py-12">
        {left}
      </div>
      <div className="flex flex-col items-stretch py-12 sm:pl-16">{right}</div>
    </div>
  );
};
