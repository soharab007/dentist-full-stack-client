import React, { useState } from "react";
import Chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <header className="my-6">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="dentist-chair"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p>You Selected On: {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
