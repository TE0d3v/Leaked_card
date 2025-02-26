import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

export default function CardComponent() {
    return (
        <div className="w-[400px] h-[230px] bg-black rounded-lg mt-[30px] ml-[300px]">
            <div className="w-full h-[30%] flex">
                <div className="w-[30%] h-full flex items-center justify-center gap-[5px]">
                    <div className="bg-gray-300 w-[60px] h-[60px] rounded-full "></div>
                    <div className="bg-gray-300 w-[40px] h-[40px] rounded-full "></div>
                </div>
                <div className="w-[70%] h-full flex items-start justify-end pr-[20px] pt-[15px]">
                    <p className="text-[20px] text-white">Nome Do Banco</p>
                </div>
            </div>
            <div className="w-full h-[30%] pl-[20px] flex items-center">
                <FcSimCardChip size={60} />
                <LuNfc size={30} color="#fff" />
            </div>
            <div className="w-full pl-[20px]">
                <p className="text-[25px] text-white">{"0000 0000 0000 0000"}</p>
                <p className="text-white text-[18px]">{"Nome no cartão"}</p>
            </div>
        </div>
    )
}