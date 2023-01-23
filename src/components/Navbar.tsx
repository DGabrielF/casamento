import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'

export let selectedFilter = ''

export function Navbar() {
    const availableCategories = [
        'Tudo',
        'Cozinha',
        'Sala',
        'Quarto',
    ]
    return (
        <div className="w-full flex items-center justify-between ">
            <div className='hidden sm:flex w-[45%] text-white items-center justify-between gap-3 mx-auto'>
                {availableCategories.map((item) => {
                return(
                    <button 
                    key={item}
                    onClick={() => {
                        selectedFilter = item
                    }}
                    className='border-4 border-lime-700 rounded-xl p-2 w-full'>{item}</button>
                    )}
                )}
            </div>
            <div className='flex items-center justify-end w-[90%] sm:w-[45%] mx-auto'>
                <MagnifyingGlass size={35} className="text-lime-400"/>
                <input 
                    className="w-4/5 m-3 p-2 rounded-xl bg-lime-50 border-4 border-lime-800" 
                    type="text"
                    placeholder="Procurar por um presente"
                />
            </div>
        </div>
    )
}