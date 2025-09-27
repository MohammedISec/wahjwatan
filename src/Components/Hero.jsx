import React from "react";
import bg from "../assets/bg.jpg";
const Hero = () => {
  return (
    <div
      className="relative w-full h-180 md:h-150 screen-max-width text-center bg-gray-900 text-white py-10 px-5"
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

// import React from "react";

// const Hero = () => {
//   return (
//     <section className="relative bg-gray-900 text-white">
//       {/* خلفية صورة فاخرة */}
//       <div className="absolute inset-0">
//         <img
//           className="w-full h-full object-cover opacity-40"
//           src="/images/luxury-villa.jpg"
//           alt="فيلا فاخرة"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
//       </div>

//       {/* المحتوى */}
//       <div className="relative container mx-auto px-6 py-28 flex flex-col md:flex-row items-center">
//         {/* النصوص */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-5xl font-bold leading-tight mb-6">
//             امتلك <span className="text-gold-400">منزل أحلامك</span>
//             بإطلالة ساحرة
//           </h1>
//           <p className="text-lg text-gray-200 mb-8">
//             فلل وشقق فاخرة بتصاميم عصرية ومواقع استراتيجية، مع خطط سداد مرنة
//             وتجربة سكنية لا تُضاهى.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <a
//               href="#contact"
//               className="bg-gold-400 text-gray-900 px-8 py-3 rounded-xl shadow-lg hover:bg-yellow-500 transition"
//             >
//               احجز زيارتك الآن
//             </a>
//             <a
//               href="#gallery"
//               className="border border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-gray-900 transition"
//             >
//               شاهد المعرض
//             </a>
//           </div>
//         </div>

//         {/* صورة جانبية */}
//         <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
//           <img
//             src="/images/interior-luxury.png"
//             alt="غرفة داخلية فاخرة"
//             className="rounded-2xl shadow-2xl w-full max-w-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
