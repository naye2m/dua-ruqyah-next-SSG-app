import { get_subcat_by_cat_id } from '@/lib/connect';

export default async function handler(req, res) {
    
    const { cat_id, lang } = req.query;

    const subcat = await get_subcat_by_cat_id(cat_id, lang);

    if (subcat) {
        res.status(200).json(subcat);
    } else {
        res.status(404).json({ message: 'Subcategory not found' });
    }
}