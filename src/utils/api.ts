export const getNews = (page: number): string =>
  `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail%2CtrailText%2Cbody&page=${page}&page-size=10&q=esports&show-blocks=main&api-key=test`;

export const getNewsSlug = (newsId: string) => newsId.split('/').pop();
