// pages/api/sitemap.js

import { get_all_catagories } from "@/lib/connect";

export default async function handler(req, res) {
    const Site_name = req.headers.host;
    const allCategories = [
        ...await get_all_catagories('en'),
        ...await get_all_catagories('bn'),
    ];

    // Set correct Content-Type for XML response
    res.setHeader('Content-Type', 'application/xml');

    // Generate the sitemap XML structure
    
    function escapeXML(str) {
      return str.replace(/[<>&'"]/g, (char) => ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;'
      })[char]);
    }
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allCategories.map((category) => `
    <url>
      <loc>https://${Site_name}/duas/${encodeURIComponent(escapeXML(category.cat_name))}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;
    // atuch content-type header to application/xml
    res.setHeader('Content-Type', 'application/xml');
    // send the sitemap XML structure
    res.status(200).send(sitemap);
}
