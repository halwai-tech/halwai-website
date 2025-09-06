import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface MealSelection {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  breakfastDishes: number | "";
  lunchDishes: number | "";
  dinnerDishes: number | "";
}

interface AllFormValues {
  occasion: string;
  dates: string[];
  guestsPerDate: Record<string, string>;
  burners: string;
  meals: Record<string, MealSelection>;
}

interface Props {
  submit: (values: { whatsapp: string }) => void;
  back: (values: any) => void;
  data: Partial<AllFormValues>; // ✅ Now accepts optional fields
}

const validationSchema = Yup.object({
  whatsapp: Yup.string().required("WhatsApp number is required"),
});

export default function SecurityStep({ submit, back, data }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 text-black font-roboto-slab">
      <h2 className="text-2xl font-semibold mb-6 text-center">Review & Send Enquiry</h2>

      {/* Summary */}
      <div className="space-y-4 border p-4 rounded bg-gray-50 mb-6">
        <div><strong>Occasion:</strong> {data.occasion ?? "Not selected"}</div>
        <div><strong>No. of Gas Burners:</strong> {data.burners ?? "Not selected"}</div>

        {(data.dates ?? []).map((date) => (
          <div key={date} className="mt-4">
            <h3 className="font-semibold text-primary">{date}</h3>
            <p>Guests: {data.guestsPerDate?.[date] ?? "Not selected"}</p>

            {data.meals?.[date] && (
              <ul className="list-disc ml-5 text-sm mt-1">
                {data.meals[date].breakfast && (
                  <li>Breakfast: {data.meals[date].breakfastDishes || "0"} dishes</li>
                )}
                {data.meals[date].lunch && (
                  <li>Lunch: {data.meals[date].lunchDishes || "0"} dishes</li>
                )}
                {data.meals[date].dinner && (
                  <li>Dinner: {data.meals[date].dinnerDishes || "0"} dishes</li>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* WhatsApp Form */}
      <Formik
        initialValues={{ whatsapp: "" }}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">WhatsApp Number</label>
            <Field
              name="whatsapp"
              placeholder="Enter WhatsApp number"
              className="w-full border px-3 py-2 rounded"
            />
            <ErrorMessage name="whatsapp" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={back}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-main text-white px-6 py-2 rounded font-semibold"
            >
              Send Enquiry via WhatsApp →
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
