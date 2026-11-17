import Image from "next/image";

export default function CardDisplay(){
    return(
        <section className=" relative w-96 h-screen">
            <Image src="/images/bg-main-desktop.png" 
            alt="coluna" 
            fill/>
        </section>
    )
}