import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* خلفية صورة فاخرة */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="/assets/bg.jpg"
          alt="فيلا فاخرة"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* المحتوى */}
      <div className="relative container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        {/* النصوص */}
        <div
          className="md:w-1/2 w-full text-center md:text-right mb-10 md:mb-0"
          dir="rtl"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            استثمر في عقارك المثالي مع{" "}
            <span className="text-gold-400">وهج وطن العقارية</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            حلول عقارية مبتكرة للمشاريع الصناعية والتجارية والسكنية
          </p>
          <ul className="mb-6 space-y-2 text-right">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              الاراضي صناعية
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              مشاريع تجارية
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              إسكان عمال
            </li>
          </ul>
          <button className="bg-blue-500 text-white rounded px-8 py-3 shadow-lg hover:bg-blue-600 transition mb-6">
            اطلب استشارة مجانية الان
          </button>
        </div>

        {/* نموذج التواصل */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg w-full max-w-md flex flex-col gap-4">
            <p className="mb-2 text-lg font-semibold text-white text-center">
              تواصل معنا
            </p>
            <input
              type="text"
              placeholder="الاسم"
              className="border border-gray-300 rounded px-3 py-2 bg-white bg-opacity-80 text-black"
            />
            <input
              type="text"
              placeholder="الهاتف"
              className="border border-gray-300 rounded px-3 py-2 bg-white bg-opacity-80 text-black"
            />
            <input
              type="text"
              placeholder="البريد الالكتروني"
              className="border border-gray-300 rounded px-3 py-2 bg-white bg-opacity-80 text-black"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
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
