interface FormProps{
    name: string;
    numero: string;
    date: string;
    cvc: string;
}

export default function CardForm(){
    return(
        <form>
            <div>
            <label>cardholder name</label>
            <input></input>
            </div>

            <div>
            <label>card number</label>
            <input></input>
            </div>

            <div>
            <label>Exp.Date</label>
            <input></input>
            </div>
            
            <div>
            <label>cvc</label>
            <input></input>
            </div>
        </form>
    )
}