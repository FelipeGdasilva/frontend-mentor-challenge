import CardDisplay from "../components/CardDisplay";
import CardForm from "../components/CardForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:flex-row items-center">
      <CardDisplay />
      <div className="flex md:flex-1 w-full px-6 justify-center">
        <CardForm />
      </div>
    </div>
  );
}
