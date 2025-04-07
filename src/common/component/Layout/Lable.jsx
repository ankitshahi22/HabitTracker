// export default function Lable({
//   label,
//   title,
//   input,
//   children,
//   name,
//   ...props
// }) {
//   return (
//     <div>
//       <label className="font-light text-sm px-1 text-gray-400">{label}</label>

//       {input === "text" ? <input type={input} {...props} /> : null}
//       <div className="flex items-center justify-between">
//         <p className="text-sm py-2 px-1.5">{title}</p>
//         {children}
//       </div>
//       <div>
//         <p>{name}</p>
//       </div>
//     </div>
//   );
// }

export default function Lable({ title }) {
  return (
    <>
      <label className="font-light text-sm px-1 text-gray-400">{title}</label>
    </>
  );
}
