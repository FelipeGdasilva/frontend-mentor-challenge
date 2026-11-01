import InputField from "./InputField";
import ImageUpload from "./ImageUpload";

interface TicketFormProps {
  nome: string;
  setNome: (valor: string) => void;
  email: string;
  setEmail: (valor: string) => void;
  github: string;
  setGithub: (valor: string) => void;
  avatar: string;
  setAvatar: (valor: string) => void;
  geraticket: (e: React.SubmitEvent) => void;
}

export default function TicketForm({
  nome,
  setNome,
  email,
  setEmail,
  github,
  setGithub,
  avatar,
  setAvatar,
  geraticket,
}: TicketFormProps) {
  return (
    <form
      onSubmit={geraticket}
      className="flex flex-col gap-y-4 w-full max-w-md"
    >
      
      <ImageUpload avatar={avatar} setAvatar={setAvatar} />

      
      <InputField
        htmlFor="nome"
        id="nome"
        labelText="Full Name"
        placeholder="Jonatan Kristof"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      
      <InputField
        htmlFor="email"
        id="email"
        labelText="Email Address"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

    
      <InputField
        htmlFor="github"
        id="github"
        labelText="GitHub Username"
        placeholder="@yourusername"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-neutral-900 font-bold py-3 rounded-lg transition-colors mt-2"
      >
        Generate My Ticket
      </button>
    </form>
  );
}
