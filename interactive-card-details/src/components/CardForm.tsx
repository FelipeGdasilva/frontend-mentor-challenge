interface FormProps{
    name: string;
    numero: string;
    date: string;
    cvc: string;
}

export default function CardForm(){
    return(

        <form className="min-h-screen flex flex-col justify-center items-center">
            <div>
            <label>cardholder name</label>
            <input type="text"></input>
            </div>

            <div>
            <label>card number</label>
            <input type="text"></input>
            </div>

            <div>
            <label>Exp.Date</label>
            <input type="text"></input>
            </div>
            
            <div>
            <label>cvc</label>
            <input type="text"></input>
            </div>
            <button type="button" className="w-full bg-purple-950 py-3 rounded-lg text-white font-medium hover:bg-gray-400 ">confirm</button>
        </form>
    )
}