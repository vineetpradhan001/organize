export const changeDateFormat = (date) => {
  if (date) {
    return `${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(
      date
    ).getFullYear()}`;
  }
  return null;
};
