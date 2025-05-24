import React from "react";
import shop from "../../assets/shopimage.png"
import Calpersian from "../../components/Calpersian";

const AfzoodanKharid: React.FC = () => {
  return (
    <div className="w-[430px] m-auto min-h-screen bg-[#8381FF] flex flex-col items-center justify-center relative pb-10 pt-10">
      {/* Container سفید داخل صفحه */}
      <div className="w-[96%] h-[96%] bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6">
        <div className="">
            <img src={shop} alt="" className="w-[241px] h-[202px]"/>
        </div>
        <div className="w-full">
            <h2 className="text-[#8381FF] text-right mt-5">
                عنوان خرید 
            </h2>
        </div>
        <div className="w-full mt-2">  
            <input type="text" className="w-full h-[50px] bg-[#EFEEFC] rounded-2xl placeholder:text-[#8381FF] text-right p-4" placeholder="خرید میوه و سبزیجات" />
        </div>
        <div className="w-full mt-5 text-right text-[#8381FF]"> 
            تاریخ خرید 
        </div>
        <div>
            <Calpersian />
        </div>
      </div>
    </div>
  );
};

export default AfzoodanKharid;
