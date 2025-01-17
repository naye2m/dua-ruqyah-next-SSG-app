"use server";
import Head from 'next/head';

const Page = ({children}) => (
    <>
        <div
          className="light font-inter style-en false z-0 lg:fixed lg:inset-x-0 xl:fixed xl:inset-x-0 xl:p-6 xl:pb-0 2xl:px-10 2xl:pt-6 2xl:fixed 2xl:inset-x-0 3xl:p-10 3xl:pb-0 3xl:fixed 3xl:inset-x-0"
        >
          <div className="fixed inset-0 grid gap-6 sm-max:overflow-auto xs:flex xs:flex-col xs:gap-0 sm:gap-0 xl:grid-rows-[80px,1fr] 2xl:grid-rows-[46px,1fr] 3xl:grid-rows-[46px,1fr] z-0 xl:grid-cols-[105px,350px,1fr] 2xl:grid-cols-[105px,350px,1fr,270px] 3xl:grid-cols-[105px,350px,1fr,300px]">
            <div className="row-span-full hidden xl:block xl:z-[-1] 2xl:block 2xl:z-[-1] 3xl:block 3xl:z-[-16]">
              <div
                id="left-bar"
                className="w-[100px] flex flex-col gap-y-5 fixed overflow-hidden"
              >
                <div className="bg-white rounded-3xl px-4 dark:bg-dark-bg lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh] scrl-left pb-16">
                  <div className="pt-7 mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24 container">
                    <a href="/">
                      <img
                        src="https://duaruqyah.com/assets/dua-logo.svg"
                        alt="dua-logo"
                        className="h-13 w-16 mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
                      />
                    </a>
                  </div>
                  <a href="/">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <img src="https://duaruqyah.com/assets/nav/home.svg" alt="/" />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium " />
                      </div>
                    </div>
                  </a>
                  <a href="/alldua">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <img src="https://duaruqyah.com/assets/nav/alldua.svg" alt="/alldua" />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium " />
                      </div>
                    </div>
                  </a>
                  <a href="/memorize">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <img src="https://duaruqyah.com/assets/nav/memorize.svg" alt="/memorize" />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium " />
                      </div>
                    </div>
                  </a>
                  <a href="/bookmark">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <img src="https://duaruqyah.com/assets/nav/bookmark.svg" alt="/bookmark" />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium " />
                      </div>
                    </div>
                  </a>
                  <a href="/ruqyah">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <img src="https://duaruqyah.com/assets/nav/ruqyah.svg" alt="/ruqyah" />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium " />
                      </div>
                    </div>
                  </a>
                  <a href="/dua-info">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <img src="https://duaruqyah.com/assets/nav/dua-info.svg" alt="/dua-info" />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium " />
                      </div>
                    </div>
                  </a>
                  <a href="/books">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <img src="https://duaruqyah.com/assets/nav/books.svg" alt="/books" />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium " />
                      </div>
                    </div>
                  </a>
                  <div>
                    <div className="pt-6 xl:pt-16 2xl:pt-16 3xl:pt-24 pb-2 text-center">
                      <a href="/support">
                        <button className="w-13 h-13 bg-primary drop-shadow-primary rounded-lg lg:mr-4 text-white text-sm">
                          <div className="flex justify-center items-center">
                            <p className="hidden">I Want To Support</p>{" "}
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.2577 7.39C19.7087 6.925 19.9877 6.282 19.9877 5.572C19.9877 4.862 19.7087 4.219 19.2577 3.754C19.0296 3.51598 18.7558 3.3265 18.4527 3.19693C18.1496 3.06736 17.8234 3.00038 17.4937 3C17.4937 3 16.2497 2.997 14.9997 4.286C13.7497 2.997 12.5057 3 12.5057 3C12.1762 3.00042 11.8501 3.06732 11.547 3.19671C11.2439 3.32609 10.97 3.5153 10.7417 3.753C10.2907 4.219 10.0117 4.861 10.0117 5.571C10.0117 6.281 10.2907 6.925 10.7417 7.389L13.5305 10.409C14.3224 11.2665 15.6772 11.2666 16.4691 10.4092L19.2577 7.39Z"
                                fill="white"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.226 13.02L16.0478 15.5619C15.6932 15.8455 15.2526 16 14.7986 16H11C10.7239 16 10.5 15.7761 10.5 15.5C10.5 15.2239 10.7239 15 11 15H14.565C14.6554 15 14.7442 14.9754 14.8218 14.9289C14.8993 14.8824 14.9629 14.8157 15.0055 14.736C15.0482 14.6563 15.0685 14.5664 15.0642 14.4761C15.0598 14.3858 15.0311 14.2983 14.981 14.223L14.093 12.891C13.9108 12.6168 13.6636 12.392 13.3735 12.2365C13.0833 12.081 12.7592 11.9998 12.43 12H7C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.26671 12.3191 6.22752 12.3615 6.17673 12.4164C5.86372 12.755 5.1104 13.5698 4.25 14L1.5 14V19H3.75C5 19 6.12493 19.1249 6.5 19.5C6.87507 19.8751 7.46957 20 8 20H15.139C15.5666 20.0001 15.9893 19.9088 16.3787 19.7322C16.7682 19.5556 17.1153 19.2977 17.397 18.976L22.4064 14.0708C22.906 13.5816 22.7114 12.7371 22.048 12.516C21.573 12.3577 21.0658 12.3208 20.5729 12.4089C20.0799 12.4969 19.6169 12.707 19.226 13.02Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[1em] xl:col-start-2 xl:col-span-full 2xl:col-start-2 2xl:col-span-full 2xl:z-[-1] 3xl:col-start-2 3xl:col-span-full 3xl:z-[-16]">
              <div className="right-10 lg:left-[1rem] xl:left-1  hidden xl:relative mb-20 lg: xl:block 2xl:block 3xl:block">
                <div className="grid grid-cols-[82.2%,1fr] xl:w-[99%] 2xl:grid-cols-[82.2%,1fr] 3xl:grid-cols-[81%,1fr]">
                  <div className="flex flex-row justify-between">
                    <div className="text-left flex items-center">
                      <div>
                        <h1 className="text-2xl dark:text-dark-text">
                          Duas Page
                        </h1>
                        <p className="text-sm text-mute-grey-200 dark:text-dark-text" />
                      </div>
                    </div>
                    <div className="flex flex-row items-center relative">
                      <form className="sm-max:w-full" action="">
                        <div className="w-82 sm-max:w-full relative md:mr-6 md:w-72 lg:mr-6">
                          <div className="flex justify-between sm-max:flex-row sm-max:gap-4 flex-row">
                            <input
                              id="search_box"
                              className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder: placeholder:text-sm bg-white sm-max:bg-gray-200 md:bg-gray-100 lg:bg-gray-100 w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark "
                              placeholder="Search by Dua Name"
                              type="text"
                              name="search"
                              defaultValue=""
                            />
                            <button
                              type="submit"
                              className="flex items-center justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:bg-primary md:bg-white md:dark:bg-dark-bg-lite lg:bg-white lg:dark:bg-dark-bg-lite sm-max:focus:bg-green-700"
                            >
                              <span className="flex items-center sm-max:hidden">
                                <svg
                                  className="stroke-mute-grey"
                                  width={22}
                                  height={22}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <p className="hidden sm-max:block sm-max:text-white">
                                Search
                              </p>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-end">
                    <div className="md:-z-[1] lg:-z-[1]">
                      <div className="relative" data-headlessui-state="">
                        <button
                          className="
            text-opacity-90
            group inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 
            sm:px-0
            "
                          id="headlessui-popover-button-:r0:"
                          type="button"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <img src="https://duaruqyah.com/assets/settings/profile.svg" alt="profile" />
                          <svg
                            className="ml-2 mr-2"
                            width={10}
                            height={7}
                            viewBox="0 0 10 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                              fill="#868686"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <img
                        src="https://duaruqyah.com/assets/tab/home/settings.svg"
                        className="2xl:hidden 3xl:hidden"
                        alt="settings"
                      />
                      <main className="2xl:hidden 3xl:block fixed overflow-hidden bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out z-20 translate-x-full transition-all delay-200 opacity-0">
                        <section className="right-0 xs:w-[280px] sm:w-[340px] md:w-[340px] lg:w-[340px] xl:w-[340px] rounded-l-3xl z-20 bg-white dark:bg-dark-bg-dark absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform translate-x-full">
                          <article className="relative w-full flex flex-col overflow-none h-full scrl xl:pb-0">
                            <div
                              id="right-bar"
                              className="overflow-hidden w-full 2xl:w-[270px] 3xl:w-[300px]"
                            >
                              <div className="bg-white dark:bg-dark-bg w-full h-[85.5vh] rounded-3xl scrl-left pb-16 xs:rounded-3xl xs:h-[72vh] xs:pb-2 sm:h-fit sm:rounded-3xl md:h-screen md:rounded-l-3xl md:rounded-r-none lg:h-screen lg:rounded-l-3xl lg:rounded-r-none xl:h-screen xl:rounded-l-3xl xl:rounded-r-none 2xl:w-full 3xl:w-full">
                                <div
                                  className=" pt-9 pb-6 
      xs:pt-0
      sm:pt-0
      "
                                >
                                  <p className="text-center text-xl dark:text-dark-text xs:hidden sm:hidden">
                                    Settings
                                  </p>
                                </div>
                                <div className="xs:pb-4 sm:pb-4 w-full">
                                  <div className="mx-4 my-4">
                                    <div className="border-x-devider border-x-1 border-b-1 rounded-lg dark:border-none dark:bg-dark-bg-dark">
                                      <div className="cursor-pointer">
                                        <div className="dark:bg-dark-bg-lite transition duration-300 delay-[10ms] bg-dua-bg flex flex-row w-full rounded-lg">
                                          <div className="bg-primary w-1 rounded-tl-lg rounded-bl-lg" />
                                          <div className="p-2 flex flex-row items-center w-full">
                                            <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                              <img
                                                src="https://duaruqyah.com/assets/sidebar/color/language.svg "
                                                alt="language"
                                              />
                                            </div>
                                            <p className="text-primary font-medium  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                              Language Settings
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="">
                                        <div className="py-6 rounded-b-lg">
                                          <div className="flex flex-row gap-x-3 mx-4 justify-center">
                                            <button className="bg-primary text-white rounded-md   w-29 h-10 text-ms xs:w-full sm:w-full">
                                              English
                                            </button>
                                            <button className=" dark:bg-dark-bg-lite text-black dark:text-[#e4e4e4] border border-solid border-[#cccdcf] dark:border-none rounded-md w-29 h-10 text-ms xs:w-full sm:w-full">
                                              বাংলা
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mx-4 my-4">
                                    <div className="">
                                      <div className="cursor-pointer">
                                        <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                                          <div className=" w-1 rounded-tl-lg rounded-bl-lg" />
                                          <div className="p-2 flex flex-row items-center w-full">
                                            <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                              <img
                                                src="https://duaruqyah.com/assets/sidebar/general.svg "
                                                alt="general"
                                              />
                                            </div>
                                            <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                              General Settings
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mx-4 my-4">
                                    <div className="">
                                      <div className="cursor-pointer">
                                        <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                                          <div className=" w-1 rounded-tl-lg rounded-bl-lg" />
                                          <div className="p-2 flex flex-row items-center w-full">
                                            <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                              <img
                                                src="https://duaruqyah.com/assets/sidebar/font.svg "
                                                alt="font"
                                              />
                                            </div>
                                            <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                              Font Settings
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mx-4 my-4">
                                    <div className="">
                                      <div className="cursor-pointer">
                                        <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                                          <div className=" w-1 rounded-tl-lg rounded-bl-lg" />
                                          <div className="p-2 flex flex-row items-center w-full">
                                            <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                              <img
                                                src="https://duaruqyah.com/assets/sidebar/font.svg "
                                                alt="font"
                                              />
                                            </div>
                                            <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                              Appearance Settings
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        </section>
                        <section className=" w-screen h-full cursor-pointer " />
                      </main>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed top-0 xl:hidden max-xl:flex  w-full  flex-row p-5 items-center justify-between bg-white shadow-sm cursor-pointer dark:bg-dark-bg ">
                <a href="/">
                  <div className="flex items-center">
                    <img src="https://duaruqyah.com/assets/dua-logo.svg" alt="dua-logo" />
                    <p className="text-title font-medium text-xl ml-3 dark:text-dark-text">
                      Dua &amp; Ruqyah
                    </p>
                  </div>
                </a>
                <div className="flex items-center justify-between lg:z-[1] lg:z-[1]">
                  <div className="flex flex-row items-center relative">
                    <form className="max-sm:hidden sm-max:w-full bg-light-gray" action="">
                      <div className="w-82 sm-max:w-full relative mr-6 w-72 mr-6">
                        <div className="flex justify-between sm-max:flex-row sm-max:gap-4">
                          <input
                            id="search_box"
                            className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder: placeholder:text-sm bg-white sm-max:bg-gray-200 bg-gray-100 bg-gray-100 w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  sm:text-sm sm-max:dark:bg-dark-bg-lite dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] dark:bg-dark-bg-dark "
                            placeholder="Search by Dua Name"
                            type="text"
                            name="search"
                            defaultValue=""
                          />
                          <button
                            type="submit"
                            className="flex items-center justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:bg-primary bg-white dark:bg-dark-bg-lite bg-white dark:bg-dark-bg-lite sm-max:focus:bg-green-700"
                          >
                            <span className="flex items-center sm-max:hidden">
                              <svg
                                className="stroke-mute-grey"
                                width={22}
                                height={22}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p className="hidden sm-max:block sm-max:text-white">
                              Search
                            </p>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div>
                    <div className="mr-4">
                      <img src="https://duaruqyah.com/assets/tab/home/settings.svg " alt="settings" />
                    </div>
                  </div>
                  <div className="md:-z-[1] lg:-z-[1]">
                    <div className="relative" data-headlessui-state="">
                      <button
                        className="
            text-opacity-90
            group inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 
            sm:px-0
            "
                        id="headlessui-popover-button-:r3:"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        <img src="https://duaruqyah.com/assets/settings/profile.svg" alt="profile" />
                        <svg
                          className="ml-2 mr-2"
                          width={10}
                          height={7}
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                            fill="#868686"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div />
            </div>
            {}
            {}
            <div className="md:z-[-3] md-max:flex md-max:w-full lg:grid-cols-[350px,1fr] lg:gap-6 lg:z-[-2] xl-min:col-span-2 xl:gap-x-6 2xl:gap-x-6 2xl:z-[-1] 2xl-min:w-full 3xl:gap-x-6 3xl:z-[-16]  grid xs:mx-auto sm:mx-auto md:mx-auto lg:w-[96%] lg:mx-auto">
              {children}
            </div>
            <div className="block xl:hidden">
              <div className="fixed bottom-0 z-0 w-full max-md:rounded-none  bg-white pb-6 mt-6 rounded-t-2xl shadow-top dark:bg-dark-bg block xl:hidden">
                <div className="px-6 pt-6 flex justify-between lg:hidden">
                  <a href="/">
                    <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
                      <img src="https://duaruqyah.com/assets/nav/home.svg" alt="/" />
                    </div>
                  </a>
                  <a href="/alldua">
                    <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
                      <img src="https://duaruqyah.com/assets/nav/alldua.svg" alt="/alldua" />
                    </div>
                  </a>
                  <a href="/memorize">
                    <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
                      <img src="https://duaruqyah.com/assets/nav/memorize.svg" alt="/memorize" />
                    </div>
                  </a>
                  <a href="/bookmark">
                    <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
                      <img src="https://duaruqyah.com/assets/nav/bookmark.svg" alt="/bookmark" />
                    </div>
                  </a>
                  <a href="/ruqyah">
                    <div className="w-10 h-10 bg-dua-bg flex items-center justify-center rounded-full cursor-pointer dark:bg-dark-bg-dark">
                      <img src="https://duaruqyah.com/assets/nav/ruqyah.svg" alt="/ruqyah" />
                    </div>
                  </a>
                </div>
              </div>
              {/* <div className="fixed bottom-0 z-0 flex-col items-end hidden xs:flex sm:flex">
                <div className="flex flex-row p-6 bg-white w-screen h-16 rounded-t-4xl shadow-top items-center justify-between dark:bg-dark-bg">
                  <a className="" href="/">
                    <div className="p-2 flex flex-row items-center">
                      <img
                        src="https://duaruqyah.com/assets/nav/home.svg"
                        alt="path"
                        className="h-5 w-5"
                      />
                    </div>
                  </a>
                  <a className="" href="/alldua">
                    <div className="p-2 flex flex-row items-center">
                      <img
                        src="https://duaruqyah.com/assets/nav/alldua.svg"
                        alt="path"
                        className="h-5 w-5"
                      />
                    </div>
                  </a>
                  <a className="" href="/memorize">
                    <div className="p-2 flex flex-row items-center">
                      <img
                        src="https://duaruqyah.com/assets/nav/memorize.svg"
                        alt="path"
                        className="h-5 w-5"
                      />
                    </div>
                  </a>
                  <a className="" href="/bookmark">
                    <div className="p-2 flex flex-row items-center">
                      <img
                        src="https://duaruqyah.com/assets/nav/bookmark.svg"
                        alt="path"
                        className="h-5 w-5"
                      />
                    </div>
                  </a>
                  <a className="" href="/profile">
                    <div className="p-2 flex flex-row items-center">
                      <img
                        src="https://duaruqyah.com/assets/nav/profile.svg"
                        alt="path"
                        className="h-6 w-6"
                      />
                    </div>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="hidden 2xl:block 3xl:block 3xl:col-start-4 3xl:-z-[17] z-[-2]">
              <div
                id="right-bar"
                className="overflow-hidden w-full 2xl:w-[270px] 3xl:w-[300px]"
              >
                <div className="bg-white dark:bg-dark-bg w-full h-[85.5vh] rounded-3xl scrl-left pb-16 xs:rounded-3xl xs:h-[72vh] xs:pb-2 sm:h-fit sm:rounded-3xl md:h-screen md:rounded-l-3xl md:rounded-r-none lg:h-screen lg:rounded-l-3xl lg:rounded-r-none xl:h-screen xl:rounded-l-3xl xl:rounded-r-none 2xl:w-full 3xl:w-full">
                  <div
                    className=" pt-9 pb-6 
      xs:pt-0
      sm:pt-0
      "
                  >
                    <p className="text-center text-xl dark:text-dark-text xs:hidden sm:hidden">
                      Settings
                    </p>
                  </div>
                  <div className="xs:pb-4 sm:pb-4 w-full">
                    <div className="mx-4 my-4">
                      <div className="border-x-devider border-x-1 border-b-1 rounded-lg dark:border-none dark:bg-dark-bg-dark">
                        <div className="cursor-pointer">
                          <div className="dark:bg-dark-bg-lite transition duration-300 delay-[10ms] bg-dua-bg flex flex-row w-full rounded-lg">
                            <div className="bg-primary w-1 rounded-tl-lg rounded-bl-lg" />
                            <div className="p-2 flex flex-row items-center w-full">
                              <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                <img
                                  src="https://duaruqyah.com/assets/sidebar/color/language.svg "
                                  alt="language"
                                />
                              </div>
                              <p className="text-primary font-medium  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                Language Settings
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="py-6 rounded-b-lg">
                            <div className="flex flex-row gap-x-3 mx-4 justify-center">
                              <button className="bg-primary text-white rounded-md   w-29 h-10 text-ms xs:w-full sm:w-full">
                                English
                              </button>
                              <button className=" dark:bg-dark-bg-lite text-black dark:text-[#e4e4e4] border border-solid border-[#cccdcf] dark:border-none rounded-md w-29 h-10 text-ms xs:w-full sm:w-full">
                                বাংলা
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-4 my-4">
                      <div className="">
                        <div className="cursor-pointer">
                          <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                            <div className=" w-1 rounded-tl-lg rounded-bl-lg" />
                            <div className="p-2 flex flex-row items-center w-full">
                              <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                <img
                                  src="https://duaruqyah.com/assets/sidebar/general.svg "
                                  alt="general"
                                />
                              </div>
                              <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                General Settings
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-4 my-4">
                      <div className="">
                        <div className="cursor-pointer">
                          <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                            <div className=" w-1 rounded-tl-lg rounded-bl-lg" />
                            <div className="p-2 flex flex-row items-center w-full">
                              <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                <img src="https://duaruqyah.com/assets/sidebar/font.svg " alt="font" />
                              </div>
                              <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                Font Settings
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-4 my-4">
                      <div className="">
                        <div className="cursor-pointer">
                          <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                            <div className=" w-1 rounded-tl-lg rounded-bl-lg" />
                            <div className="p-2 flex flex-row items-center w-full">
                              <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                <img src="https://duaruqyah.com/assets/sidebar/font.svg " alt="font" />
                              </div>
                              <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                Appearance Settings
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <main className="2xl:hidden 3xl:block fixed overflow-hidden bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out z-20 translate-x-full transition-all delay-200 opacity-0">
              <section className="right-0 xs:w-[280px] sm:w-[340px] md:w-[340px] lg:w-[340px] xl:w-[340px] rounded-l-3xl z-20 bg-white dark:bg-dark-bg-dark absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform translate-x-full">
                <article className="relative w-full flex flex-col overflow-none h-full scrl xl:pb-0">
                  <div
                    id="right-bar"
                    className="overflow-hidden w-full 2xl:w-[270px] 3xl:w-[300px]"
                  >
                    <div className="bg-white dark:bg-dark-bg w-full h-[85.5vh] rounded-3xl scrl-left pb-16 xs:rounded-3xl xs:h-[72vh] xs:pb-2 sm:h-fit sm:rounded-3xl md:h-screen md:rounded-l-3xl md:rounded-r-none lg:h-screen lg:rounded-l-3xl lg:rounded-r-none xl:h-screen xl:rounded-l-3xl xl:rounded-r-none 2xl:w-full 3xl:w-full">
                      <div
                        className=" pt-9 pb-6 
      xs:pt-0
      sm:pt-0
      "
                      >
                        <p className="text-center text-xl dark:text-dark-text xs:hidden sm:hidden">
                          Settings
                        </p>
                      </div>
                      <div className="xs:pb-4 sm:pb-4 w-full">
                        <div className="mx-4 my-4">
                          <div className="border-x-devider border-x-1 border-b-1 rounded-lg dark:border-none dark:bg-dark-bg-dark">
                            <div className="cursor-pointer">
                              <div className="dark:bg-dark-bg-lite transition duration-300 delay-[10ms] bg-dua-bg flex flex-row w-full rounded-lg">
                                <div className="bg-primary w-1 rounded-tl-lg rounded-bl-lg" />
                                <div className="p-2 flex flex-row items-center w-full">
                                  <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                    <img
                                      src="https://duaruqyah.com/assets/sidebar/color/language.svg "
                                      alt="language"
                                    />
                                  </div>
                                  <p className="text-primary font-medium  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                    Language Settings
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <div className="py-6 rounded-b-lg">
                                <div className="flex flex-row gap-x-3 mx-4 justify-center">
                                  <button className="bg-primary text-white rounded-md   w-29 h-10 text-ms xs:w-full sm:w-full">
                                    English
                                  </button>
                                  <button className=" dark:bg-dark-bg-lite text-black dark:text-[#e4e4e4] border border-solid border-[#cccdcf] dark:border-none rounded-md w-29 h-10 text-ms xs:w-full sm:w-full">
                                    বাংলা
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mx-4 my-4">
                          <div className="">
                            <div className="cursor-pointer">
                              <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                                <div className=" w-1 rounded-tl-lg rounded-bl-lg" />
                                <div className="p-2 flex flex-row items-center w-full">
                                  <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                    <img
                                      src="https://duaruqyah.com/assets/sidebar/general.svg "
                                      alt="general"
                                    />
                                  </div>
                                  <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                    General Settings
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mx-4 my-4">
                          <div className="">
                            <div className="cursor-pointer">
                              <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                                <div className=" w-1 rounded-tl-lg rounded-bl-lg" />
                                <div className="p-2 flex flex-row items-center w-full">
                                  <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                    <img
                                      src="https://duaruqyah.com/assets/sidebar/font.svg "
                                      alt="font"
                                    />
                                  </div>
                                  <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                    Font Settings
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mx-4 my-4">
                          <div className="">
                            <div className="cursor-pointer">
                              <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                                <div className=" w-1 rounded-tl-lg rounded-bl-lg" />
                                <div className="p-2 flex flex-row items-center w-full">
                                  <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center dark:bg-dark-bg ">
                                    <img
                                      src="https://duaruqyah.com/assets/sidebar/font.svg "
                                      alt="font"
                                    />
                                  </div>
                                  <p className="text-mute-grey-200 dark:text-dark-text  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                                    Appearance Settings
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
              <section className=" w-screen h-full cursor-pointer " />
            </main>
            <div className="Toastify" />
          </div>
        </div>
      <next-route-announcer>
        <p
          aria-live="assertive"
          id="__next-route-announcer__"
          role="alert"
          style={{
            border: 0,
            clip: "rect(0px, 0px, 0px, 0px)",
            height: 1,
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            top: 0,
            width: 1,
            whiteSpace: "nowrap",
            overflowWrap: "normal"
          }}
        >
          Dua &amp; Ruqyah | All Duas Collection
        </p>
      </next-route-announcer>
    </>
  )

export default Page;