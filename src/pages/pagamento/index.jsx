
import { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import instance from '../../api/instance.js';


export default function PagePagamento() {
        // rejets para fazer formatação de maneira não nativa
  //npm toastifyy para adicionar pop-ups personalizados
  const [nome, setNome] = useState("");
    const [numero, setNumero] = useState();
    const [mes, setMes] = useState(0);
    const [ano, setAno] = useState(0);
    const [cvv, setCvv] = useState(0);
    const [senha, setSenha] = useState(0);


    function handleCardNumber(event) {
        let cardNumber = event.target.value;
        let formattedCardNumber = cardNumber.replace(/\D/g, ''); //remove tudo que não for número
        formattedCardNumber = formattedCardNumber.substring(0, 16); //faz a limitação da numeração do numero do cartão
        formattedCardNumber = formattedCardNumber.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
        setNumero(formattedCardNumber);
    }

    async function sendCard(event) {
        event.preventDefault()

        if (!nome || !numero || !mes || !ano || !cvv || !senha) {
            toast.error("Preencha todos os campos")
            return
        }
        if (cvv.length !== 3) {
            toast.error("CVV inválido")
            return
        }
        if (mes.length !== 2 || ano.length !== 4) {
            toast.error("data de expiração inválida")
        }
        const currentDate = new Date()
        // const currentYear = currentDate.getFullYear()//2025
        // const currentMonth = currentDate.getMonth() + 1 // 2

        const dateCard = new Date(`20${ano}`, mes - 1, 1)

        if (dateCard < currentDate) {
            toast.error("Data de expiração invalida")
            return
        }
        try {
            await instance.post("/creditcards", {
                name: nome,
                number: numero.replace(/\D/g, ""),
                expiration: `${mes}/${ano}`,
                cvv: cvv,
                password: senha
            })

            toast.success("Dados enviados com sucesso")
        } catch (error) {
            toast.error("Erro ao enviar os dados")
            console.log(error)
        }
    }


    return (
        <div className="w-full h-screen flex">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                theme="dark"
            />
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
                            <p className="text-white text-[18px]">{nome || "Nome no cartão"}</p>
                        </div>
                    </div>
                    <div className="w-[400px] h-[230px] bg-black rounded-lg mt-[50px] ml-[100px] ">
                        <div className="w-full h-[30%] flex items-end">
                            <div className="w-full h-[75%] bg-neutral-900"></div>
                        </div>
                        <div className="w-full h-[70%] flex flex-col justify-around items-center pt-[30px]">
                            <div className="w-[70%] h-[40px] bg-gray-500 flex justify-end items-center pr-[20px]">
                                <p className=" text-black">{cvv || "000"}</p>
                            </div>
                            <div className="w-[70%] h-[35px] flex justify-between">
                                <div className="text-white">{mes || "Mês"}</div>
                                <div className="text-white">{ano || "Ano"}</div>
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
                    <form
                        onSubmit={sendCard}
                        className="w-[60%] h-full flex flex-col gap-[10px]">
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
                                type="text"
                                value={numero}
                                className="w-full p-[10px] bg-gray-300"
                                placeholder="0000 0000 0000 0000"
                                onChange={
                                    (event) => { handleCardNumber(event) }
                                }
                            />
                        </div>
                        <div className="w-full flex">
                            <div className="w-[65%] flex flex-col">
                                <label htmlFor="" className="text-[20px]">Data de expiração</label>
                                <div className="flex gap-[10px]">
                                    <input
                                        type="number"
                                        className="w-[45%] p-[10px] bg-gray-300"
                                        placeholder="MM"
                                        onChange={
                                            (event) => { setMes(event.target.value) }
                                        }
                                    />
                                    <input
                                        type="number"
                                        className="w-[45%] p-[10px] bg-gray-300"
                                        placeholder="AA"
                                        onChange={
                                            (event) => { setAno(event.target.value) }
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-[35%] flex flex-col">
                                <label htmlFor="" className="text-[20px]">CVV</label>
                                <input
                                    type="number"
                                    className="w-[80%] p-[10px] bg-gray-300 text-[18px]"
                                    placeholder="cvv"
                                    onChange={
                                        (event) => { setCvv(event.target.value) }
                                    }
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <label htmlFor="" className="text-[20px]">Senha do cartão</label>
                            <input
                                type="password"
                                className="w-full p-[10px] bg-gray-300"
                                placeholder="****"
                                onChange={
                                    //e para abreviar event rsrsrs
                                    (e) => { setSenha(e.target.value) }
                                }
                            />
                        </div>
                        <div className="w-full flex item-center justify-center">
                            <button
                                type="submit"
                                className="w-[100%] h-[40px] bg-[#6959d7]  border-none rounded-[5px]  text-white"
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