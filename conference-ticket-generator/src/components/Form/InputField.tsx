interface InputFieldProps{
    id:string;
    htmlFor:string;
    labelText: string;
    placeholder?: string
}


export default function InputField({id, htmlFor, labelText, placeholder} : InputFieldProps){
    return(
        <div className="flex flex-col">
        <label className="py-2"  htmlFor={htmlFor}>{labelText}</label>
        <input className="border border-neutral-500 rounded-lg py-3 px-3 bg-neutral-500/15" id={id} placeholder={placeholder}/>
        </div>
    )
}