"use client";
import React, { useState } from "react";
import Link from "next/link";
import { enquiryController } from "@/api/enquiryController";
import { IDomesticChefEnquiry } from "../../../utils/typeDef.js";
import { useRouter } from "next/navigation.js";

const peopleOptions = ["1", "2", "3-4", "5-6", "More than 6"];
const daysOptions = ["1 Day", "3 Days", "7 Days", "15 Days", "30 Days"];
const visitsOptions = ["1 Visit", "2 Visits", "3 Visits"];

// ✅ Hardcoded WhatsApp number
const HARDCODED_WHATSAPP = "918840004980";

export default function DomesticCookForm() {
  const router = useRouter();
  const [people, setPeople] = useState("");
  const [days, setDays] = useState("");
  const [visits, setVisits] = useState("");

  const handleSubmit = async () => {
    if (!people || !days || !visits) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const message = `Domestic Cook Booking Request:
👥 People: ${people}
📆 Days: ${days}
🔁 Visits per Day: ${visits}`;

    try {
      let payload: IDomesticChefEnquiry = {
        people: people,
        days: days,
        visitsPerDay: visits,
        whatsapp: HARDCODED_WHATSAPP,
      };

      // Save booking in API
      const response = await enquiryController.addDomesticChefEnquiry(payload);
      console.log("Booking saved:", response.data);

      // Open WhatsApp directly
      const whatsappLink = `https://wa.me/${HARDCODED_WHATSAPP}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank");
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("There was an issue saving your booking. Please try again.");
    }
  };

  return (
    <div className="bg-white py-10 text-gray-800 ">
      <div className="max-w-3xl mx-auto px-4 py-6 ">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          {/* Back Button */}
          <button
            className="text-xl"
            onClick={() => router.back()} // ✅ go to previous page
          >
            &larr;
          </button>

          <h1 className="text-lg font-semibold text-gray-900">
            Book a Domestic Cook
          </h1>

          {/* Close (Cut) Button */}
          <button
            className="text-xl font-semibold"
            onClick={() => router.push("/")} // ✅ redirect to home
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Number of People */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of People{" "}
              <span className="text-xs text-gray-500">(5+ years of age)</span>
            </label>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full border border-gray-300 text-black rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select from here</option>
              {peopleOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Days */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              For how many days?
            </label>
            <select
              value={days}
              onChange={(e) => setDays(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-main"
            >
              <option value="">Select from here</option>
              {daysOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Visits per Day */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of visits per day
            </label>
            <select
              value={visits}
              onChange={(e) => setVisits(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select from here</option>
              {visitsOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-main text-white px-4 py-2 rounded-md hover:bg-main"
            >
              Submit via WhatsApp
            </button>
          </div>

          {/* Info Notes */}
          <div className="space-y-2 text-sm text-gray-600 mt-6">
            <div className="flex items-start space-x-2">
              <span className="text-xl text-gray-400">✓</span>
              <p>
                Domestic Cook can prepare simple home food (Ghar ka Khana
                <span className="ml-1 inline-block rounded-full bg-gray-200 px-1 text-xs">
                  i
                </span>
                ) only
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-xl text-gray-400">✓</span>
              <p>
                To get multi-cuisine food prepared,{" "}
                <Link
                  href="/booking/professional-chef"
                  className="text-main underline"
                >
                  book a professional chef
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
