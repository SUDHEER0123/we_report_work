import { useState } from "react";
import checkSign from "../../assests/Frame.svg";
import calendar from "../../assests/calender.svg";
import logo from "../../assests/LOGO 12.png";
import giftIcon from "../../assests/gift.png";
import coinIcon from "../../assests/coin.png";
import dotIcon from "../../assests/image 33.png";
import personIcon from "../../assests/person.svg";
import msgIcon from "../../assests/msg.svg";
import { Link } from "react-router-dom";
function ManagerDashboard() {
  const [day, setDay] = useState("Today");
  return (
    <>
      <div className="w-full bg-[#F6F6F6] flex flex-col px-40 py-2">
        <div className="w-full flex flex-col py-8">
          <p className="text-right underline font-bold text-[20px] leading-[50px] text-[#3D66FB] font-notoSans cursor-pointer">
            Sign out
          </p>
          <div className="w-full flex justify-end">
            <p className="px-2 bg-white text-xs leading-[30px] font-normal rounded-md text-black">
              {" "}
              Tokens are inputs/outputs to/from the summarisation model (4 char
              ~= 1 token).
            </p>
          </div>
          <div className="w-full flex justify-center items-center gap-2">
            <img src={logo} alt="logo" className="w-[55px] h-[60px]" />
            <p className="text-[35px] font-semibold leading-[30px] font-fredoka">
              We Report Work
            </p>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-2 items-center border-2 rounded-[18px] border-[#4285F4] px-4 py-2">
              <img
                src={giftIcon}
                alt="gift icon"
                className="w-[36px] h-[37px]"
              />
              <div className="flex flex-col gap-1">
                <p className="text-base leading-[25px] font-bold text-opacity-80 text-black">
                  Your Plan:{" "}
                  <span className="text-opacity-80 text-black uppercase text-base leading-[25px] font-bold ">
                    Free (limited)
                  </span>
                </p>
                <p className="text-base leading-[25px] font-bold text-[#3D66FB] underline cursor-pointer">
                  Explore Plans / Topup
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center border-2 rounded-[18px] border-[#4285F4] px-4 pt-1 pb-2">
              <img
                src={coinIcon}
                alt="gift icon"
                className="w-[62px] h-[62px]"
              />
              <div className="flex flex-col items-start">
                <p className="flex items-center text-[20px] leading-[40px] font-bold text-opacity-80 text-black uppercase">
                  Credits
                  <img
                    src={dotIcon}
                    alt="dot icon"
                    className="w-[18px] h-[18px]"
                  />
                </p>
                <p className="text-[40px] leading-[20px] font-black font-notoSans">
                  1000
                </p>
              </div>
            </div>
          </div>

          <div className="text-[50px] text-left font-bold leading-5 font-notoSans mt-10">
            Welcome, Jyot
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col border-l-8 my-2 pl-2 border-[#FBBC05] rounded-sm">
              <p className="text-[25px] font-bold leading-[55px] text-black text-opacity-80">
              Your team member’s work summary
              </p>
              <p className="text-xs font-normal leading-[30px]">
              Ask all your team members to save their summary. You can only view the saved summaries.
              </p>
            </div>
            <div className="flex gap-4">
              <div
                className={`flex gap-1 ${
                  day === "Yesterday" ? "bg-[#FFE071]" : "bg-[#EFEFEF]"
                } p-2 rounded-md cursor-pointer`}
              >
                {day === "Yesterday" && (
                  <img src={checkSign} alt="check sign" />
                )}

                <button
                  className="text-sm font-normal"
                  onClick={() => setDay("Yesterday")}
                >
                  Yesterday
                </button>
              </div>
              <div
                className={`flex gap-1 ${
                  day === "Today" ? "bg-[#FFE071]" : "bg-[#EFEFEF]"
                } p-2 rounded-md cursor-pointer`}
              >
                {day === "Today" && <img src={checkSign} alt="check sign" />}

                <button
                  className="text-sm font-normal"
                  onClick={() => setDay("Today")}
                >
                  Today
                </button>
              </div>
              <img
                src={calendar}
                alt="calender"
                className="bg-[#EFEFEF] p-2 rounded-md cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-10 pt-2">
            <div className="w-full flex flex-col bg-[#FFFFFF80] rounded-md  shadow-md gap-24 items-center">
            List will add here TOMORROW 
            </div>

            <div className="w-full flex justify-between pb-4">
              <Link className="flex items-center gap-2 px-3 border-[3px] border-[#3D66FB] rounded-[30px] ">
                <img src={personIcon} alt="person icon" />
                <p className="text-[15px] leading-[55px] font-bold text-black">
                  Switch to your Summary
                </p>
              </Link>
              <button className="flex items-center gap-2 px-3 border-[3px] border-[#3D66FB] rounded-[30px] ">
                <img
                  src={msgIcon}
                  alt="message icon"
                  className="w-[60px] h-[60px]"
                />
                <p className="text-[15px] leading-[55px] font-bold text-black">
                  Have Feedback ?
                </p>
              </button>
            </div>
          </div>
        </div>

      
      </div>
    </>
  );
}
export default ManagerDashboard;
