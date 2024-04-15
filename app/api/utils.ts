export const matchId = (url: string) => {
  const reuslt =url.match(/\d/gi)?.join('');

  return reuslt;
}

export const getUrlId = (url: string) => {

  return new URL(url).searchParams.get('page') || '1';
}
