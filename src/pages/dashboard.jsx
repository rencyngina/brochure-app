/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Article from "../Components/articles";
import { IoCloseCircle } from "react-icons/io5";
import Articleform from "../Components/articleform";
import { LuPencilLine } from "react-icons/lu";
import Image from "next/image";
import { useSession } from 'next-auth/react';  

const Dashboard = () => {
  const [showArticles, setShowArticles] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const toggleArticles = () => {
    setShowArticles(!showArticles);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/signin');
  }, [session, status, router]);


  if (status === 'loading') {
    return <div className="flex justify-center items-center h-40">
              <div class="three-body">
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
              </div>
            </div> ;
  }

  if (!session) {
    return null;
  }
  return (
    <div className="min-h-screen bg-gray-50/50">
      <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-20 my-2 ml-4 h-[calc(100vh-50px)] w-72 transition-transform duration-300 xl:translate-x-0">
        <div className="relative border-b border-white/20">
          <Link className="flex items-center gap-4 py-6 px-8" href="#">
            <Image src="/images/Logo.svg" alt="logo" width={180} height={50} loading="lazy" />
            <button
              className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </button>
          </Link>
          <div className="m-4">
            <ul className="mb-4 flex flex-col gap-1">
              <li>
                <a aria-current="page" className="active" href="#">
                  <button
                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5 text-inherit"
                    >
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                    </svg>
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                      dashboard
                    </p>
                  </button>
                </a>
              </li>
              <li>
                <a className="" href="#">
                  <button
                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5 text-inherit"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                      profile
                    </p>
                  </button>
                </a>
              </li>
              {/*Article func*/}
              <li>
                <a className="" href="#">
                  <button
                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                    onClick={toggleArticles}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5 text-inherit"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.375 5.625c0-1.035.84-1.875 1.875-1.875h13.5a1.875 1.875 0 011.875 1.875v12.75A1.875 1.875 0 0118.75 20.25H5.25a1.875 1.875 0 01-1.875-1.875V5.625zm1.875-.375a.375.375 0 00-.375.375v12.75c0 .207.168.375.375.375H12v-13.5H3.375zm8.25 0v13.5h10.5a.375.375 0 00.375-.375V5.625a.375.375 0 00-.375-.375h-10.5zM5.25 9a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                      articles
                    </p>
                  </button>
                </a>
              </li>
              {/*Article form*/}
              <li>
                <a className="" href="#">
                  <button
                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                    onClick={toggleForm}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5 text-inherit"
                    >
                      <path d="M12 20.25c4.556 0 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75 3.75 7.444 3.75 12s3.694 8.25 8.25 8.25z"></path>
                      <path d="M11.998 6.5a.75.75 0 00-.75.75v4.442l-.102.053-2.593 1.495a.75.75 0 10.75 1.298l2.845-1.641.057-.036a.75.75 0 00.393-.668V7.25a.75.75 0 00-.75-.75z"></path>
                    </svg>
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                      new articles
                    </p>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className="pt-4 pb-6 lg:pt-6 lg:pb-2 transition-all duration-300 xl:pl-80">
        <div className="px-3 py-2 mx-auto max-w-full lg:max-w-6xl">
          <div className="relative flex flex-col min-w-0 break-words bg-blue-950 border-0 shadow-none rounded-2xl bg-clip-border">
            <div className="p-6 mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div>
                  <h6 className="font-sans text-white antialiased leading-normal font-semibold text-lg text-blue-gray-900">
                    Articles
                  </h6>
                </div>
                <div className="text-center">
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium text-gray-900">
                    {/* Add content here */}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <div className="p-1.5 block antialiased font-sans text-sm leading-normal font-normal text-gray-900">
                    <a href="#" className="material-icons block w-5 h-5 text-white">
                      <LuPencilLine className="text-2xl"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Display articles or form based on state */}
          <div className="mt-4">
            {showArticles && <Article />}
            {showForm && <Articleform />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
