import { NextApiRequest, NextApiResponse } from 'next';
import { getScreenshot } from './_lib/chromium';

const isDev = !process.env.AWS_REGION;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const id = String(req.query.id);

    if (!id) {
      return res.status(400).send({ error: 'Bad Request' });
    }

    const url = `https://quote-image-generator.vercel.app/html/${id}`;

    const file = await getScreenshot(url, isDev);

    res.setHeader('Content-Type', 'image/png');
    res.setHeader(
      'Cache-Control',
      'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    );

    return res.end(file);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: 'Internal server error' });
  }
}
