import CardDisplay from "../components/CardDisplay";
import CardForm from "../components/CardForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row items-center" >
      <CardDisplay/>
      <CardForm/>
    </div>
  );
}
