interface SwipeWrapperProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const SwipeWrapper = ({ left, right }: SwipeWrapperProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-stretch overflow-visible gap-10">
      <div
        className="

          flex flex-col justify-start items-start
          min-w-[29rem] pt-8 pb-16
          gap-x-12 gap-y-12
          sm:min-w-[18rem] sm:gap-x-8 sm:gap-y-8
          max-sm:min-w-full max-sm:gap-x-4 max-sm:gap-y-4 max-sm:pt-0 max-sm:pb-0
        "
      >
        {left}
      </div>
      <div
        className="
          max-w-full
          overflow-hidden
          gap-x-8 gap-y-8
          sm:gap-x-8 sm:gap-y-8
          max-sm:flex max-sm:flex-col
          max-sm:gap-x-8 max-sm:gap-y-8
        "
      >
        <div className="relative w-full h-full z-[1] flex transition-transform box-content flex-row overflow-visible max-w-[500px]">
          {right}
        </div>
      </div>
    </div>
  );
};
