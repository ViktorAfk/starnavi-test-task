// TThis function helps to get a page from the URL address
export const getUrlId = (url: string) => {

  return new URL(url).searchParams.get('page') || '1';
}
