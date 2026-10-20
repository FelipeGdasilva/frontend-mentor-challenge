import Image from "next/image";

export default function Form(){
    return(
        <form className=" flex flex-col w-full max-w-md mx-auto">
            <span>Upload Avatar</span>
            <label htmlFor="Avatar"  className=" border-2 border-dashed border-neutral-500  py-8 flex flex-col items-center gap-4 rounded-lg cursor-pointer bg-neutral-500/15">
                <Image src="/assets/images/icon-upload.svg" alt="icon" width={48} height={48} className="border border-neutral-500 rounded-2xl bg-neutral-500/20" />
                <p className="text-center">Drag and drop or click to upload</p>
                <input type="file" className="sr-only" id ="Avatar" />
            </label>
            <label>Full Name</label>
            <input type="text"/>
            <label>Email Address</label>
            <input type="email"/>
            <label>GitHub Username</label>
            <input type="text"/>
            <button type="submit">Generate My Ticket</button>
        </form>
    )
}