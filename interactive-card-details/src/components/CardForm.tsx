"use client";

interface CardFormProps {
  setName:  React.Dispatch<React.SetStateAction<string>>
  name:string,
  setNumber: React.Dispatch<React.SetStateAction<string>>
  number:string,
  setMonth: React.Dispatch<React.SetStateAction<string>>
  month: string,
  setYear: React.Dispatch<React.SetStateAction<string>>
  year: string,
  setCvc: React.Dispatch<React.SetStateAction<string>> 
  cvc: string,
   handleSubmit : (e: React.SubmitEvent) => void;
}

export default function CardForm( {setName, setNumber, setMonth,setYear, setCvc, handleSubmit, name, number, month, year,cvc}: CardFormProps) {
  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex flex-col justify-center gap-5 w-full max-w-sm overflow-x-hidden">
      <div className="flex flex-col">
        <label className="py-2 text-base font-semibold text-purple-950">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          className="border border-purple-950 rounded-lg py-2  pl-4"
          placeholder="e.g. Jane Appleseed "
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>

      <div className="flex flex-col">
        <label className="py-2 text-base font-semibold text-purple-950">
          CARD NUMBER
        </label>
        <input
          type="text"
          className="border border-purple-950 rounded-lg py-2  pl-4 "
          placeholder="e.g. 1234 5678 9123 0000"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </div>

      <div className="flex justify-between gap-4">
        <div className="flex flex-col">
          <label className="py-2 text-base font-semibold text-purple-950 ">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              className="border border-purple-950 rounded-lg py-2 px-3 w-16 pl-3 "
              placeholder="MM"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />

            <input
              type="text"
              className="border border-purple-950 rounded-lg px-3 py-2 w-16 pl-3 "
              placeholder="YY"
              value={year}
              onChange={(e)=> setYear(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col ">
          <label className="py-2 text-base font-semibold text-purple-950">
            CVC
          </label>
          <input
            type="text"
            className="border border-purple-950 rounded-lg py-2  w-full  pl-3 "
            placeholder="e.g. 123"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          ></input>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-950 py-3 rounded-lg text-white font-medium hover:bg-gray-400 "
      >
        Confirm
      </button>
    </form>
  );
}
