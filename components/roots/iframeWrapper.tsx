import LockPortrait from "@/components/roots/lockPortrait";

const IframeWrapper = ({ src }: { src: string }) => {
  return (
    <LockPortrait>
      <div className="w-full h-full relative">
        <iframe className="absolute w-full h-full" src={src} title="game" />
      </div>
    </LockPortrait>
  );
};

export default IframeWrapper;
