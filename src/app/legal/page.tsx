import React from "react";

const info = [
  {
    title: "1. Information we collect",
    info: "We gather various types of information to enhance and optimize our services. This includes personal information such as your name, email address, phone number, and mailing address, collected when you register for an account, contact us, or use our services. We also gather usage information, which encompasses details about your interactions with our website and services, including your IP address, browser type, device information, pages visited, and actions taken.",
  },
  {
    title: "2. How we use your information",
    info: "Our utilization of the information we collect serves multiple purposes. We use your personal data to furnish requested services, such as responding to inquiries, processing orders, and delivering newsletters or updates if you opt to receive them. Additionally, we analyze usage information to gain insights into how our website and services are used, which informs our continuous improvement efforts, content customization, and enhancements to user experiences.",
  },
  {
    title: "3. Communication",
    info: "We may employ your contact information to communicate with you concerning our services, provide updates, and convey important notices. You have the option to opt out of marketing communications at any time.",
  },
  {
    title: "4. Cookies and Tracking Technologies",
    info: "To better understand your browsing behavior and improve your website experience, we utilize cookies and similar tracking technologies. Cookies are small data files stored on your device that facilitate our comprehension of your preferences. By utilizing our website, you implicitly consent to our use of cookies, as detailed in our Cookies Policy. You maintain the ability to manage your cookie preferences through your browser settings.",
  },
  {
    title: "5. Security",
    info: "We prioritize data security and employ reasonable measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. While we diligently strive to protect your data, it's important to acknowledge that no method of transmission over the internet or electronic storage is entirely secure. Consequently, we cannot provide absolute security guarantees.",
  },
];
function page() {
  return (
    <div className="-mx-6 md:-mx-[100px] ">
      <div className="bg-muted px-8 lg:px-[100px] h-[650px] flex items-end py-[64px] ">
        <div>
          <h2 className="text-zinc-700 text-[64px] font-normal">
            Privacy and Cookies Policy
          </h2>
          <p className="mt-[48px] max-w-[535px] text-zinc-700 text-lg font-normal  leading-[25px]">
            This privacy is designed to inform you about how we collect, use,
            and protect your personal information when you interact with our
            website.
          </p>
        </div>
      </div>

      <div className="px-8 lg:px-[100px] mt-[100px] lg:mt-[140px] space-y-16">
        {info.map((item, index) => (
          <div key={index} className="space-y-10">
            <h3 className="w-[1046px] text-neutral-800 text-[40px] font-normal ">
              {item.title}
            </h3>
            <p className=" w-[1046px] text-zinc-700 text-lg font-normal leading-[25px]">
              {item.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
