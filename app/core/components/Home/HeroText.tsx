import Link from "next/link"
import React, { FC } from "react"

const HeroText: FC = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10 dark:text-gray-100">
        Quickly create well formatted cheatsheets,{" "}
        <span className="italic">oooor just get them from someone that's already made them...</span>
      </h1>
      <h2 className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 dark:text-gray-100">
        This website is a tool for creating cheatsheets and sharing them with others. <br />
        Everyone is a contributor!
      </h2>
      <Link href="/create">
        <a
          className={`
          m-auto w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white
          text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl
          focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900
          focus:outline-none transition-colors duration-200 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300
        `}
        >
          Get started by creating your own
        </a>
      </Link>
    </div>
  )
}

export default HeroText
