const formatDate = (date) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toDateString();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const formatMinutes = () => {
    if (minutes < 10) {
      return `0${newDate.getMinutes()}`;
    } else {
      return newDate.getMinutes();
    }
  };
  const formattedDateHtml = `
  ${formattedDate} - ${hours}:${formatMinutes()}
  `;

  return formattedDateHtml;
};

export default formatDate;
