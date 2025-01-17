import DuaComponent from './DuaComponent';
import LoadingComponent from './LoadingComponent';

function TopBarOnSm({cat_obj}){
    return <div>
  <div className="bg-[#ebeef2] dark:bg-[#122337] z-[2] w-full flex-row py-5 items-center justify-between hidden sm-max:flex">
    <div className="flex flex-row items-center">
      <img
        src="https://duaruqyah.com/assets/mobile/home/back.svg"
        className="h-4 cursor-pointer"
        alt=""
      />
      <p className=" text-title text-lg ml-4 text-center dark:text-dark-text">
        Duas Page
      </p>
    </div>
    <a href="/settings">
      <img
        src="https://duaruqyah.com/assets/tab/home/settings.svg"
        className="cursor-pointer "
        alt=""
      />
    </a>
  </div>
  <div className="flex flex-row justify-between mb-5 px-5 py-4 bg-white rounded-2lg items-center cursor-pointer dark:bg-dark-bg lg:hidden">
    <p className="flex gap-x-2 style-Kalpurush text-title font-medium leading-[25px]  dark:text-dark-text text-mss ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {cat_obj.cat_name}
    </p>
  </div>
</div>

}

function Section({section_obj, dua_objs}){
  return(<>
    <div
        id={"sec_"+section_obj.subcat_id}
        className="flex undefined mb-5 flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center dark:bg-dark-bg"
      >
        <p className="text-title font-medium leading-[25px] dark:text-dark-text text-mss style-Kalpurush ">
          <span className="text-primary  font-medium leading-[25px] text-mss style-Kalpurush">
            Section :&nbsp;
          </span>
          {section_obj.subcat_name}
        </p>
      </div>
      {dua_objs ? dua_objs.sort((a,b)=> a.id-b.id ).map((dua) => <DuaComponent key={"dua_comp_"+dua.id}  dua_obj={dua} />) : <LoadingComponent/> }
    </>
  )
}

export default function ScrollDua({dua_objs, subcat_objs, cat_obj}) {
    

  // useEffect(
  //   () => {
      // console.log(dua_objs);  
  //   }, dua_objs)

    return <>
    <div
  id="scrollDua"
  className=" w-full overflow-y-auto sm-max:pb-20 md-max:mt-[80px] xl:p-0 md-min:h-[calc(100vh-100px)] md:pb-48 md-max:w-[98%] md-max:mx-auto lg:pb-6 lg:pt-24 lg:col-start-2 xl-min:pb-8 xl:w-full md:pt-24 sm-max:px-2 delay-1000 transition duration-1000 ease-linear lg-min:w-[102%] } col-start-2 
  "
>
    <TopBarOnSm cat_obj={cat_obj} />
  {
    subcat_objs.map((subcat_obj, index) => {
      return <Section key={'Section_'+index}  section_obj={subcat_obj} dua_objs={dua_objs.filter(dua=>dua.subcat_id == subcat_obj.subcat_id)} />
    })
  }

</div>

    </>

}