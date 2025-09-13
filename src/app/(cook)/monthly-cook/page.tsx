"use client";
import React, { useState, useRef, useEffect } from "react";
import { enquiryController } from "@/api/enquiryController";

const peopleOptions = ["1", "2", "3-4", "5-6", "More than 6"];
const mealOptions = ["Breakfast", "Lunch", "Dinner"];
const genders = ["Male", "Female"];

// ✅ Hardcoded WhatsApp number
const WHATSAPP_NUMBER = "918840004980";

export default function MonthlyCookForm() {
  const [people, setPeople] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [gender, setGender] = useState("");
  const [meals, setMeals] = useState<string[]>([]);

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

  const handleSubmit = async () => {
    if (!people || !selectedDate || !gender || meals.length === 0) {
      alert("Please fill all the fields before submitting.");
      return;
    }

    const message = `Monthly Cook Booking Request:
👥 People: ${people}
📅 Start Date: ${selectedDate}
👤 Gender Preference: ${gender}
🍽️ Meals: ${meals.join(", ")}`;

    try {
      let payload = {
        people: people,
        startDate: selectedDate,
        genderPreference: gender,
        whatsapp: WHATSAPP_NUMBER,
      };

      // Save booking to API
      const response = await enquiryController.addMonthlyChefEnquiry(payload);
      console.log("Booking data saved:", response.data);

      // Open WhatsApp chat
      const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank");
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("There was a problem saving your request. Please try again.");
    }
  };

  return (
    <div className="bg-white  py-10 text-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-6 ">
        {/* Header */}
        {/* ✅ Header without back & cross buttons */}
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-lg font-semibold text-gray-900">
            Book a Monthly Cook
          </h1>
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
    </div>
  );
}
