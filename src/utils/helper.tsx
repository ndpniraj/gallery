export const separateList = <T,>(list: T[], dimension: number) => {
  let newList = list;
  let freeSpace = dimension;
  let finalList: T[][] = [];

  for (let i = 0; i < dimension; i++) {
    finalList.push([]);
  }

  let i = 0;
  while (i < dimension) {
    newList = newList.filter((item, index) => {
      if (index % freeSpace !== 0) return item;
      else finalList[i].push(item);
    });

    freeSpace--;
    i++;
  }

  return finalList;
};
