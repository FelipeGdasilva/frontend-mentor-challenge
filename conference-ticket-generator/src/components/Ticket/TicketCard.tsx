import Image from "next/image";

export default function TicketCard(){
    return(
        <main>
            <Image src = "/assets/images/pattern-ticket.svg" alt="card" width={48} height={48} />
            <div>
             <Image src= "/assets/images/logo-full.svg" alt="logo" width={20} height={20} />
             <p>Jan 31, 2025 / Austin, TX</p>
             <div>
            <Image src= "/assets/images/image-avatar.jpg" width={10} height={10} alt="avatar" />
            <ul>
            <li>nome</li>
            <li>github</li>
            </ul> 
            </div>
            <div>
                <ul>
                    <li>numero</li>
                </ul>
            </div>
           </div>
        </main>
    )
}