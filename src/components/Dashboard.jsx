import { useState } from "react";
import checkSign from "../assests/Frame.svg";
import calendar from "../assests/calender.svg";
import logo from "../assests/LOGO 12.png";
import giftIcon from "../assests/gift.png";
import coinIcon from "../assests/coin.png";
import dotIcon from "../assests/image 33.png";
import mailIcon from "../assests/Gmail_icon_(2020) 1.svg";
import g_calendar from "../assests/Group.svg";
import driveIcon from "../assests/drive.svg";
import penIcon from "../assests/image 46.png";
function Dashboard() {
  const [day, setDay] = useState("Today");
  return (
    <div className="w-full h-full bg-[#F6F6F6]  felx flex-col gap-10">
      <div className="w-full bg-[#F6F6F6] flex gap-4 px-40 py-2">
        <div className="w-full flex flex-col gap-4 py-8">
          <p className="text-right underline font-bold text-[20px] leading-[50px] text-[#3D66FB] font-notoSans cursor-pointer">
            Sign out
          </p>
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
          <div className="w-full h-[357px] flex flex-col justify-center items-center mt-24">
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col border-l-8 my-2 pl-2 border-[#FBBC05] rounded-sm">
                <p className="text-[25px] font-bold leading-[55px]">
                  Your work summary
                </p>
                <p className="text-xs font-normal leading-[30px]">
                  Connect your <span className="text-[#4285F4]">Google </span>
                  accounts to see the summary of your work activities. Ready?
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
            <div className="w-full flex justify-evenly border rounded-[100px] shadow-xl bg-[#FFFFFF]">
              <div className="w-[270px] h-[50px] rounded-[100px] bg-[#FFFFFF] flex justify-center items-center gap-2 cursor-pointer hover:shadow-xl hover:z-10">
                <p className="text-black text-opacity-80 font-bold text-[20px] leading-[55px] font-sans">
                  All Tools
                </p>
              </div>

              <div className="w-[270px] h-[50px] rounded-[100px] bg-[#FFFFFF] flex justify-center items-center gap-2 cursor-pointer hover:shadow-xl hover:z-10">
                <img
                  src={mailIcon}
                  alt="mail icon"
                  className="w-[24px] h-[18px]"
                />
                <p className="text-black text-opacity-80 font-bold text-[20px] leading-[55px] font-sans">
                  Gmail
                </p>
              </div>

              <div className="w-[270px] h-[50px] rounded-[100px] bg-[#FFFFFF] flex justify-center items-center gap-2 cursor-pointer hover:shadow-xl hover:z-10">
                <img
                  src={g_calendar}
                  alt="google calendar"
                  className="w-[24px] h-[18px]"
                />
                <p className="text-black text-opacity-80 font-bold text-[20px] leading-[55px] font-sans">
                  Calendar
                </p>
              </div>

              <div className="w-[270px] h-[50px] rounded-[100px] bg-[#FFFFFF] flex justify-center items-center gap-2 cursor-pointer hover:shadow-xl hover:z-10">
                <img
                  src={driveIcon}
                  alt="google drive"
                  className="w-[24px] h-[18px]"
                />
                <p className="text-black text-opacity-80 font-bold text-[20px] leading-[55px] font-sans">
                  Drive
                </p>
              </div>
            </div>

            <div className="w-full min-h-full flex flex-col justify-between items-center bg-[#FFFFFF80] rounded-md py-5">
              <div></div>
              <div className="w-[375px] flex flex-col gap-2">
                <div className="flex gap-2 justify-center items-center">
                  <img
                    src={mailIcon}
                    alt="mail_icon"
                    className="w-[30px] h-[18px]"
                  />
                  <img
                    src={g_calendar}
                    alt="google_calendar_icon"
                    className="w-[30px] h-[18px]"
                  />
                  <img
                    src={driveIcon}
                    alt="google_drive_icon"
                    className="w-[30px] h-[18px]"
                  />
                </div>
                <p className="text-[18px] leading-[30px] font-bold text-black text-center">
                  Your{" "}
                  <span className="text-[18px] leading-[30px] font-bold text-[#3D66FB]">
                    work summary
                  </span>{" "}
                  will populate here, connect your Google Tools in the input
                  section below.
                </p>
              </div>
              <div className="my-10 px-4 w-full flex justify-between items-center">
                <div className="flex gap-2">
                  {/* figma is not opening in dev mode so unable to export the icon for this...it is showing that it is an image but here i need icon */}

                  <button className="p-2 bg-[#D4D9DC] bg-opacity-80 shadow-md border rounded-md">
                    msg
                  </button>
                  <button className="p-2 bg-[#D4D9DC] bg-opacity-80 shadow-md border rounded-md">
                    whatsapp
                  </button>
                  <button className="p-2 bg-[#D4D9DC] bg-opacity-80 shadow-md border rounded-md">
                    copy
                  </button>
                  <button className="p-2 bg-[#D4D9DC] bg-opacity-80 shadow-md border rounded-md">
                    share
                  </button>
                </div>
                <button className="p-2 bg-[#D4D9DC] bg-opacity-80 shadow-md border rounded-md text-[20px] leading-[26px] font-bold">
                  Sammarize
                </button>
                <button className="flex gap-1 items-center px-2 bg-[#D4D9DC] bg-opacity-80 shadow-md border rounded-md">
                  <img
                    src={penIcon}
                    alt="pen icon"
                    className="w-[30px] h-[30px]"
                  />
                  <p className="text-[15px] leading-[44px] font-bold">
                    Edit Template
                  </p>
                </button>
              </div>
            </div>
            {/* <div className="w-full flex justify-between">
              <button>sudheer</button>
              <button>Kumar</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
