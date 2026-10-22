interface InputFieldProps{
    id:string;
    htmlFor:string;
    labelText: string
}


export default function InputField({id, htmlFor, labelText} : InputFieldProps){
    return(
        <>
        <label htmlFor={htmlFor}>{labelText}</label>
        <input id={id}/>
        </>
    )
}