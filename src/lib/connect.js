"use server";



const { realpath } = require("fs");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();





let bn = "bn";
let en = "en";
let default_lang = en;
function checklang(lang) {
    if (lang == bn) return bn;
    return en;
}



const dbPath = path.join(process.cwd(), "src/lib/dua_main.sqlite");



let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(err.message);
    }
    else {
        console.log("Connected to the database.");
    }
});

const connect = () => {
    return db;
}

export default connect;

export async function run_query(query, params = []) {
    return new Promise((resolve, reject) => {
        const dbInstance = connect();
        dbInstance.all(query, params, function (err, rows) {
            if (err) {
                console.error(err.message);
                console.error(err.trace);
            } else {
                resolve(rows);
            }
        });
    });
}



export async function get_all_catagories(lang = default_lang) {
    lang = checklang(lang);

    let query = `SELECT id, cat_id, cat_name_${lang}, no_of_subcat, no_of_dua, cat_icon FROM category`;
    let res = await run_query(query);
    return res.map(row => {
        return {
            id: row["id"],
            cat_id: row["cat_id"],
            cat_name: row["cat_name_" + lang],
            no_of_subcat: row["no_of_subcat"],
            no_of_dua: row["no_of_dua"],
            cat_icon: row["cat_icon"]
        };
    });
}

export async function get_all_subcategories(lang = default_lang) {
    lang = checklang(lang);
    let query = `SELECT id, cat_id, subcat_id, subcat_name_${lang}, no_of_dua FROM sub_category`;
    let res = await run_query(query);
    return res.map(row => {
        return {
            id: row["id"],
            cat_id: row["cat_id"],
            subcat_id: row["subcat_id"],
            subcat_name: row["subcat_name_" + lang],
            no_of_dua: row["no_of_dua"]
        };
    });
}

export async function get_all_duas(lang = default_lang) {
    lang = checklang(lang);
    let query = "SELECT id, cat_id, subcat_id, dua_id, dua_name_${lang} as dua_name, top_${lang} as top, dua_arabic, dua_indopak, clean_arabic, transliteration_${lang} as transliteration, translation_${lang} as translation, bottom_${lang} as bottom, refference_${lang} as refference, audio FROM dua";
    let res = await run_query(query);
    return res.map(row => {
        return {
            id: row["id"],
            cat_id: row["cat_id"],
            subcat_id: row["subcat_id"],
            dua_id: row["dua_id"],
            dua_name: row["dua_name"],
            top: row["top"],
            dua_arabic: row["dua_arabic"],
            dua_indopak: row["dua_indopak"],
            clean_arabic: row["clean_arabic"],
            transliteration: row["transliteration"],
            translation: row["translation"],
            bottom: row["bottom"],
            refference: row["refference"],
            audio: row["audio"]
        };
    });
}

export async function get_dua_by_name(dua_name, lang = default_lang) {
    lang = checklang(lang);
    let query = `
    SELECT id, cat_id, subcat_id, dua_id, dua_name_${lang} as dua_name, top_${lang} as top, dua_arabic, dua_indopak, clean_arabic, transliteration_${lang} as transliteration, translation_${lang} as translation, bottom_${lang} as bottom, refference_${lang} as refference, audio FROM dua WHERE dua_name_${lang} LIKE ?`;

    let res = await run_query(query, [`%${dua_name}%`]);

    return res.map(row => {
        return {
            id: row["id"],
            cat_id: row["cat_id"],
            subcat_id: row["subcat_id"],
            dua_id: row["dua_id"],
            dua_name: row["dua_name"],
            top: row["top"],
            dua_arabic: row["dua_arabic"],
            dua_indopak: row["dua_indopak"],
            clean_arabic: row["clean_arabic"],
            transliteration: row["transliteration"],
            translation: row["translation"],
            bottom: row["bottom"],
            refference: row["refference"],
            audio: row["audio"]
        };
    })
}

export async function get_duas_by_cat_id(cat_id = 1, lang = default_lang) {
    lang = checklang(lang);
    let query = `
    SELECT id, cat_id, subcat_id, dua_id, dua_name_${lang} as dua_name, top_${lang} as top, dua_arabic, dua_indopak, clean_arabic, transliteration_${lang} as transliteration, translation_${lang} as translation, bottom_${lang} as bottom, refference_${lang} as refference, audio FROM dua WHERE cat_id = ?`;
    let res = await run_query(query, [cat_id]);
    return res.map(row => {
        return {
            id: row["id"],
            cat_id: row["cat_id"],
            subcat_id: row["subcat_id"],
            dua_id: row["dua_id"],
            dua_name: row["dua_name"],
            top: row["top"],
            dua_arabic: row["dua_arabic"],
            dua_indopak: row["dua_indopak"],
            clean_arabic: row["clean_arabic"],
            transliteration: row["transliteration"],
            translation: row["translation"],
            bottom: row["bottom"],
            refference: row["refference"],
            audio: row["audio"]
        };
    })
}

export const get_subcat_by_cat_id = async (cat_id, lang = default_lang) => {
    lang = checklang(lang);
    let query = `
    SELECT id, cat_id, subcat_id, subcat_name_${lang} as subcat_name, no_of_dua FROM sub_category WHERE cat_id = ?`;
    let res = await run_query(query, [cat_id]);
    return res.map(row => {
        return {
            id: row["id"],
            cat_id: row["cat_id"],
            subcat_id: row["subcat_id"],
            subcat_name: row["subcat_name"],
            no_of_dua: row["no_of_dua"]
        };
    })
}

export const get_all_cat_names = async () => {
    return await run_query(`SELECT cat_id, cat_name_en, cat_name_bn FROM category`);
}
