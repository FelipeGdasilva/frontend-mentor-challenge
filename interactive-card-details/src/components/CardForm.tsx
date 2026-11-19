interface FormProps{
    name: string;
    numero: string;
    date: string;
    cvc: string;
}

export default function CardForm(){
    return(
        <form className="min-h-screen flex flex-col justify-center gap-5 w-full max-w-sm">
            <div className ="flex flex-col">
            <label className = "py-2 text-base font-semibold text-purple-950">cardholder name</label>
            <input type="text" className = "border border-purple-950 rounded-lg py-2  pl-1" placeholder = "e.g. Jane Appleseed "></input>
            </div>

            <div className = "flex flex-col">
            <label className = "py-2 text-base font-semibold text-purple-950" >card number</label>
            <input type="text" className = "border border-purple-950 rounded-lg py-2  pl-1 " placeholder ="e.g. 1234 5678 9123 0000"></input>
            </div>

            <div className = "flex justify-between gap-4">

            <div className = "flex flex-col">
           
            <label className = "py-2 text-base font-semibold text-purple-950 ">Exp.  Date (MM/YY)</label>
            <div className = "flex gap-2">
            <input type="text" className = "border border-purple-950 rounded-lg py-2 px-3 w-16 pl-1 " placeholder ="MM"/>
           
            <input type = "text"  className = "border border-purple-950 rounded-lg px-3 py-2 w-16 pl-1 " placeholder = "YY"/>
            </div>
            </div>

            <div className = "flex flex-col ">
            <label className = "py-2 text-base font-semibold text-purple-950">cvc</label>
            <input type="text" className = "border border-purple-950 rounded-lg py-2 px-5 w-full  pl-1 " placeholder = "e.g. 123"></input>
            </div>

            </div>

            <button type="button" className="w-full bg-purple-950 py-3 rounded-lg text-white font-medium hover:bg-gray-400 ">confirm</button>
        </form>
        
    )
}