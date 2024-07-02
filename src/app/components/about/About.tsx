import Image from "next/image"
import {useTranslations} from "next-intl"

export const About = () => {
  const dict = useTranslations("About")
  return (
    <article className="flex flex-col items-center justify-center mb-10">
      <div className="px-10 py-5 w-full ">
        <h2
          id="about"
          className="text-3xl md:text-5xl text-center pb-2 font-bold mb-5 mt-4 scroll-mt-20"
        >
          {dict("title")}
        </h2>
        <div className="flex justify-center items-center float-none sm:float-left imgAbout mb-10 md:mb-0">
          <Image
            width={150}
            height={150}
            src="/reyes-rondon.webp"
            alt="Reyes Rondon"
            className="rounded-full border-4 border-lime-600 md:mr-6 w-2/5 md:w-44"
          />
        </div>
        <p className="text-base md:text-xl text-center md:text-left tracking-tight text-[#ffffffb5] ">
          {dict("text_1")}
          <span className="text-[#65a30d]"> React</span>,
          <span className="text-[#65a30d]"> PHP</span>,
          <span className="text-[#65a30d]"> MySQL</span> {dict("text_2")}
          <span className="text-[#65a30d]"> WordPress</span>, {dict("text_3")}
          <span className="text-[#65a30d]"> HTML</span>,
          <span className="text-[#65a30d]"> CSS</span>,
          <span className="text-[#65a30d]"> JavaScript</span>,
          <span className="text-[#65a30d]"> MySQL</span>,
          <span className="text-[#65a30d]"> React</span>,
          <span className="text-[#65a30d]"> TypeScript</span> {dict("text_4")}
        </p>
      </div>
    </article>
  )
}
