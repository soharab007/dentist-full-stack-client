import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selectedDate }) => {
  return (
    <section className="mt-16">
      <p className="text-secondary font-bold text-center">
        Available Appointments On {format(selectedDate, "PP")}
      </p>
    </section>
  );
};

export default AvailableAppointments;
