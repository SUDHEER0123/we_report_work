import { useState } from "react";

const SelectDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("default");
  return (
    <div className="relative w-[230px] border-[3px] border-black flex justify-center items-center gap-2 z-10 bg-white rounded-[30px] mt-4">
      <button
        className="bg-white w-full flex justify-center items-center gap-4 rounded-[30px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex flex-row justify-center items-start gap-1">
          <p className="text-black font-sans text-[25px] font-bold leading-[55px]">
            {selectOption}
          </p>
        </div>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15 12.5L10 7.5L5 12.5"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15 7.5L10 12.5L5 7.5"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute top-11 right-0 mt-4 w-full overflow-auto flex flex-col justify-center items-start rounded-[4px] bg-white">
          {options.map((option, idx) => (
            <button
              key={idx + "option"}
              className="flex flex-col justify-center items-center gap-1 w-full hover:bg-[#EFEFEF] hover:cursor-pointer hover:rounded-[4px] hover:transition duration-700 hover:delay-0 p-2"
              onClick={() => {
                setSelectOption(option);
                setIsOpen(false);
              }}
            >
              <p className="text-black font-sans text-[25px] font-bold leading-[55px]">
                {option}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
