import { useState } from "react";
import checkSign from "../../assests/Frame.svg";
import calendar from "../../assests/calender.svg";
import logo from "../../assests/LOGO 12.png";
import giftIcon from "../../assests/gift.png";
import coinIcon from "../../assests/coin.png";
import dotIcon from "../../assests/image 33.png";
import mailIcon from "../../assests/Gmail_icon_(2020) 1.svg";
import g_calendar from "../../assests/Group.svg";
import driveIcon from "../../assests/drive.svg";
import penIcon from "../../assests/image 46.png";
import GmailCard from "../Cards/GmailCard";
import { gmailData, CalendarData, DriveData } from "./Data";
import CalendarCard from "../Cards/CalendarCard";
import DriveCard from "../Cards/DriveCard";
import shareOption from "../../assests/shareit 6.png";
import Footer from "../Footer";
import personIcon from "../../assests/person.svg";
import msgIcon from "../../assests/msg.svg";
import dotcon from "../../assests/image 33.png";
function Dashboard() {
  const [day, setDay] = useState("Today");
  return (
    <>
      <div className="w-full bg-[#F6F6F6] flex flex-col px-40 py-2">
        <div className="w-full flex flex-col gap-8 py-8">
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

          <div className="text-[50px] text-left font-bold leading-5 font-notoSans">
            Welcome, Jyot
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col border-l-8 my-2 pl-2 border-[#FBBC05] rounded-sm">
              <p className="text-[25px] font-bold leading-[55px] text-black text-opacity-80">
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

          <div className="w-full flex flex-col gap-10 pt-2">
            <div className="w-full flex flex-col bg-[#FFFFFF80] rounded-md  shadow-md gap-24 items-center">
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
                 {/* figma is not opening in dev mode so unable to export the icon for this...that's why i am using the image but here we need to add four different icon as button */}
                 <img
                  src={shareOption}
                  alt="icon"
                  className="w-[336px] h-[95px]"
                />
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

            <div className="w-full flex justify-between">
              <button className="flex items-center gap-2 px-3 border-[3px] border-[#3D66FB] rounded-[30px] ">
                <img src={personIcon} alt="person icon" />
                <p className="text-[15px] leading-[55px] font-bold text-black">
                  Switch to Manager View
                </p>
              </button>
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
          <div className="w-full flex flex-col gap-4 mt-16 shadow-lg rounded-md py-4">
            <p className="text-[25px] leading-[55px] font-bold text-black text-opacity-80 border-l-[10px] border-[#FBBC05] pl-4">
              Setup your reporting manager / team members
            </p>
            <div className=" w-full flex gap-10">
              <div className="w-full flex flex-col gap-4">
                <div className="w-full flex flex-col justify-between gap-4 rounded-lg bg-white pb-4">
                  <table className="">
                    <thead className="bg-[#FBBC05]">
                      <tr>
                        <th className="text-[25px] pl-2 rounded-tl-lg text-left leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          Team Members
                        </th>
                        <th className="text-[25px] text-left rounded-tr-lg leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      <tr>
                        <td className="text-[25px] pl-2 leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          jyot123987@gmail.com
                        </td>
                        <td className="text-[25px] leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          Invited
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[25px] pl-2 leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          kartika@gmail.com
                        </td>
                        <td className="text-[25px] leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          Joined
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[25px] pl-2 leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          steny@gmail.com
                        </td>
                        <td className="text-[25px] leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          Joined
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[25px] pl-2 leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          viraj@gmail.com
                        </td>
                        <td className="text-[25px] leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          Joined
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="px-8">
                    <div className="flex w-full gap-4 rounded-md shadow-md py-2 px-5">
                      <p className="w-full border-b-[5px] border-[#3D66FB]"></p>
                      <button className="text-[25px] leading-[55px] font-bold text-[#3D66FB] text-opacity-80">
                        Invite
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-center items-baseline gap-2">
                  <img src={dotcon} alt="icon" className="w-[18px] h-[18px]" />
                  <p className="text-[25px] leading-[30px] font-normal text-black text-opacity-80 font-sans">
                    Your work summaries are
                    <span className="text-[25px] leading-[30px] font-bold text-black text-opacity-80 font-sans">
                      {" "}
                      not shared with your team members
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4">
                <div className="w-full h-full flex flex-col justify-between gap-4 rounded-lg bg-white pb-4">
                  <table className="">
                    <thead className="bg-[#FBBC05]">
                      <tr>
                        <th className="text-[25px] pl-2 rounded-tl-lg text-left leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          Reporting Manager
                        </th>
                        <th className="text-[25px] text-left rounded-tr-lg leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      <tr>
                        <td className="text-[25px] pl-2 leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          ashishgarg@gmail.com
                        </td>
                        <td className="text-[25px] leading-[55px] text-black text-opacity-80 font-bold font-sans">
                          Joined
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="px-8">
                    <div className="flex w-full gap-4 rounded-md shadow-md py-2 px-5">
                      <p className="w-full border-b-[5px] border-[#3D66FB]"></p>
                      <button className="text-[25px] leading-[55px] font-bold text-[#3D66FB] text-opacity-80">
                        Invite
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center items-baseline gap-2">
                  <img src={dotcon} alt="icon" className="w-[18px] h-[18px]" />
                  <p className="text-[25px] leading-[30px] font-normal text-black text-opacity-80 font-sans">
                    Your manager can only see your
                    <span className="text-[25px] leading-[30px] font-bold text-black text-opacity-80 font-sans">
                      {" "}
                      saved summaries
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-8 mt-14">
          <p className="text-[25px] leading-[55px] font-bold text-black text-opacity-80 font-sans border-l-[10px] border-[#FBBC05] pl-4">
            Work Summary : Inputs
          </p>
          <div className="flex flex-col gap-20">
            <GmailCard data={gmailData} exclusion={true} />

            <CalendarCard data={CalendarData} exclusion={true} />

            <DriveCard data={DriveData} exclusion={true} />

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
