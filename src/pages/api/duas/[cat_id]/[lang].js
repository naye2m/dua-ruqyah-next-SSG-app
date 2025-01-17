const { get_duas_by_cat_id } = require("@/lib/connect");


export default async function handler(req, res) {
    const { cat_id, lang } = req.query;
  const duas = await get_duas_by_cat_id(cat_id, lang);
  res.status(200).json(duas);
  }

