const formatDateAndTime = (dateTime: string): string => {
  const date = new Date(dateTime);

  return `${date.getUTCHours().toString().padStart(2, "0")}:${date
    .getUTCMinutes()
    .toString()
    .padStart(2, "0")}:${date.getUTCSeconds().toString().padStart(2, "0")}`;
};

export { formatDateAndTime };
