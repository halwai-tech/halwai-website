import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateForm } from "@/redux/slices/formSlice";
import PersonalInfoStep from "./steps/PersonalStepInfo";
import ContactInfoStep from "./steps/ContactInfoStep";
import SecurityStep from "./steps/SecurityStep";
import { enquiryController } from "@/api/enquiryController";
import { IProfessionalChefEnquiry } from "@/utils/typeDef";

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  function handleNext(values: any) {
    dispatch(updateForm(values));
    setStep((prev) => prev + 1);
  }

  function handleBack() {
    setStep((prev) => prev - 1);
  }

  async function handleFinalSubmit(values: { whatsapp: string }) {
    dispatch(updateForm(values));
    let number = values.whatsapp.replace(/\D/g, "");
    if (!number.startsWith("91")) {
      number = "91" + number;
    }
    const recipientPhoneNumber = number;

    const fullData = { ...formData, ...values };

    // 🔧 Build WhatsApp message (from Halwai to user)
    const messageLines: string[] = [
      "Hi 👋",
      "",
      "Thank you for your enquiry on Halwai!",
      "",
      "Here’s a quick summary of your request:",
      "",
      `📌 Occasion: ${fullData.occasion ?? "Not specified"}`,
      `🔥 Burners in Kitchen: ${fullData.burners ?? "Not specified"}`,
      "",
      `📅 Selected Dates:`,
    ];

    (fullData.dates ?? []).forEach((date) => {
      const guests = fullData.guestsPerDate?.[date] ?? "Not specified";
      const meals = fullData.meals?.[date];

      messageLines.push(`• ${date}`);
      messageLines.push(`  👥 Guests: ${guests}`);

      if (meals && (meals.breakfast || meals.lunch || meals.dinner)) {
        messageLines.push(`  🍽 Meals:`);
        if (meals.breakfast) {
          messageLines.push(
            `   - Breakfast: ${meals.breakfastDishes || 0} dishes`
          );
        }
        if (meals.lunch) {
          messageLines.push(`   - Lunch: ${meals.lunchDishes || 0} dishes`);
        }
        if (meals.dinner) {
          messageLines.push(`   - Dinner: ${meals.dinnerDishes || 0} dishes`);
        }
      }

      messageLines.push(""); // Space between dates
    });

    messageLines.push("We’ll get in touch with you shortly on WhatsApp.");
    messageLines.push("");
    messageLines.push("– Team Halwai");

    // const finalMessage = messageLines.join("\n");

    // // ✅ Encode and create WhatsApp URL
    // const encodedMessage = encodeURIComponent(finalMessage);

    // api logic to save the Enquiry data
    try {
      const payload: IProfessionalChefEnquiry = {
        occasion: fullData.occasion ?? "",
        burnersInKitchen: Number(fullData.burners ?? 0),
        selectedDates: (fullData.dates ?? []).map((date) => ({
          date,
          guests: Number(fullData.guestsPerDate?.[date] ?? 0), // ✅ force number
          meals: [
            ...(fullData.meals?.[date]?.breakfast
              ? [
                  {
                    name: "Breakfast",
                    count: Number(fullData.meals[date].breakfastDishes ?? 0),
                  },
                ]
              : []),
            ...(fullData.meals?.[date]?.lunch
              ? [
                  {
                    name: "Lunch",
                    count: Number(fullData.meals[date].lunchDishes ?? 0),
                  },
                ]
              : []),
            ...(fullData.meals?.[date]?.dinner
              ? [
                  {
                    name: "Dinner",
                    count: Number(fullData.meals[date].dinnerDishes ?? 0),
                  },
                ]
              : []),
          ],
        })),
        whatsapp: values?.whatsapp,
      };
      const response = await enquiryController.addProfessionalChefEnquiry(
        payload
      );
      console.log("Saved response for Enquiry: ", response.data);

      // ✅ Move message encoding here
      const finalMessage = messageLines.join("\n");
      const encodedMessage = encodeURIComponent(finalMessage);

      const whatsappURL = `https://wa.me/${recipientPhoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp message in new tab
      setTimeout(() => {
        window.open(whatsappURL, "_blank");
      }, 500);
    } catch (error) {
      console.log("Failed to save the enquiry: ", error);
    }
  }

  const steps = [
    <PersonalInfoStep key="step-1" next={handleNext} />,
    <ContactInfoStep key="step-2" next={handleNext} back={handleBack} />,
    <SecurityStep
      key="step-3"
      back={handleBack}
      submit={handleFinalSubmit}
      data={formData}
    />,
  ];

  return <div>{steps[step]}</div>;
};

export default MultiStepForm;
