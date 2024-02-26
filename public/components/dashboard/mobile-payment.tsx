// import Image from "next/image"
// import { PaymentCards } from "../payments/cards"
// import { Lora } from "../../fonts"

// type props = {
//     handleCardClick: () => void
// }
// export const MobilePayment = ({handleCardClick}:props) => {
//     return(
//         <div className="flex flex-wrap lg:gap-[2rem] md:gap-[1rem] gap-[1rem] w-[100%] mt-4">
//         {PaymentCards.map((elem) => (
//           <div
//             className="flex flex-wrap justify-center lg:w-[22%] w-[32%] md:w-[30%] md:px-4 h-[120px] md:h-[100px] lg:px-2 lg:h-[120px] cursor-pointer items-center bg-white flex-wrap rounded-[12px] shadow-th"
//             // onClick={() => handleCardClick(elem.action)}
//           >
//             <Image
//               src={elem.img}
//               alt=""
//               width={50}
//               height={50}
             
//             />
//             <p
//               className={`${Lora.className} text-[#212524] font-light text-[15px] ml-4`}
//             >
//               {elem.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     )
// }