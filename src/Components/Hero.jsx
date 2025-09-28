import React from "react";
import bg from "../assets/bg.jpg";
const Hero = () => {
  return (
    <div
      className="relative w-full h-full md:h-160 screen-max-width text-center bg-gray-900 text-white py-10 px-5"
      dir="rtl"
    >
      <div className="absolute inset-0 h-full">
        <img
          className="w-full h-full object-cover opacity-40"
          src={bg}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" /> */}
      </div>
      <div className="relative  z-10 w-full h-full md:mt-10 md:flex md:justify-around justify-items-center items-center md:h-100 mb-6">
        <div className=" w-full max-w-lg">
          <p className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            استثمر في عقارك المثالي مع وهج وطن العقارية
          </p>
          <p className="text-lg md:text-xl mb-7 leading-tight">
            حلول عقارية مبتكرة للمشاريع الصناعية والتجارية والسكنية
          </p>
          <ul className="mb-8 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-teal-600">✔</span>
              الاراضي الصناعية
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-600">✔</span>
              مشاريع تجارية
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-600">✔</span>
              إسكان عمال
            </li>
          </ul>
          <button className=" bg-teal-600 text-white rounded px-8 py-3 shadow-lg hover:bg-teal-400 transition mb-6 hover:cursor-pointer">
            اطلب استشارة مجانية الان
          </button>
        </div>

        <div className="flex flex-col gap-3 w-full max-w-lg bg-white border   text-black p-5  rounded-xl ">
          <p className=" text-lg font-bold">تواصل معنا</p>
          <p className="flex mb-2 items-start text-md">
            ابدأ رحلتك العقارية مع وهج وطن اليوم، فريقنا جاهز للإجابة على
            استفساراتك وتقديم الاستشارة المناسبة لك
          </p>
          <input
            type="text"
            placeholder="الاسم"
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="الهاتف"
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="البريد الالكتروني"
            className="border border-gray-300 rounded px-3 py-2"
          />
          <button className="  bg-teal-600 text-white rounded px-8 py-3 shadow-lg hover:bg-teal-400 transition mb-6 hover:cursor-pointer">
            تواصل معنا
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
