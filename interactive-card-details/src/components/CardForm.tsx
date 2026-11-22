interface FormProps {
  name: string;
  numero: string;
  date: string;
  cvc: string;
}

export default function CardForm() {
  return (
    <form className="min-h-screen flex flex-col justify-center gap-5 w-full max-w-sm overflow-x-hidden">
      <div className="flex flex-col">
        <label className="py-2 text-base font-semibold text-purple-950">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          className="border border-purple-950 rounded-lg py-2  pl-4"
          placeholder="e.g. Jane Appleseed "
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
            />

            <input
              type="text"
              className="border border-purple-950 rounded-lg px-3 py-2 w-16 pl-3 "
              placeholder="YY"
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
          ></input>
        </div>
      </div>

      <button
        type="button"
        className="w-full bg-purple-950 py-3 rounded-lg text-white font-medium hover:bg-gray-400 "
      >
        Confirm
      </button>
    </form>
  );
}
