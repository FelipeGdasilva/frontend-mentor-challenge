import Image from "next/image";

export default function Header(){
    return(
        <header className=" flex flex-col items-center justify-center">
            <div className="p-10">
            <Image src="/assets/images/logo-full.svg" alt = "logo" width={200} height={100}/>
            </div>
            <h1 className="text-neutral-0  text-4xl font-extrabold text-center">Your Journey to Coding Conf 
                <br className=" hidden md:inline "/>2025 Starts Here!</h1>
            <p className=" text-2xl font-light text-neutral-400  p-4">Secure your spot at next yaear`s biggest conding conference.</p>
        </header>
    )
}  