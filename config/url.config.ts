export const getNewsUrl = (apiKey: string, page: number) =>
  `https://newsapi.org/v2/everything?q=usdc&apiKey=${apiKey}&page=${page}&pageSize=30&sortBy=publishedAt`
