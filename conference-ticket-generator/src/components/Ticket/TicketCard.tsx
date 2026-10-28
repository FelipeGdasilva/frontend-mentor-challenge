import Image from "next/image";

export default function TicketCard(){
    return(
        <main className="relative w-full flex flex-col items-center justify-center min-h-screen overflow-hidden">
            
            
            <div className="relative flex flex-col items-center justify-center scale-75 sm:scale-90 md:scale-100 transition-transform">
                
                
                <Image 
                    src="/assets/images/pattern-ticket.svg" 
                    alt="card" 
                    width={500} 
                    height={300} 
                    className="absolute -z-10 w-full h-full object-contain" 
                />


                <div className="flex flex-col w-125 p-8 justify-between gap-y-13">
                    
                    <div className="flex flex-col items-start gap-y-1">
                        <Image src="/assets/images/logo-full.svg" alt="logo" width={195} height={100} />
                        <p className="font-inconsolata text-neutral-400 text-sm ml-8 p-2">Jan 31, 2025 / Austin, TX</p>
                    </div>
                    
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex items-center gap-x-3">
                            <Image src="/assets/images/image-avatar.jpg" width={70} height={90} alt="avatar" className="rounded-2xl" />
                            <ul className="flex flex-col">
                                <li className="text-2xl text-neutral-0 font-inconsolata">Felipe</li>  
                                <li className="flex items-center gap-x-1.5">
                                    <Image src="/assets/images/icon-github.svg" alt="icon-github" width={15} height={15} />
                                    <samp className="text-xs text-neutral-400 font-inconsolata">
                                        github
                                    </samp> 
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-center rotate-90 -translate-y-15">
                            <ul>
                                <li className="text-2xl text-neutral-300 font-inconsolata tracking-wider">1995</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}