export default function Input({ title, input, children, ...props }) {
  return (
    <div className="bg-[#F1EFEC] rounded-xl mt-1">
      {input === "text" ? <input type={input} {...props} /> : null}
      <div className="flex justify-between items-center">
        <p className="text-[15px] font-normal px-2">{title}</p>
        <div className="px-2 mt-1">{children}</div>
      </div>
    </div>
  );
}

// <p className="text-sm px-1.5">{title}</p>;
// {
//   children;
// }

// <div className="flex">
//   <p>{name}</p>
//   <input type={input} />
// </div>;
