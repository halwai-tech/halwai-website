"use client";
import React, { useState, useRef, useEffect } from "react";

const peopleOptions = ["1", "2", "3-4", "5-6", "More than 6"];
const mealOptions = ["Breakfast", "Lunch", "Dinner"];
const genders = ["Male", "Female"];

export default function MonthlyCookForm() {
  const [people, setPeople] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [gender, setGender] = useState("");
  const [meals, setMeals] = useState<string[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const generateDateList = () => {
    const dates: string[] = [];
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const end = new Date(today);
    end.setMonth(today.getMonth() + 2);
    for (let d = new Date(tomorrow); d <= end; d.setDate(d.getDate() + 1)) {
      dates.push(
        d.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      );
    }
    return dates;
  };

  const dateList = generateDateList();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDateDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMeal = (meal: string) => {
    setMeals((prev) =>
      prev.includes(meal) ? prev.filter((m) => m !== meal) : [...prev, meal]
    );
  };

  const handleSubmit = () => {
    if (!people || !selectedDate || !gender || meals.length === 0) {
      alert("Please fill all the fields before submitting.");
      return;
    }
    setShowDialog(true);
  };

  const sendWhatsAppMessage = () => {
    if (!whatsappNumber) {
      alert("Please enter a WhatsApp number.");
      return;
    }

    const message = `Monthly Cook Booking Request:
👥 People: ${people}
📅 Start Date: ${selectedDate}
👤 Gender Preference: ${gender}
🍽️ Meals: ${meals.join(", ")}`;

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
          <button className="text-xl text-gray-700">&larr;</button>
          <h1 className="text-lg font-semibold text-gray-900">
            Book a Monthly Cook
          </h1>
          <button className="text-xl font-semibold text-gray-700">
            &times;
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Number of People */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of People
            </label>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select from here</option>
              {peopleOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Service Start Date */}
          <div ref={dropdownRef} className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Start Date
            </label>
            <div
              onClick={() => setShowDateDropdown((prev) => !prev)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm bg-white cursor-pointer text-gray-800"
            >
              {selectedDate || "Select from here"}
            </div>

            {showDateDropdown && (
              <div className="absolute z-10 mt-1 w-full max-h-64 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg">
                {dateList.map((date) => (
                  <div
                    key={date}
                    onClick={() => {
                      setSelectedDate(date);
                      setShowDateDropdown(false);
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-blue-100 ${
                      selectedDate === date
                        ? "bg-main text-white font-medium"
                        : "text-gray-800"
                    }`}
                  >
                    {date}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Gender Preference */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Gender Preference
            </label>
            <div className="flex gap-4">
              {genders.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  className={`px-4 py-1 border rounded-md ${
                    gender === g
                      ? "bg-main text-white border-main"
                      : "border-gray-300 text-gray-800"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Select Meals */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Meals
            </label>
            <div className="flex gap-4 flex-wrap">
              {mealOptions.map((meal) => (
                <button
                  key={meal}
                  type="button"
                  onClick={() => toggleMeal(meal)}
                  className={`px-4 py-1 border rounded-md ${
                    meals.includes(meal)
                      ? "bg-main text-white border-main"
                      : "border-gray-300 text-gray-800"
                  }`}
                >
                  {meal}
                </button>
              ))}
            </div>
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
        </form>
      </div>

      {/* WhatsApp Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/90 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Enter WhatsApp Number</h2>
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
