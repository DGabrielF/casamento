import hero from '../assets/hero.jpeg'    

export function Hero() {
    return (
        <div className="w-full h-screen mx-auto my-2 max-h-72 justify-center items-center">
            <img className="h-full rounded-3xl mx-auto" src={hero} alt="O casal que mais se ama no mundo, Os Bezudos">
            </img>
        </div>
    )
}