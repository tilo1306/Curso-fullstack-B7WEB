/* eslint-disable @typescript-eslint/no-use-before-define */
import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];
  const [year, month] = date.split("-");

  list.forEach((element) => {
    if (
      element.date.getFullYear() === parseInt(year, 10) &&
      element.date.getMonth() + 1 === parseInt(month, 10)
    ) {
      newList.push(element);
    }
  });

  return newList;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};
const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const formatCurrentMonth = (currentMonth: string): string => {
  const [year, month] = currentMonth.split("-");
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month, 10) - 1]} de ${year}`;
};
