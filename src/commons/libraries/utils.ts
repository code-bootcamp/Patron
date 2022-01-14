export function displayedAt(value: string) {
  const today = new Date();
  const timeValue = new Date(value);
  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금 전';
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }
  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }
  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일 전`;
  }
  return `${Math.floor(betweenTimeDay / 365)}년 전`;
}

export function displayDate(value: string) {
  const getDate = new Date(value);
  const month = getDate.getMonth() + 1;
  const date = getDate.getDate();
  return `${month}.${date}`;
}

export function displayDDay(start: Date, end: Date) {
  const endDate = new Date(end);

  const startDate = new Date(start);

  const distance = endDate.getTime() - startDate.getTime();

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  return days;
}
