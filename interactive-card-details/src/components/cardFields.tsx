export type CardFieldValues = {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
};

export function createCardFields(values: CardFieldValues) {
  return [
    {
      key: "name" as const,
      value: values.name,
      message: "Can't be blank",
      numericOnly: false,
    },
    {
      key: "number" as const,
      value: values.number,
      message: "Can't be blank",
      numericOnly: true,
    },
    {
      key: "month" as const,
      value: values.month,
      message: "Can't be blank",
      numericOnly: true,
    },
    {
      key: "year" as const,
      value: values.year,
      message: "Can't be blank",
      numericOnly: true,
    },
    {
      key: "cvc" as const,
      value: values.cvc,
      message: "Can't be blank",
      numericOnly: true,
    },
  ];
}
