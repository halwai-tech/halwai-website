"use client";
import React, { useState } from "react";
import Link from "next/link";

const peopleOptions = ["1", "2", "3-4", "5-6", "More than 6"];
const daysOptions = ["1 Day", "3 Days", "7 Days", "15 Days", "30 Days"];
const visitsOptions = ["1 Visit", "2 Visits", "3 Visits"];

export default function DomesticCookForm() {
  const [people, setPeople] = useState("");
  const [days, setDays] = useState("");
  const [visits, setVisits] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const handleSubmit = () => {
    if (!people || !days || !visits) {
      alert("Please fill all fields before submitting.");
      return;
    }
    setShowDialog(true);
  };

  const sendWhatsAppMessage = () => {
    if (!whatsappNumber) {
      alert("Please enter your WhatsApp number.");
      return;
    }

    const message = `Domestic Cook Booking Request:
👥 People: ${people}
📆 Days: ${days}
🔁 Visits per Day: ${visits}`;

    const whatsappLink = `https://wa.me/91${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    setShowDialog(false);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button className="text-xl">&larr;</button>
          <h1 className="text-lg font-semibold text-gray-900">
            Book a Domestic Cook
          </h1>
          <button className="text-xl font-semibold">&times;</button>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Number of People */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of People{" "}
              <span className="text-xs text-gray-500">
                (5+ years of age)
              </span>
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

      {/* WhatsApp Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/90 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">
              Enter WhatsApp Number
            </h2>
            <input
              type="text"
              placeholder="e.g. 919876543210"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-main text-white rounded hover:bg-main"
                onClick={sendWhatsAppMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
