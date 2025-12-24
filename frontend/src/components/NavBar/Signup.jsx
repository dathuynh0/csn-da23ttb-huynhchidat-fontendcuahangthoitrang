import { SignupForm } from "../signup-form";

const Signup = () => {
  return (
    <>
      <div className="min-h-screen w-full relative bg-white">
        {/* Cool Blue Glow Left */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
        radial-gradient(
          circle at top left,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Your Content/Components */}
        <div className="relative z-10 bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm md:max-w-4xl">
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
