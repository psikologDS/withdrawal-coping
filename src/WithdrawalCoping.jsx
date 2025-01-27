import { useState } from "react";
import { motion } from "framer-motion";

const activities = [
  "Nefes egzersizi yap",
  "Bir bardak su iç",
  "Esneme hareketleri yap",
  "5 dakikalık yürüyüşe çık",
  "Duygularını yazıya dök",
  "Sevdiğin bir müziği dinle",
  "Meditasyon yap",
  "Egzersiz yap",
  "Sanatsal bir uğraş ile meşgul ol"
];

export default function WithdrawalCoping() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < activities.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 text-center shadow-xl bg-white rounded-2xl">
        <motion.h1
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold mb-4"
        >
          {activities[step]}
        </motion.h1>
        <button onClick={handleNext} className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg">
          {step < activities.length - 1 ? "İlerle" : "Bitti"}
        </button>
      </div>
    </div>
  );
}