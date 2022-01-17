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

export function displayDate(value: Date) {
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

export const getUserCode = (pg: string, tierCode?: string, type = 'payment') => {
  if (tierCode) {
    return 'imp91623210';
  }
  if (type === 'certification') {
    return 'imp10391932';
  }

  switch (pg) {
    case 'kakao':
      return 'imp10391932';
    case 'paypal':
      return 'imp09350031';
    case 'mobilians':
      return 'imp60029475';
    case 'naverpay':
      return 'imp41073887';
    case 'smilepay':
      return 'imp49241793';
    case 'chai':
      return 'imp37739582';
    case 'alipay':
      return 'imp87936124';
    case 'payple':
      return 'imp42284830';
    default:
      return 'imp19424728';
  }
};

export function shuffle(array: any) {
  array.sort(() => Math.random() - 0.5);
}
