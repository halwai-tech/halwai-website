import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { eventController } from "@/api/eventController";

interface Props {
  next: (values: any) => void;
}

interface EventType {
  _id: string;
  eventName: string;
  description: string;
  image: string;
  categories: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// 🔧 Utility to generate next 2 months of dates (day-wise)
function generateNextTwoMonthsDates(): string[] {
  const today = new Date();
  const endDate = new Date(today);
  endDate.setMonth(today.getMonth() + 2);

  const dates: string[] = [];

  while (today <= endDate) {
    const formatted = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      weekday: "short",
    }); // e.g., "20 Aug, Wed"
    dates.push(formatted);
    today.setDate(today.getDate() + 1);
  }
  return dates;
}

export default function PersonalInfoStep({ next }: Props) {
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [events, setEvents] = useState<EventType[]>([]);

  // fetch all the events to show in the dropdown
  useEffect(() => {
    async function fetchEvents() {
      try {
        let response = await eventController.getAllEvents();
        console.log("Response from the events api: ", response?.data?.data);
        setEvents(response?.data?.data);
      } catch (error) {
        console.log("Error in Fetching Events: ", error);
      }
    }

    fetchEvents();
  }, []);

  // Hide dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDateDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allDates = generateNextTwoMonthsDates();

  return (
    <div className="max-w-4xl mx-auto px-4   font-roboto-slab text-black">
      <h2 className="text-xl font-bold mb-6 text-center">Book a Chef</h2>

      <Formik
        initialValues={{
          occasion: "",
          dates: [] as string[],
          guestsPerDate: {} as Record<string, string>,
          burners: "",
        }}
        validationSchema={Yup.object({
          occasion: Yup.string().required("Please select an occasion"),
          dates: Yup.array().min(1, "Select at least one date"),
          burners: Yup.string().required("Select number of burners"),
        })}
        onSubmit={next}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6">
            {/* Occasion Dropdown */}
            <div className="relative">
              <label className="block mb-1  font-medium">Select Occasion</label>
              <Field
                as="select"
                name="occasion"
                className="outline-none  w-full border px-3 py-2 rounded bg-main text-white flex flex-wrap gap-2 min-h-[42px] cursor-pointer"
              >
                <option value="" className="bg-white text-black">
                  Select Occasion
                </option>
                {events &&
                  events.map((event, index) => (
                    <option
                      key={index}
                      value={event?.eventName}
                      className=" w-full bg-mainwhite px-2 text-mainblack hover:bg-gray-400"
                    >
                      {event?.eventName}
                    </option>
                  ))}
              </Field>
              <ErrorMessage
                name="occasion"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Custom Multi-select Dates */}
            <div ref={dropdownRef} className="relative">
              <label className="block mb-1 font-medium">Select Dates</label>

              {/* Dropdown Trigger with selected tags */}
              <div
                className="w-full border px-3 py-2 rounded bg-main text-white flex flex-wrap gap-2 min-h-[42px] cursor-pointer"
                onClick={() => setShowDateDropdown((prev) => !prev)}
              >
                {values.dates.length === 0 && (
                  <span className="text-white">Select Dates</span>
                )}
                {values.dates.map((date: string) => (
                  <div
                    key={date}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-main text-white px-2 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {date}
                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue(
                          "dates",
                          values.dates.filter((d) => d !== date)
                        )
                      }
                      className="text-white  bg-main font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Dropdown options */}
              {showDateDropdown && (
                <div className="absolute mt-1 max-h-64 overflow-y-auto w-full bg-white border rounded shadow z-10">
                  {allDates.map((date) => (
                    <div
                      key={date}
                      onClick={() => {
                        const updated = values.dates.includes(date)
                          ? values.dates.filter((d) => d !== date)
                          : [...values.dates, date];
                        setFieldValue("dates", updated);
                      }}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-400 ${
                        values.dates.includes(date) ? "bg-main text-white" : ""
                      }`}
                    >
                      {date}
                    </div>
                  ))}
                </div>
              )}

              <ErrorMessage
                name="dates"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* People per date */}
            {values.dates.map((date: string) => (
              <div key={date}>
                <label className="block mb-1 font-medium">
                  No. of People - {date}
                </label>
                <Field
                  as="select"
                  name={`guestsPerDate.${date}`}
                  className="w-full border bg-main text-white px-3 py-2 rounded"
                >
                  <option value="">Select</option>
                  {[5, 10, 15, 20, 25].map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </Field>
              </div>
            ))}

            {/* Gas burners selection */}
            <div>
              <label className="block mb-1 font-medium">
                No. of Gas Burners{" "}
                <span className="text-sm text-gray-500">in your kitchen</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFieldValue("burners", num.toString())}
                    className={`px-3 py-1 border rounded ${
                      values.burners === num.toString()
                        ? "bg-main text-white"
                        : "bg-white text-main"
                    }`}
                  >
                    {num} burner{num > 1 ? "s" : ""}
                  </button>
                ))}
              </div>
              <ErrorMessage
                name="burners"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-main transition text-white font-semibold py-3 rounded"
              >
                Proceed →
              </button>
            </div>

            {/* Support */}
            <div className="text-center text-sm text-gray-600 mt-2">
              Need help? Call on{" "}
              <a href="tel:9004044234" className="text-blue-600">
                9004044234
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
