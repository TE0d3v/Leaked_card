import { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
function App() {

  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState();

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-full relative">
        <div className="w-[60%] h-full  bg-[#220f9d]"></div>
        <div className="w-[40%] h-full"></div>
        <div className="w-full h-full absolute top-0 flex-col">
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
              <p className="text-[25px] text-white">{numero || "0000 0000 0000 0000"}</p>
              <p className="text-white text-[18px] p-2">{nome || "Nome no cartão"}</p>
            </div>
          </div>
          <div className="w-[400px] h-[230px] bg-black rounded-lg mt-[50px] ml-[100px] ">
            <div className="w-full h-[30%] flex items-end">
              <div className="w-full h-[75%] bg-neutral-900"></div>
            </div>
            <div className="w-full h-[70%] flex justify-center pt-[30px]">
              <div className="w-[70%] h-[40px] bg-gray-500">
                <p className="text-black">0000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full ">
        <div className="w-full h-[30%] p-[40px]">
          <h1 className="text-[40px]">Preencha seus dados</h1>
        </div>
        <div className="w-full h-[70%] flex justify-center">
          <form className="w-[60%] h-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-[20px]">Nome no cartão</label>
              <input
                type="text"
                className="w-full p-[10px] bg-gray-300"
                onChange={
                  (event) => { setNome(event.target.value) }
                }
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-[20px]">Numero do cartão</label>
              <input
                type="number"
                className="w-full p-[10px] bg-gray-300"
                placeholder="0000 0000 0000 0000"
                onChange={
                  (event) => { setNumero(event.target.value) }
                }
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
              <div className="w-[35%] flex flex-col mt-7">
                <label htmlFor="" className="text-[20px]"></label>
                <input
                  type="text"
                  className="w-[80%] p-[10px] bg-gray-300 text-[18px]"
                  placeholder="CVV"
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-[20px]">Senha do cartão</label>
              <input
                type="password"
                className="w-full p-[10px] bg-gray-300"
              />
            </div>
            <div className="w-full flex item-center justify-center">
              <button
                type="submit"
                className="w-[90%] h-[40px] bg-[#6959d7]  border-none rounded-[5px]  text-white"
              >
                Verificar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default App
