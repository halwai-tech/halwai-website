import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface MealSelection {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  breakfastDishes: number | "";
  lunchDishes: number | "";
  dinnerDishes: number | "";
}

interface FormValues {
  meals: {
    [date: string]: MealSelection;
  };
}

interface Props {
  next: (values: FormValues) => void;
  back: () => void;
}

function toDateKey(dateStr: string): string {
  return dateStr;
}

export default function ContactInfoStep({ next, back }: Props) {
  const formData = useSelector((state: RootState) => state.form);

  const selectedDates: string[] = formData.dates || [];

  const initialMeals: FormValues["meals"] = selectedDates.reduce(
    (acc, dateStr) => {
      const key = toDateKey(dateStr);
      acc[key] = {
        breakfast: true,
        lunch: true,
        dinner: true,
        breakfastDishes: "",
        lunchDishes: "",
        dinnerDishes: "",
      };
      return acc;
    },
    {} as FormValues["meals"]
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 text-black font-roboto-slab">
      <h2 className="text-2xl font-semibold mb-6 text-center">Select Meals</h2>
      <Formik
        initialValues={{ meals: initialMeals }}
        onSubmit={next}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-10">
            {selectedDates.length === 0 ? (
              <p className="text-center text-gray-600">
                No dates selected yet.
              </p>
            ) : (
              selectedDates.map((dateStr) => {
                const key = toDateKey(dateStr);
                return (
                  <div
                    key={key}
                    className="flex flex-col md:flex-row items-center justify-between border-b border-gray-300 pb-6"
                  >
                    {/* Date */}
                    <div className="w-full md:w-1/4 font-semibold text-lg mb-4 md:mb-0">
                      {dateStr}
                    </div>

                    {/* Meal selection buttons */}
                    <div className="flex gap-3 w-full md:w-1/3 justify-center">
                      {(
                        [
                          "breakfast",
                          "lunch",
                          "dinner",
                        ] as (keyof MealSelection)[]
                      ).map((meal) => (
                        <button
                          type="button"
                          key={meal}
                          className={`px-4 py-2 rounded border font-medium transition-colors duration-200 ${
                            values.meals[key][meal]
                              ? "bg-main text-white border-main shadow-md"
                              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-main hover:text-white"
                          }`}
                          onClick={() =>
                            setFieldValue(
                              `meals.${key}.${meal}`,
                              !values.meals[key][meal]
                            )
                          }
                          aria-pressed={!!values.meals[key][meal]} // <-- Here
                        >
                          {meal.charAt(0).toUpperCase() + meal.slice(1)}
                        </button>
                      ))}
                    </div>

                    {/* Dish selectors, shown only if corresponding meal selected */}
                    <div className="w-full md:w-1/3 mt-4 md:mt-0 flex flex-wrap gap-3 justify-center">
                      {(
                        [
                          "breakfast",
                          "lunch",
                          "dinner",
                        ] as (keyof MealSelection)[]
                      ).map(
                        (meal) =>
                          values.meals[key][meal] && (
                            <div
                              key={`${key}-${meal}-dishes`}
                              className="min-w-[100px]"
                            >
                              <Field
                                as="select"
                                name={`meals.${key}.${meal}Dishes`}
                                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                              >
                                <option value="">{`# ${meal} dishes`}</option>
                                {[1, 2, 3, 4, 5].map((num) => (
                                  <option key={num} value={num}>
                                    {`${num} ${meal}`}
                                  </option>
                                ))}
                              </Field>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                );
              })
            )}

            <div className="text-sm text-gray-500 mt-6 text-center">
              <p>✓ You can add / reduce number of dishes later also</p>
              <p>✓ You can choose from 500+ dishes across 15+ cuisines</p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={back}
                className="bg-gray-300 px-5 py-2 rounded hover:bg-gray-400 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-main text-white px-8 py-2 rounded font-semibold hover:bg-main transition"
              >
                View Total Bill →
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
