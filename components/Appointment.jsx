"use client";
import { useState } from "react";

export default function Appointment() {
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");

  const times = ["10:00 AM","11:00 AM","12:00 PM","5:00 PM","6:00 PM"];

  const book = () => {
    const msg = `Appointment Request:
Name: ${name}
Time: ${selectedTime}`;

    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`);
  };

  return (
    <section className="py-16 text-center bg-pink-50">
      <h2 className="text-3xl mb-6">Book Appointment</h2>

      <input
        placeholder="Your Name"
        onChange={(e)=>setName(e.target.value)}
        className="p-3 border rounded mb-4"
      />

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {times.map((t,i)=>(
          <button
            key={i}
            onClick={()=>setSelectedTime(t)}
            className={`px-4 py-2 rounded border ${
              selectedTime === t ? "bg-pink-600 text-white" : ""
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <button
        onClick={book}
        className="bg-pink-600 text-white px-6 py-3 rounded-xl"
      >
        Confirm Booking
      </button>
    </section>
  );
}