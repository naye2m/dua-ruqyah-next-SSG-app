import CatBar from "@/components/DuasPage/CategoryBar";
import LoadingComponent from "@/components/DuasPage/LoadingComponent";
import Page from "@/components/page";
import useSWR from "swr";
import React from "react";


export default function Home({ categoryData, subCategoryData, duasData }) {



  let lang = "en";
  React.useEffect(() => {
    lang = document.documentElement.lang;
  }, []);


  const cat_id = 1; // opened category tab id
  const fetcher = (url) => fetch(url).then((res) => res.json());


  const { data: fetchedCategoryData, error: categoryError, isLoading: categoryLoading } = useSWR(
    `/api/category/${lang}`, fetcher, { initialData: categoryData }
  );

  const { data: fetchedSubCategoryData, error: subCategoryError, isLoading: subCategoryLoading } = useSWR(
    cat_id ? `/api/subcategory/${cat_id}/${lang}` : null, fetcher, { initialData: subCategoryData }
  );

  const { data: fetchedDuasData, error: duasError, isLoading: duasLoading } = useSWR(
    cat_id ? `/api/duas/${cat_id}/${lang}` : null, fetcher, { initialData: duasData }
  );



  return (<>
    <Page >
      { !(categoryLoading || subCategoryLoading || duasLoading) ? <CatBar AllSubCatObjs={fetchedSubCategoryData} All_Duas={fetchedDuasData} category_objs={fetchedCategoryData} /> : <LoadingComponent /> }
      <div className="w-full sm-max:overflow-y-auto scrl sm-max:pb-20   md-min:h-[calc(100vh-100px)] md:pb-48 md-max:w-[98%] md-max:mx-auto   lg:pb-6 lg:pt-24 lg:col-start-2 xl-min:pb-8 xl:w-full   md:pt-24 sm-max:px-2 delay-1000 transition duration-1000 ease-linear lg-min:w-[102%]   }   col-start-2    ">
        <div className="grid grid-cols-1 sm-max:grid-cols-2 md-max:grid-cols-3 gap-4 md-max:gap-8"> <Not_Found_404 /></div>
      </div>

    </Page>
  </>
  )
}


function Not_Found_404() {
  return <>
    <div
      style={{
        fontFamily:
          'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxHeight: "200px",
      }}
    >
      <div style={{ }}>
        <h2
        style={{
          fontSize: 36,
          fontWeight: 500,
          margin: "0 0 10px 0",
          textAlign: "center",
        }}
        >
          Subhan Allah
          </h2>
          <div className="pt-2">

        <h1
          style={{
            display: "inline-block",
            margin: "0 20px 0 0",
            paddingRight: 23,
            fontSize: 24,
            fontWeight: 500,
            borderRight: "1px solid",

          }}
          className="dark:text-white border-[black] dark:border-[white]"
        >
          404
        </h1>
        <div style={{ display: "inline-block" }}>
          <h2 style={{ fontSize: 14, fontWeight: 400, }}>
          Page Not Found{/* */}.
          </h2>
            </div>
      </div>
    </div>
  </div>
</>
}





import * as db from '@/lib/connect';
export const getStaticProps = async (context) => {
  "use server";
  const categoryData = [...await db.get_all_catagories('en'), ...await db.get_all_catagories('bn')];
  const subCategoryData = [... await db.get_subcat_by_cat_id(1, 'en'), ... await db.get_subcat_by_cat_id(1, 'bn')]
  const duasData = [... await db.get_duas_by_cat_id(1, 'en'), ... await db.get_duas_by_cat_id(1, 'bn')]




  let res = {
    props: {
      categoryData,
      subCategoryData,
      duasData,
    },
    revalidate: 1,
  };
  return res;
};

