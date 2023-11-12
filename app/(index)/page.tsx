import IframeWrapper from "@/components/roots/iframeWrapper";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <IframeWrapper src={"/game"}></IframeWrapper>;
    </div>
  );
}
