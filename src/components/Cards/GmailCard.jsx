import ExclusionsIcon from "../../assests/image 213.png";
import { useState } from "react";
import gMailIcon from "../../assests/Gmail_icon_(2020) 1.svg";
const GmailCard = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);
  return (
    <div className="w-full max-h-[270px] flex flex-col justify-center items-center">
      <div className="relative w-full flex justify-between">
        <div className="flex items-center gap-2">
          <img src={gMailIcon} alt="gMail Icon" />
          <p className="text-[25px] text-left font-bold leading-[55px] text-black text-opacity-80">
            Gmail(Sent Emails)
          </p>
        </div>
        {props.exclusion && (
          <button
            className="w-[165px] flex gap-2 items-center"
            onClick={() => setShow((prev) => !prev)}
          >
            <img src={ExclusionsIcon} alt="ExclusionsIcon" />
            <p className="text-[25px] leading-[30px] font-normal font-sans">
              Exclusions
            </p>
          </button>
        )}

        {show && (
          <div className="absolute bg-[#FFFFFF] py-2 right-0 -top-24 z-10 px-5 border rounded-[20px] border-[#D9D9D9] shadow-md">
            <ul className="gap-x-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" id="input1" />
                <label
                  htmlFor="input1"
                  className="text-[15px] leading-[30px] font-normal font-sans"
                >
                  Limit Items to 500 Char
                </label>
              </li>

              <li className="flex items-center gap-2">
                <input type="checkbox" id="input2" />
                <label
                  htmlFor="input2"
                  className="text-[15px] leading-[30px] font-normal font-sans"
                >
                  Exclude OTP & Verification
                </label>
              </li>

              <li className="flex items-center gap-2">
                <input type="checkbox" id="input3" />
                <label
                  htmlFor="input3"
                  className="text-[15px] leading-[30px] font-normal font-sans"
                >
                  Exclude Jobportals, Netflix
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="w-full min-h-[270px] bg-[#FFFFFF] border-2 rounded-lg border-[#009ef8] border-opacity-[0.81] overflow-y-auto">
        <table className="w-full max-h-full">
          <thead className=" sticky top-0 z-10 bg-[#F6F6F6] bg-opacity-20 rounded-t-lg">
            <tr>
              <th className="text-[#4285F4] text-xs font-bold leading-[55px] text-left pl-4">
                From
              </th>

              <th className="text-[#4285F4] text-xs font-bold leading-[55px] text-left">
                Thread Name
              </th>

              <th className="text-[#4285F4] text-xs font-bold leading-[55px] text-left">
                Message Content
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data &&
              props.data?.map((ele, idx) => (
                <tr className="" key={idx + "gmail"}>
                  <td className="text-xs font-bold pl-4 border-b border-gray-300">
                    {ele.from}
                  </td>

                  <td className="text-xs font-bold border-b border-gray-300">
                    {ele.thread}
                  </td>

                  <td className="text-xs font-normal border-b border-gray-300">
                    {ele.msg}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GmailCard;
