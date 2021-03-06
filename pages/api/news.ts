// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { getNews } from '../../src/utils/api';
import { NewsPreview } from '../../src/types/api';

interface NewsData {
  results: NewsPreview[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsData>
) {
  const page = req.query.page as string;
  const response = await fetch(getNews(page));

  const {
    response: { results },
  } = await response.json();

  if (results) {
    res.status(200).json({ results });
  } else {
    res.status(400).json({ results: [] });
  }
}
