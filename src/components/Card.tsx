import { Gift, X } from "phosphor-react"
import * as Dialog from  "@radix-ui/react-dialog"
import { GifterForm } from "./GifterForm"

interface CardProps {
    name: string
    description: string
    image: string
    price: string
    // gifter: string
}

export function Card(props: CardProps) {
    return(
    <div className="w-full font-medium text-lime-100 font flex flex-col items-center justify-end rounded-xl gap-1">
        <div className="w-full border-4 border-lime-700 rounded-2xl hover:scale-105">
            <div className="bg-zinc-800 w-full rounded-t-xl text-center font-extrabold text-xl flex justify-center items-center gap-3 py-2">
                <Gift size={35} className="text-lime-400"/>
                Vale {props.name}
            </div>
            <div className="bg-zinc-800 w-full">
            <img 
                className="w-full h-full object-cover rounded-t-lg" 
                src= {props.image}
                alt= {props.name}></img>
            </div>
            <div className="bg-zinc-800 w-full text-center text-base">
                {props.description}
            </div>
            <div className="bg-zinc-800 w-full rounded-b-xl text-center font-semibold text-lg">
                R$ {props.price}
            </div>
        </div>
        <Dialog.Root>
            <Dialog.Trigger className="bg-lime-700 hover:bg-lime-900 w-full border-4 border-lime-800 hover:border-lime-600 rounded-xl text-xl font-extrabold hover:scale-105">
                    PRESENTEAR
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>
                <Dialog.Content className="bg-zinc-900 text-white  fixed top-1/2 left-1/2 p-10 rounded-2xl max-w-md -translate-x-1/2 -translate-y-1/2">
                    <Dialog.Close className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-200">
                        <X size={20} aria-label="Fechar"/>
                    </Dialog.Close>
                    <Dialog.Title className="text-3xl leading-tight text-white">
                        Enviar presente
                    </Dialog.Title>
                    <GifterForm />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </div>
)}