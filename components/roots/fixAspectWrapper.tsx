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

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          aspectRatio: `${widthInt} / ${heightInt}`,
          width: isPortrait
            ? `calc(min(100vh, 100vw * ${widthInt} / ${heightInt}))`
            : `calc(min(100vw, 100vh * ${widthInt} / ${heightInt}))`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FixAspectWrapper;
