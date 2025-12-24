import { LoginForm } from "../login-form";

const Signin = () => {
  return (
    <>
      <div className="min-h-screen w-full relative bg-white">
        {/* Cool Blue Glow Right */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
        radial-gradient(
          circle at top right,
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
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
