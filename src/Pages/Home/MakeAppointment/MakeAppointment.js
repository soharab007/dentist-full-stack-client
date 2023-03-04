import React from "react";
import doctors from "../../../assets/images/doctor.png";
import Appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-32" style={{ background: `url(${Appointment})` }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctors}
            className="lg:w-1/2 -mt-36 hidden md:block rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h3 className=" font-bold text-lg text-primary">Appointment</h3>
            <h1 className="text-4xl text-white font-bold">
              Make An Appointment Today
            </h1>
            <p className="py-6 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              omnis culpa accusamus placeat dolore quae quaerat, quidem
              necessitatibus non, tempore minus in! Nostrum, mollitia alias!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              commodi.
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
