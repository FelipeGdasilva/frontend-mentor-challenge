import InputField from "./InputField";
import ImageUpload from "./ImageUpload";

export default function TicketForm(){
    return(
        <form className=" flex flex-col w-full max-w-md mx-auto py-8">
            <ImageUpload/>
            <InputField  htmlFor="name" id="name" labelText="Full Name"/>
            <InputField  htmlFor="email" id="email" labelText="Email Address" placeholder="example@email.com" />
            <InputField  htmlFor="github" labelText="Github Username" placeholder="@yourusername" id="github"/>
            <button type="submit" className=" rounded-lg h-14 text-neutral-800 font-extrabold text-2xl mt-6 bg-orange-500 ">Generate My Ticket</button> 
        </form>
    )
}