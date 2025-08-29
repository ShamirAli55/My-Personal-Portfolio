const OverLay = () => {
  return (
    <div className="absolute inset-0 -z-1">
      {/* Background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/5243527/pexels-photo-5243527.jpeg"
        alt="overlay texture"
      />


      <div className="absolute inset-0 bg-background opacity-93"></div>

      <svg
        className="absolute top-0 left-0 w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="hsl(var(--background))"
          d="M0,64 C360,200 1080,-40 1440,120 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Bottom shape */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="hsl(var(--background))"
          d="M0,192 C480,360 960,40 1440,200 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
};

export default OverLay;
