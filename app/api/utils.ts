export const getUrlId = (url: string) => {

  return new URL(url).searchParams.get('page') || '1';
}
