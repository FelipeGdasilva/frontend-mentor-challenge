import Image from "next/image";

export default function TicketCard(){
    return(
        <main className="relative w-full flex flex-col items-center justify-center min-h-screen">
            <Image src = "/assets/images/pattern-ticket.svg" alt="card" width={400} height={300} className="absolute -z-10 " />
            <div className="flex flex-col w-93 justify-between">
                <Image src = "/assets/images/logo-full.svg" alt="logo" width={210} height={100} />
                <p className="my-3 font-inconsolata text-sm">Jan 31, 2025 / Austin, TX</p>
                
                
                <div className="flex flex-row justify-between items-center w-full">
                    
                
                    <div className="flex items-center gap-x-3">
                        <Image src = "/assets/images/image-avatar.jpg" width={60} height={400} alt="avatar" className="rounded-2xl" />
                        <ul className="flex flex-col">
                            <li className="text-2xl font-inconsolata">nome</li>  
                        <li className=" flex items-center gap-x-1.5">
                            
                        <Image src= "/assets/images/icon-github.svg" alt="icon-github" width={15} height={15} />
                           <samp className="text-xs font-inconsolata">
                            github
                            </samp> 
                            
                            </li>
                            
                        </ul>
                    </div>

                    <div className=" flex items-center justify-center rotate-90 -translate-y-8">
                        <ul>
                            <li className="text-sm tracking-wider">1995</li>
                        </ul>
                    </div>

                </div>

            </div>
        </main>
    )
}