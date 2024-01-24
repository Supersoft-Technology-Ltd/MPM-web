import { Lora } from "../../fonts";
import { TableData } from "./data";

export const TransactionTable = () => {
  const getColorForId = (id: number) => {
    const colors = ["#A3A1FB", "#EA132C", "#FFA167", "#FF8474", "#81C9FF"];
    const patternLength = colors.length;

    // Special case: restart pattern at 6
    if (id >= patternLength) {
      return colors[(id - 0) % patternLength];
    }

    return colors[id - 0];
  };
  return (
   <div className="bg-[#FFF] py-4 rounded-[15px] mt-2">
     <table
      style={{
        width: "100%",
 
      }}
    >
      <thead>
        <th
          className={`${Lora.className} text-justify text-text_color font-normal text-[14px]`}
        >
          Transaction Category
        </th>
        <th
          className={`${Lora.className} text-justify text-text_color font-normal text-[14px]`}
        >
          Total Amount
        </th>
        <th
          className={`${Lora.className} text-justify text-text_color font-normal text-[14px]`}
        >
          % of Total Transaction
        </th>
      </thead>
      <tbody>
        {TableData.map((elem, id) => (
           <tr key={id} className={id === TableData.length - 1 ? '' : 'border-b border-border'} style={{paddingBottom: '1rem', padding: '20rem'}}>
            <td className="flex items-center">
              <div
                style={{
                  border: `2.9px solid ${getColorForId(id)}`,
                  borderWidth: "3px",
                  borderColor: getColorForId(id),
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              ></div>
              <p
                className={`${Lora.className} text=[#212524] font-extralight text-[13px] pl-4`}
              >
                {elem.category}
              </p>
            </td>
            <td className={`${Lora.className} text-[#212524] font-extralight text-[12px]`}>{elem.amount}</td>
            <td className={`${Lora.className} text-[#212524] font-extralight text-[12px] text-center`}>{elem.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
  );
};
