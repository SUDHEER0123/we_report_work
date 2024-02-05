import commingSoonIcon from "../assests/commingSoon.png";
import chatIcon from "../assests/chatIcon.png";
import squareIcon from "../assests/sqaure.png";
import teamIcon from "../assests/TeamsIcon.png";
import slackIcon from "../assests/slackIcon.png";
import circleIcon from "../assests/three_circle.png";
import gitIcon from "../assests/gitIcon.png";
import BadManIcon from "../assests/badmanIcon.png";
import checkIcon from "../assests/checkIcon.png";

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center gap-4 bg-[#FFFFFF] shadow-lg border rounded-[100px] border-[#D9D9D9] pl-12">
        <img
          src={commingSoonIcon}
          alt="comming soon icon w-[172px] h-[115px]"
        />
        <img src={squareIcon} alt="square icon" />
        <img src={teamIcon} alt="teams icon" />
        <img src={slackIcon} alt="slack icon" />
        <img src={circleIcon} alt="cicle icon" />
        <img src={gitIcon} alt="git icon" />
        <img src={BadManIcon} alt="badman icon" />
        <img src={checkIcon} alt="check Icon" />
        <p className="text-[25px] leading-[55px] font-bold text-black font-sans">
          & MORE
        </p>
      </div>
      <div className="w-full flex justify-end">
        <img src={chatIcon} alt="chat icon" className="w-[491px] h-[149px]" />
      </div>
    </div>
  );
};

export default Footer;
