import InputField from "./InputField";
import ImageUpload from "./ImageUpload";

interface TicketFormProps {
  nome: string;
  setNome: (valor: string) => void;
  github: string;
  setGithub: (valor: string) => void;
  avatar: string;
  setAvatar: (valor: string) => void;
  geraticket: (e: React.SubmitEvent) => void;
}


export default function TicketForm({
  nome,
  setNome,
  github,
  setGithub,
  avatar,
  setAvatar,
  geraticket
}: TicketFormProps) {
  return (
    <form onSubmit={geraticket} className="flex flex-col w-full max-w-md mx-auto py-8">
      <ImageUpload  avatar={avatar} setAvatar={setAvatar}/>
      
      <InputField 
        htmlFor="name" 
        id="name" 
        labelText="Full Name" 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      
      <InputField 
        htmlFor="github" 
        id="github" 
        labelText="Github Username" 
        placeholder="@yourusername" 
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />

      <button 
        type="submit" 
        className="rounded-lg h-14 text-neutral-800 font-extrabold text-2xl mt-6 bg-orange-500"
      >
        Generate My Ticket
      </button>
    </form>
  );
}