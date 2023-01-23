import { MagnifyingGlass } from 'phosphor-react'
export function Navbar() {
    return (
        <div className="w-full flex items-center justify-end ">
            <MagnifyingGlass size={35} className="text-lime-400"/>
            
            <input 
                className="w-2/5 m-3 p-2 rounded-xl bg-lime-50 border-4 border-lime-800" 
                type="text"
                placeholder="Procurar por um presente"
                />
        </div>
    )
}