import Image from "next/image";
import iso from "../assets/image 9.png";
import Link from "next/link";
const footerLinks = [
  {
    title: "Pages",
    links: ["Services", "About us", "Portfolio", "Contact us"],
  },
  {
    title: "Social media",
    links: ["Facebook", "LinkedIn"],
  },
  {
    title: "Legal",
    links: ["Privacy and Cookies Policy", "Terms of service"],
  },
];

export default function Footer() {
  return (
    <div className="mt-[100px] lg:mt-[140px] pt-[64px] lg:pt-[104px]  bg-primary px-8 lg:px-[100px] pb-8 lg:pb-[64px] -mx-6 md:-mx-[100px]">
      <div className="flex justify-between items-start flex-col md:flex-row">
        <div className="flex justify-between flex-1 flex-col md:flex-row gap-[40px]">
          {footerLinks.map((item, index) => (
            <div key={index} className="text-white">
              <h2 className=" text-[20px] font-normal mb-4">{item.title}</h2>
              <ul className="text-[16px] font-normal leading-[25px] ">
                {item.links.map((link, index) => {
                  if (item.title == "Pages") {
                    return (
                      <li key={index}>
                        <Link
                          href={link.toLowerCase()}
                          className=" hover:underline"
                        >
                          {link}
                        </Link>
                      </li>
                    );
                  } else if (item.title == "Social media") {
                    return (
                      <li key={index}>
                        <Link
                          href={"https://www." + link.toLowerCase() + ".com"}
                          className="hover:underline"
                          target="_blank"
                        >
                          {link}
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li key={index}>
                        <Link href={"/legal"} className="hover:underline">
                          {link}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex-1 my-[48px] md:my-0 text-center w-full">
          <Image src={iso} alt="" className="mr-auto md:mr-0  ml-auto " />
        </div>
      </div>
      <p className="md:mt-[70px] text-white text-center lg:text-left">
        Oakland - Energy Consulting ©
      </p>
    </div>
  );
}
