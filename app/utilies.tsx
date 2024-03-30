export const matchId = (url: string) => {
  const reuslt =url.match(/\d/gi)?.join('');

  return reuslt;
}