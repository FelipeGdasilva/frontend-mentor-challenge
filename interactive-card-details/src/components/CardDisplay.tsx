import Image from "next/image";

export default function CardDisplay(){
    return(
        <section className=" relative w-full h-60 md:w-96 md:h-screen">
            <Image src="/images/bg-main-mobile.png" 
            alt="fundo mobile" 
            fill
            className = "object-cover md:hidden"
            />

            <Image 
            src = "/images/bg-main-desktop.png"
            alt ="fundo desktop"
            fill
            className ="hidden object-cover md:block"/>
        </section>
    )
}