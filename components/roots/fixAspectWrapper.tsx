const FixAspectWrapper = ({
  aspect,
  isPortrait,
  children,
}: {
  aspect: { width: number; height: number };
  isPortrait: boolean;
  children: React.ReactNode;
}) => {
  const widthInt = Math.round(aspect.width);
  const heightInt = Math.round(aspect.height);
  const widthFloatString = widthInt.toFixed(1);
  const heightFloatString = heightInt.toFixed(1);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className={
          isPortrait
            ? `aspect-[${widthInt}/${heightInt}] w-[calc(min(100vh,_100vw_*_${widthFloatString}_/_${heightFloatString}))]`
            : `aspect-[${widthInt}/${heightInt}] w-[calc(min(100vw,_100vh_*_${widthFloatString}_/_${heightFloatString}))]`
        }
      >
        {children}
      </div>
    </div>
  );
};

export default FixAspectWrapper;
