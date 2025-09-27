import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-full bg-teal-600 ">
      <div
        className="screen-max-width flex flex-col md:flex-row justify-around  py-10 px-5 gap-10"
        dir="rtl"
      >
        <div className="text-white  text-right">
          <h2 className="text-2xl font-bold mb-4">عن الشركة</h2>
          <div className="w-13 h-1 bg-orange-600  md:mx-0 mb-2"></div>
          <p className=" w-full md:w-80">
            وهج وطن العقارية شركة رائدة في مجال العقارات الصناعية والتجارية،
            نقدم حلولاً متكاملة لبيع وشراء وتأجير وإدارة العقارات باحترافية
            عالية.
          </p>
        </div>

        <div className="text-white  text-right">
          <h2 className="text-2xl font-bold mb-4">روابط سريعه</h2>
          <div className="w-13 h-1 bg-orange-600 md:mx-0 mb-2"></div>
          <ul className="mt-4 md:space-y-5 space-y-2">
            <li>
              <a href="#home">
                {/* <i className="fas fa-angle-left"></i> */}
                {">"} الرئيسية
              </a>
            </li>
            <li>
              <a href="#home">
                {/* <i className="fas fa-angle-left"></i> */}
                {">"} من نحن
              </a>
            </li>
            <li>
              <a href="#home">
                {/* <i className="fas fa-angle-left"></i> */}
                {">"} خدماتنا
              </a>
            </li>
            <li>
              <a href="#home">
                {/* <i className="fas fa-angle-left"></i> */}
                {">"} اتصل بنا
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white text-right">
          <h2 className="text-2xl font-bold mb-4">خدماتنا</h2>
          <div className="w-13 h-1 bg-orange-600 mx-0 mb-2"></div>
          <ul className="mt-4 md:space-y-5 space-y-2">
            <li>
              <a href="#home">
                {/* <i className="fas fa-angle-left"></i> */}
                {">"} إدارة المشاريع
              </a>
            </li>
            <li>
              <a href="#home">
                {/* <i className="fas fa-angle-left"></i> */}
                {">"} الأراضي الصناعية
              </a>
            </li>
            <li>
              <a href="#home">
                {/* <i className="fas fa-angle-left"></i> */}
                {">"} إسكان العماله
              </a>{" "}
            </li>
            <li>
              <a href="#home">
                {/* <i className="fas fa-angle-left"></i> */}
                {">"} المشاريع التجارية
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white p-0 text-right">
          <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
          <div className="w-13 h-1 bg-orange-600 mx-0 mb-2"></div>
          <p className="mb-2"></p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
