import { useState } from "react";
import Lable from "./Lable";
import Input from "./Input";

export default function CreateModal() {
  const [colorModal, setColorModal] = useState("#3B82F6");
  const [isOpen, setIsOpen] = useState(true);

  // Color plates
  const colors = [
    "3B82F6",
    "487151",
    "e7034a",
    "f7a524",
    "b64807",
    "fabc23",
    "ebbc73",
    "4c4771",
    "f87216",
    "547c54",
    "ba48f1",
    "dc8460",
    "e7caab",
    "09163e",
    "694930",
    "fc4475",
    "b4a6f2",
    "fdb4a3",
    "b8dab7",
    "ffedaa",
    "f8b38d",
    "feb813",
    "becab9",
    "006e48",
    "285483",
    "731e2d",
    "79fa0c",
    "f4b21d",
    "9325da",
    "fa1e84",
    "0784f2",
    "2fe0d4",
    "a2c5f9",
    "79e31e",
    "f7aa82",
    "f8766d",
    "8588f8",
    "00ad68",
    "f58e00",
    "f9d9d0",
  ];

  // Close Color Modal
  function handleClose() {
    setIsOpen(true);
  }

  function ColorModal() {
    return (
      <div className="flex flex-col gap-9">
        <div className="flex py-4 justify-between items-center px-4 border-b-1 border-gray-300">
          <h2 className="font-medium mx-auto text-[15px]">Select a Color</h2>
          <form method="dialog">
            <button className="text-sm text-gray-600" onClick={handleClose}>
              Close
            </button>
          </form>
        </div>
        <div className="px-5 grid grid-cols-4 gap-6 place-items-center">
          {colors.map((color, index) => (
            <ColorButton
              key={index}
              hexValue={`#${color}`}
              onSelect={handleButtonColor}
            />
          ))}
        </div>
      </div>
    );
  }

  function ColorButton({ hexValue, onSelect }) {
    return (
      <button
        style={{ backgroundColor: hexValue }}
        className="h-8 w-20 rounded-xl"
        onClick={() => {
          onSelect(hexValue);
          handleClose();
        }}
      ></button>
    );
  }

  function handleButtonColor(color) {
    setColorModal(color);
    setIsOpen(false);
  }

  return (
    <>
      {!isOpen ? (
        <ColorModal />
      ) : (
        <div className="flex flex-col gap-3 py-3 px-4">
          <div className="flex py-2 px-4 border-b border-gray-200">
            <h2 className="mx-auto text-[15px]">Create Habit</h2>
            <button className="text-gray-400 text-sm">Cancel</button>
          </div>

          <div>
            <Lable title="TITLE" />
            <Input
              title="Color"
              input="text"
              className="border-b border-gray-300 w-full py-2 px-1.5 outline-none text-gray-600 font-light"
              placeholder="Add habit title"
            >
              <button
                style={{ backgroundColor: colorModal }}
                className="h-7 w-22 rounded-2xl "
                onClick={() => setIsOpen(false)}
              />
            </Input>
          </div>
          <div className="">
            <Lable title="GOAL" />
            <div className="bg-[#F1EFEC] rounded-xl mt-1 px-1">
              <div className="flex justify-between items-center py-1">
                <Input title="Goal Value" />
                <Input
                  input="text"
                  className="text-center h-8 w-23 outline-none bg-[#DBDBDB] rounded-xl"
                  defaultValue="1"
                />
              </div>
              <div className="border-b border-gray-300"></div>
              <div className="flex justify-between items-center py-2">
                <Input title="Repeat" />
                <button className="text-[15px] text-center outline-none bg-[#DBDBDB] rounded-xl px-3 py-1.5">
                  Every day
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

{
  /* <div className="bg-[#F1EFEC] rounded-xl mt-1">
            <input
              type="text"
              className="border-b border-gray-300 w-full py-2 px-1.5 outline-none text-sm text-gray-600"
              placeholder="Add habit title"
            />
            <div className="flex items-center justify-between px-2 py-1.5">
              <p className="text-sm">Color</p>

            </div>
          </div> */
}
{
  /* <div>
            <Lable label="GOAL" />
          </div> */
}

// "text-center h-7 w-20 p-4 outline-none bg-[#DBDBDB] rounded-xl";
// "border-b border-gray-300 w-full py-2 px-1.5 outline-none text-gray-600"
// <div>
//   <Lable label="GOAL" />
// </div>
