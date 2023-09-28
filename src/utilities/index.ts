const isObjectEmpty = (object: { [key: string]: any }): boolean => {
  const values = Object.values(object);
  return values.every(val => val === '' || val === null || val === undefined);
}


export { isObjectEmpty }