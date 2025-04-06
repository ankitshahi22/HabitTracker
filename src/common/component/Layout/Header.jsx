import AddIcons from "../../Icons/AddIcons";

export default function Header() {
  return (
    <div className="flex justify-between p-3 text-sm">
      <p className="text-gray-500">FRIDAY, 04 APR</p>
      <div className="flex gap-1.5 text-purple-800 ">
        <p>Create</p>
        <button>
          <AddIcons />
        </button>
      </div>
    </div>
  );
}
