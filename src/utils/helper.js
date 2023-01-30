export const searchFilter = (searchTxt, items) => {
  const filteredData = items.filter((element) =>
    element.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filteredData;
};
