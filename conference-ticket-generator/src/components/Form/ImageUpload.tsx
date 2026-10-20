import Image from "next/image";

export default function Form(){
    return(
        <form>
            <label>Upload Avatar</label>
            <div className="border-dashed"></div>
            <label>Full Name</label>
            <input></input>
            <label>Email Address</label>
            <input></input>
            <label>GitHub Username</label>
            <input></input>
            <button>Generate My Ticket</button>
        </form>
    )
}