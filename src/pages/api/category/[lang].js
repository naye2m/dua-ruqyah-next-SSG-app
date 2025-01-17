import {get_all_catagories} from '@/lib/connect';

export default async function handler(req, res) {
  const lang = req.query.lang;
  const categories = await get_all_catagories(lang);
  res.status(200).json(categories);
}