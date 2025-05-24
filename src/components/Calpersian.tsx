import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/purple.css";

const Calpersian: React.FC = () => {
  const [value, setValue] = useState(null);

  return (
    <div dir="rtl" className="w-full flex justify-center mt-4">
      <DatePicker
        value={value}
        onChange={(date) => setValue(date)}
        calendar="persian"
        locale="fa"
        className="purple"
        inline
      />
    </div>
  );
};

export default Calpersian;