import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#upper",
      {
        y: 70,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#upper",
          start: "top 80%",
          end: "bottom 100%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section className=" w-full h-full bg-teal-600 ">
      <div
        id="upper"
        className="upper screen-max-width flex flex-col md:flex-row justify-around  py-10 px-5 gap-10"
        dir="rtl"
      >
        <div className=" text-white  text-right">
          <h2 className="text-2xl font-bold mb-4">عن الشركة</h2>
          <div className="w-13 h-1 bg-orange-600  md:mx-0 mb-2"></div>
          <p className=" w-full md:w-80">
            وهج وطن العقارية شركة رائدة في مجال العقارات الصناعية والتجارية،
            نقدم حلولاً متكاملة لبيع وشراء وتأجير وإدارة العقارات باحترافية
            عالية.
          </p>
          <ul className="flex md:gap-10 gap-5 md:mt-8 mt-4 ">
            <li>
              <a href="https://www.instagram.com/wahjwatan/">
                <InstagramIcon style={{ fontSize: "50px", color: "white" }} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/wahjwatan/">
                <LinkedInIcon style={{ fontSize: "50px", color: "white" }} />
              </a>
            </li>
            <li>
              <a href="http://www.facebook.com/wahjwatan">
                <FacebookIcon style={{ fontSize: "50px", color: "white" }} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/wahjwatan">
                <XIcon style={{ fontSize: "50px", color: "white" }} />
              </a>
            </li>
          </ul>
        </div>

        <div className="text-white  text-right">
          <h2 className="text-2xl font-bold mb-4">روابط سريعه</h2>
          <div className="w-13 h-1 bg-orange-600 md:mx-0 mb-2"></div>
          <ul className="mt-4 md:space-y-5 space-y-2">
            <li>
              <a href="#home">{">"} الرئيسية</a>
            </li>
            <li>
              <a href="#home">{">"} من نحن</a>
            </li>
            <li>
              <a href="#home">{">"} خدماتنا</a>
            </li>
            <li>
              <a href="#home">{">"} اتصل بنا</a>
            </li>
          </ul>
        </div>
        <div className="text-white text-right">
          <h2 className="text-2xl font-bold mb-4">خدماتنا</h2>
          <div className="w-13 h-1 bg-orange-600 mx-0 mb-2"></div>
          <ul className="mt-4 md:space-y-5 space-y-2">
            <li>
              <a href="#home">{">"} إدارة المشاريع</a>
            </li>
            <li>
              <a href="#home">{">"} الأراضي الصناعية</a>
            </li>
            <li>
              <a href="#home">{">"} إسكان العماله</a>{" "}
            </li>
            <li>
              <a href="#home">{">"} المشاريع التجارية</a>
            </li>
          </ul>
        </div>
        <div className="text-white p-0 text-right">
          <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
          <div className="w-13 h-1 bg-orange-600 mx-0 mb-2"></div>
          <ul>
            <li className="flex items-center mt-5 gap-2">
              <LocationPinIcon
                style={{ fontSize: "30px", color: "orangered" }}
              />
              <span>
                جدة - المملكة العربية السعودية
                <br /> حي الحمراء، شارع فلسطين
              </span>
            </li>
            <li className="flex items-center mt-5 gap-2">
              <PhoneIcon style={{ fontSize: "30px", color: "orangered" }} />
              <span>00920002164</span>
            </li>
            <li className="flex items-center mt-5 gap-2">
              <MailOutlineIcon
                style={{ fontSize: "30px", color: "orangered" }}
              />
              <span>info@wahajwatan.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-black/20 text-center text-white py-4" dir="rtl">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة - وهج وطن العقارية
        | بواسطه{" "}
        <a
          href="https://Mohammed-mustafa.netlify.app"
          className="font-bold underline"
        >
          محمد مصطفى
        </a>
      </div>
    </section>
  );
};

export default Footer;
