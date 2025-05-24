import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import shop from "../../assets/shopimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenClip, faShop } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../components/Button";

const fakeProducts = [
  { id: 1, title: "خرید میوه و سبزیجات", date: "امروز" },
  { id: 2, title: "خرید لوازم بهداشتی", date: "دیروز" },
  { id: 3, title: "خرید شیرینی و شکلات", date: "چهارشنبه" },
  { id: 4, title: "خرید نوشیدنی", date: "دوشنبه" },
  { id: 5, title: "خرید تنقلات", date: "یکشنبه" },
  { id: 6, title: "خرید نان", date: "شنبه" },
  { id: 7, title: "خرید لبنیات", date: "جمعه" },
  { id: 8, title: "خرید گوشت", date: "پنجشنبه" },
  { id: 9, title: "خرید مرغ", date: "چهارشنبه" },
  { id: 10, title: "خرید برنج", date: "سه‌شنبه" },
];

const StartPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token = "fakeToken"; // Simulating a token for demonstration
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // if (isAuthenticated) {
  //   return <Navigate to="/use" />;
  // }

  const handleProductClick = (id: number) => {
    setSelectedProductId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-[430px] m-auto min-h-screen bg-[#8381FF] flex flex-col items-center relative pb-28">
      <div className="pt-[38px]">
        <img src={shop} alt="shop" className="w-[167px] h-[140px]" />
      </div>

      <div className="mt-4">
        <button className="bg-white text-[#8381FF] rounded-lg shadow flex items-center p-3 px-8">
          <Link to="/afzoodan">
            <FontAwesomeIcon icon={faShop} className="px-2" />
            افزودن خرید
          </Link>
        </button>
      </div>

      <div className="w-[400px] bg-white flex flex-col rounded-2xl p-4 mt-10 text-right">
        <div className="w-full pr-2">
          {fakeProducts.map((product) => {
            const isSelected = product.id === selectedProductId;

            return (
              <div
                key={product.id}
                className={`w-full flex justify-between items-center ${
                  isSelected ? "bg-[#8381FF]" : "bg-[#EFEEFC]"
                } rounded-xl p-4 mb-4 shadow cursor-pointer transition-colors duration-300`}
                onClick={() => handleProductClick(product.id)}
              >
                <div className="items-center flex">
                  {isSelected && (
                    <>
                      <button className="bg-white text-[#8381FF] px-3 py-1 rounded-lg text-sm mx-2">
                        اتمام
                      </button>
                      <div>
                        <FontAwesomeIcon
                          icon={faPenClip}
                          className="text-[#8381FF] border-white bg-white p-1 rounded"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-col items-end text-right">
                  <div style={{ color: isSelected ? "#FFFFFF" : "#806FFFCC" }}>
                    {product.title}
                  </div>
                  <div
                    className="text-xs mt-1 border p-1 rounded-2xl px-2"
                    style={{ color: isSelected ? "#FFFFFF" : "#806FFFCC" }}
                  >
                    {product.date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Buttons />
    </div>
  );
};

export default StartPage;
