import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

function App() {

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-full relative">
        <div className="w-[60%] h-full bg-[#070032]"></div>
        <div className="w-[40%] h-full"></div>
        <div className="w-full h-full absolute top-0 flex flex-col">
          <div className="w-[600px] h-[340px] bg-black rounded-[20px] mt-[30px] ml-[70px]">
            <div className="w-full h-[30%] flex">
              <div className="w-[30%] h-full flex items-center justify-center gap-[5px]">
                <div className="bg-gray-50 w-[80px] h-[80px] rounded-full"></div>
                <div className="bg-gray-50 w-[60px] h-[60px] rounded-full"></div>
              </div>
              <div className="w-[70%] h-full flex items-start justify-end pr-[20px] pt-[15px]">
                <p className="text-[23px] text-white">Nome do banco</p>
              </div>
            </div>
            <div className="w-full h-[30%] pl-[20px] flex items-center"> 
              <FcSimCardChip size={100} />
              <LuNfc size={40} color="#ffffff" />
            </div>
            <div className="w-full pl-[20px]">
              <p className="text-[40px] text-white">0000 0000 0000 0000</p>
              <p className="text-[30px] text-white">Samuel Lima</p>
            </div>
          </div>
          <div className="w-[600px] h-[340px] bg-black rounded-[20px] mt-[50px] ml-[210px]">
            <div className="w-full h-[30%] flex items-end">
              <div className="w-full h-[75%] bg-neutral-900"></div>
            </div>
            <div className="w-full h-[70%] flex justify-center pt-[30px]">
                <div className="w-[70%] h-[55px] bg-gray-500 flex justify-end items-center pr-[20px]">
                  <p className="text-[26px]">000</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full">
        <div className="w-full h-[30%] p-[40px]">
          <h1 className="text-[60px]">Preencha seus dados</h1>
        </div>
        <div className="w-full h-[70%] flex justify-center">
          <form className="w-[60%] h-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-[20px]">Nome no cartão</label>
              <input 
                type="text" 
                className="w-full p-[10px] bg-gray-300" 
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-[20px]">Número do cartão</label>
              <input 
                type="text" 
                className="w-full p-[10px] bg-gray-300"
                placeholder="0000 0000 0000 0000" 
              />
            </div>
            <div className="w-full flex">
              <div className="w-[65%] flex flex-col">
                <label htmlFor="" className="text-[20px]">Data de expiração</label>
                <div className="flex gap-[10px]">
                  <input 
                    type="text"
                    className="w-[45%] p-[10px] bg-gray-300"
                    placeholder="MM"
                  />
                  <input 
                    type="text"
                    className="w-[45%] p-[10px] bg-gray-300"
                    placeholder="AA"
                  />
                </div>
              </div>
              <div className="w-[35%] flex flex-col"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
