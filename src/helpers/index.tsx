export const meses = [
  {
    mes: "janeiro",
    id: '01',
  },
  {
    mes: "fevereiro",
    id: '02',
  },
  {
    mes: "março",
    id: '03',
  },
  {
    mes: "abril",
    id: '04',
  },
  {
    mes: "maio",
    id: '05',
  },
  {
    mes: "junho",
    id: '06',
  },
  {
    mes: "julho",
    id: '07',
  },
  {
    mes: "agosto",
    id: '08',
  },
  {
    mes: "setembro",
    id: '09',
  },
  {
    mes: "outubro",
    id: '10',
  },
  {
    mes: "novembro",
    id: '11',
  },
  {
    mes: "dezembro",
    id: '12',
  },
];

export const anos = [
  {
    ano: "2020",
    id: '01',
  },
  {
    ano: "2021",
    id: '02',
  },
];

export function formatNumbers(num: any) {
  const type = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return type.format(num);
}
