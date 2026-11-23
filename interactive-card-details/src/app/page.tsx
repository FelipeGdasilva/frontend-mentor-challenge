import CardDisplay from "../components/CardDisplay";
import CardForm from "../components/CardForm";
import ThankYou from "../components/ThankYouState";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:flex-row items-center">
      <CardDisplay />
      <ThankYou />
      <div className="flex md:flex-1 w-full px-6 justify-center">
        <CardForm />
      </div>
    </div>
  );
}
