export const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <video
        className="w-full h-full object-cover brightness-30"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="src/assets/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
