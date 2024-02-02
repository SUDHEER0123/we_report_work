import logo from "../assests/LOGO 12.png";
import checkLogo from "../assests/check logo.png";
import googleIcon from "../assests/google.png";
import emoji from "../assests/emogi.jpg";
import { useState } from "react";
const SignIn = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="bg-[#F6F6F6] flex flex-col items-center gap-20 w-full h-screen">
      <div className="w-full flex justify-center items-center gap-4 mt-12">
        <img src={logo} alt="logo" className="w-[117px] h-[129px]"/>
        <p className="text-black text-[60px] font-medium leading-[30px] text-center">
          We Report Work
        </p>
      </div>
      <div className="w-full flex justify-evenly flex-wrap">
        <ul className="flex flex-col gap-4">
          <li className="flex gap-8 items-center">
            <img src={checkLogo} alt="check logo" />
            <p className="text-[25px] font-medium text-black leading-[20px]">
              Daily Summary Automated
            </p>
          </li>
          <li className="flex gap-8 items-center">
            <img src={checkLogo} alt="check logo" />
            <p className="text-[25px] font-medium text-black leading-[20px]">
              No Mannual Work
            </p>
          </li>
          <li className="flex gap-8 items-center">
            <img src={checkLogo} alt="check logo" />
            <p className="text-[25px] font-medium text-black leading-[20px]">
              Never miss reporting deadlines
            </p>
          </li>
        </ul>
        <div className="w-[458px] h-[285px] bg-[#FFFFFF80] border-2 rounded-lg border-[#009ef8] border-opacity-[0.81]">
          <div className="flex  flex-col gap-8  p-8">
            <div className="flex flex-col gap-1">
              <p className="md:text-2xl text-xl font-semibold">Get Started</p>
              <p className="text-sm font-normal mb-5">
                Connect your <span className="text-blue-500">Google</span> account
                and begin to access your info in a{" "}
                <span className="text-blue-500">quick</span> and{" "}
                <span className="text-blue-500">easy</span> manner.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-full flex gap-2 items-center justify-center shadow-md rounded-md p-2 cursor-pointer hover:shadow-lg">
                <img src={googleIcon} alt="google icon" />
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
        {show && (
          <div className="w-full flex flex-col justify-center items-center bg-black gap-4 px-2 mt-10">
            <div className="w-full flex justify-between items-center py-2 px-4">
              <div className="flex gap-2 items-center">
                <p className="text-white">
                  Disclosure: At We Report Work, your trust is important to us.
                </p>
                <img src={emoji} alt="emoji" className="w-[15px] h-[15px]" />
              </div>
              <span
                className="text-white cursor-pointer"
                onClick={() => setShow(false)}
              >
                x
              </span>
            </div>
            <div className="text-white px-4 pb-4">
              We are dedicated to maintaining the highest standards of data
              privacy and security. In alignment to this commitment, our app
              strictly adheres to the Google API Services User Data Policy,
              including the Limited Use requirements. We ensure that handling,
              processing, and storage of such data is conducted in a manner that
              is fully compliant with the specified policies and requirements.
              For more information we encourage our users to review the policy.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
