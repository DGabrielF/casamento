import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from 'react'

const availablePaymentWay = [
    'PIX',
    'Transferência',
]
export function GifterForm() {
    const [gifter, setGifter] = useState('')
    const [payWays, setPayWays] = useState<number[]>([])

    function confirmGift(event: FormEvent) {
        event.preventDefault()
        console.log(gifter, payWays)
    }

    function TogglePayWay(payWay: number) {
        if (payWays.includes(payWay)) {
            const newPayWaysRemoveOne = payWays.filter(pay => pay !==payWay)
            setPayWays(newPayWaysRemoveOne)
        } else {
            const newPayWaysAddedOne = [...payWays, payWay]
            setPayWays(newPayWaysAddedOne)
        }
    }
    return(
        <form 
            onSubmit={confirmGift}
        >
            <label htmlFor="gifter"></label>
            <input 
                className='px-2 mt-3 mb-2 rounded-lg bg-zinc-900 hover:bg-lime-900 focus:bg-lime-900 border-4'
                type="text"
                id="title"
                placeholder="Digite seu nome"
                onChange={event => setGifter(event.target.value)}
                autoFocus
            />
            <span className='text-zinc-200 font-semibold'>Formas de pagamento: </span>
            {availablePaymentWay.map((payWay, index) => {
                return (
                    <Checkbox.Root
                        key={payWay}
                        onCheckedChange={() => {
                            TogglePayWay(index)
                        }}
                        className='flex items-center gap-1 group'>
                            <div className='h-7 w-7 my-2 rounded-lg border-4 flex items-center justify-center bg-zinc-900 group-data-[state=checked]:bg-lime-900'>

                                <Checkbox.Indicator>
                                    <Check size={20} className='text-white font-bold' />
                                </Checkbox.Indicator>
                            </div>
                        <span className='text-zinc-400 font-bold leading-tight group-data-[state=checked]:text-white'>{payWay}</span>
                    </Checkbox.Root>
                )
            })}
            <button type='submit' className='mt-6 rounded-lg py-1 w-full flex items-center justify-center gap-3 font-semibold bg-green-600'>
                <Check className='font-bold'/>
                Confirmar
            </button>
        </form>
    )
}