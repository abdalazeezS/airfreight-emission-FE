import { ITrip } from "../types";

const isObjectEmpty = (object: { [key: string]: any }): boolean => {
  const values = Object.values(object);
  return values.every(val => val === '' || val === null || val === undefined);
}

const sortArray = (arr: Array<any>, field: string, type: string) => {
  return arr.sort((a: ITrip, b: ITrip) => {
    const valueA = a[field as keyof ITrip] as string;
    const valueB = b[field as keyof ITrip] as string;

    if (field === 'date') {
      const dateA = new Date(valueA.split('/').reverse().join('-')).getTime();
      const dateB = new Date(valueB.split('/').reverse().join('-')).getTime();

      return type === 'AZ' ? dateA - dateB : dateB - dateA;
    }

    return type === 'AZ'
      ? valueA.localeCompare(valueB, undefined, { sensitivity: 'base' })
      : valueB.localeCompare(valueA, undefined, { sensitivity: 'base' });
  })

}
export { isObjectEmpty, sortArray }