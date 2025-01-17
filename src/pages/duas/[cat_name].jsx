"use client";
"use strict";

import React, { useEffect, useReducer, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';

import FullBar from '@/components/DuasPage/CategoryBar';
import Page from '@/components/page';
import ScrollDua from '@/components/DuasPage/SubcatDua';

import { getUriParams } from '@/utils/uri';

const fetcher = (url) => fetch(url).then((res) => res.json());

const DuasPage = ({ categoryData, subCategoryData, duasData, language, default_lang }) => {
    const router = useRouter();
    const params = getUriParams(router);

    const { cat_name, cat: cat_param_id, subcat: subcat_param_id, dua: dua_param_id } = {  ...params, ...router.query  };

    const lang = router.locale || default_lang || 'en';

    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!initialized && router.isReady) {
            setInitialized(true);
        }
    }, [router.isReady, initialized]);
    const cat_id = Number(cat_param_id || NaN);

    const { data: fetchedCategoryData, error: categoryError, isLoading: categoryLoading } = useSWR(
        `/api/category/${lang}`, fetcher, { initialData: categoryData }
    );
    useEffect(() => {
        // assign cat id to url by cat name
        if (data.categoryData) {
            let cat_id_by_name = data.categoryData.find((cat) => cat.cat_name === cat_name)?.cat_id
            cat_id_by_name && cat_id_by_name == cat_id || router.replace({
                query: {
                    ...params,
                    ...router.query,
                    cat: cat_id_by_name,
                }
            });
        }
    }, [cat_name]);



    const { data: fetchedSubCategoryData, error: subCategoryError, isLoading: subCategoryLoading } = useSWR(
        cat_id ? `/api/subcategory/${cat_id}/${lang}` : null, fetcher, { initialData: subCategoryData }
    );

    const { data: fetchedDuasData, error: duasError, isLoading: duasLoading } = useSWR(
        cat_id ? `/api/duas/${cat_id}/${lang}` : null, fetcher, { initialData: duasData }
    );

    const data = {
        categoryData: fetchedCategoryData || categoryData,
        subCategoryData: fetchedSubCategoryData || subCategoryData,
        duasData: fetchedDuasData || duasData,
    };

    const $ = selector => document.querySelector(selector);


    /*
    ? scroll to element
    */
    const scrollTop0Parant = (selector) => {
        const elem = $(selector);
        if (!elem)
            return;
        elem.parentElement.scroll({
            top: elem.offsetTop - 70, //for paddings
            left: 100,
            behavior: "smooth",
        });
    }
    useEffect(() => { (!dua_param_id) && subcat_param_id && scrollTop0Parant("#sec_" + subcat_param_id) }, [subcat_param_id, duasLoading])
    useEffect(() => { dua_param_id && scrollTop0Parant("#dua_" + dua_param_id) }, [dua_param_id, duasLoading])
    useEffect(() => { !subcat_param_id && !dua_param_id && cat_param_id && scrollTop0Parant("[id^=sec_]") }, [cat_param_id, duasLoading])



    // if  {
    //     return <LoadingComponent />;
    // }

    if (categoryError || subCategoryError || duasError) {
        return <div>Error occurred while fetching data</div>;
    }

    function Full_page() {
        "use server";
        let cat_obj = data.categoryData.find((_cat) => _cat.cat_id === cat_id || _cat.cat_name === cat_name);
        let subcat_objs = data.subCategoryData
        // let dua_objs = data.duasData.filter(dua => dua.subcat_id == (subcat || 1) && dua.cat_id == cat_id);
        // console.log(cat_obj, subcat_objs, dua_objs);
        return <>

            <Page  >
                <FullBar
                    key={1}
                    category_objs={data.categoryData}
                    AllSubCatObjs={data.subCategoryData || []}
                    All_Duas={data.duasData || []}
                    language={lang}
                />
                {(categoryLoading || subCategoryLoading || duasLoading) ?
                    <div className="w-full sm-max:overflow-y-auto scrl sm-max:pb-20   md-min:h-[calc(100vh-100px)] md:pb-48 md-max:w-[98%] md-max:mx-auto   lg:pb-6 lg:pt-24 lg:col-start-2   xl-min:pb-8 xl:w-full   md:pt-24 sm-max:px-2 delay-1000 transition duration-1000 ease-linear lg-min:w-[102%]   }   col-start-2    ">
                        <LoadingComponent />
                    </div>
                    : <ScrollDua key={"ScrollDua" + cat_id} dua_objs={data.duasData} subcat_objs={subcat_objs} cat_obj={cat_obj} />}
            </Page>
        </>
    }
    return Full_page();

};
export default DuasPage;


import { get_all_cat_names } from '@/lib/connect';
export const getStaticPaths = async () => {
    "use server";
    let all_cats = await get_all_cat_names();
    let categories = [
        ...all_cats.map(cat => ({ cat_name: cat.cat_name_bn, cat: cat.cat_id })),
        ...all_cats.map(cat => ({ cat_name: cat.cat_name_en, cat: cat.cat_id })),
    ];
    return {
        paths: categories.map((category) => ({
            params: {
                cat_name: category.cat_name,
                cat: category.cat || undefined,
            },
        })),
        fallback: false,
    };
};








import * as db from '@/lib/connect';
import LoadingComponent from '@/components/DuasPage/LoadingComponent';
import { useParams, useSearchParams } from 'next/navigation';
export const getStaticProps = async (context) => {
    "use server";
    const { cat_name, cat, subcat, dua } = context.params;
    const default_lang = 'en';
    const language = context.locale || default_lang;

    const categoryData = await db.get_all_catagories(language);
    const subCategoryData = await db.get_subcat_by_cat_id(cat || 1, language);
    const duasData = await db.get_duas_by_cat_id(cat || 1, language);


    let res = {
        props: {
            categoryData,
            subCategoryData,
            duasData,
            language,
            default_lang,
        },
        revalidate: 1,
    };
    return res;
};

