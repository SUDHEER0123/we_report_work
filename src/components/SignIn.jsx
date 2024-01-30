import logo from "../assests/LOGO 12.png";
import checkLogo from "../assests/check logo.png";
const SignIn = () => {
  return (
    <div className="bg-[#F6F6F6] flex flex-col items-center gap-20 w-full h-screen">
      <div className="w-full flex justify-center items-center gap-4 mt-12">
        <img src={logo} className="w-[117px] h-[129px]" />
        <p className="text-black text-[60px] font-medium leading-[30px] text-center">
          We Report Work
        </p>
      </div>

      <div className="w-full flex justify-evenly flex-wrap">
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex gap-8 items-center">
            <img src={checkLogo} />
            <p className="text-[25px] font-medium text-black leading-[20px]">
              Daily Summary Automated
            </p>
          </div>

          <div className="flex gap-8 items-center">
            <img src={checkLogo} />
            <p className="text-[25px] font-medium text-black leading-[20px]">
              No Mannual Work
            </p>
          </div>

          <div className="flex gap-8 items-center">
            <img src={checkLogo} />
            <p className="text-[25px] font-medium text-black leading-[20px]">
              Never miss reporting deadlines
            </p>
          </div>
        </div>

        <div className="w-[458px] h-[285px] bg-[#FFFFFF80] border-2 rounded-lg border-[#009ef8] border-opacity-[0.81]">
          <div className="flex  flex-col gap-8  p-8">
            <div className="flex flex-col gap-1">
              <p class="md:text-2xl text-xl font-semibold">Get Started</p>
              <p class="text-sm font-normal mb-5">
                Connect your <span class="text-blue-500">Google</span> account
                and begin to access your info in a{" "}
                <span class="text-blue-500">quick</span> and{" "}
                <span class="text-blue-500">easy</span> manner.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-full flex gap-2 items-center justify-center shadow-md rounded-md p-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                >
                  <path
                    d="M22.5026 10.7188C22.5026 10.0363 22.4359 9.38 22.3119 8.75H12.4307V12.4775H18.0771C17.8291 13.6763 17.0851 14.6913 15.9692 15.3738V17.7975H19.3742C21.3581 16.1175 22.5026 13.65 22.5026 10.7188Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.4309 20.125C15.2636 20.125 17.6385 19.2675 19.3744 17.7975L15.9694 15.3738C15.0347 15.9513 13.8425 16.3013 12.4309 16.3013C9.70305 16.3013 7.38535 14.6125 6.55555 12.3375H3.0647V14.8225C4.79105 17.9638 8.3296 20.125 12.4309 20.125Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.55553 12.3288C6.3457 11.7513 6.22171 11.1388 6.22171 10.5C6.22171 9.86128 6.3457 9.24878 6.55553 8.67128V6.18628H3.06468C2.34934 7.48128 1.93921 8.94253 1.93921 10.5C1.93921 12.0575 2.34934 13.5188 3.06468 14.8138L5.78297 12.8713L6.55553 12.3288Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.4309 4.7075C13.976 4.7075 15.3495 5.1975 16.4463 6.1425L19.4507 3.38625C17.629 1.82875 15.2636 0.875 12.4309 0.875C8.3296 0.875 4.79105 3.03625 3.0647 6.18625L6.55555 8.67125C7.38535 6.39625 9.70305 4.7075 12.4309 4.7075Z"
                    fill="#EA4335"
                  />
                </svg>
                <p className="text-sm font-normal">Use Google Account</p>
              </div>

              <div className="flex gap-2">
                <span className="text-xs font-normal">Privacy Policy</span>
                <span className="text-xs font-normal text-[#1A73E8]">|</span>
                <span className="text-xs font-normal">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
