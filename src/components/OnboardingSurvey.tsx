import React, { useState } from "react";
import { ChevronRight, SkipForward } from "lucide-react";
import Cookies from "js-cookie";

type Props = Readonly<{
  onComplete: () => void;
}>;

function OnboardingSurvey({ onComplete }: Props) {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    education: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    Cookies.set("surveyCompleted", "true");
    onComplete();
  };

  const handleSkip = () => {
    Cookies.set("surveyCompleted", "skipped");
    onComplete();
  };

  const genderOptions = [
    { value: "female", label: "Femenino" },
    { value: "male", label: "Masculino" },
    { value: "other", label: "Otro" },
  ];

  const educationOptions = [
    "Primaria",
    "Secundaria",
    "Técnico",
    "Tecnólogo",
    "Profesional",
    "Posgrado",
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-4xl w-full my-auto">
        <div className="grid grid-cols-1 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-3">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Bienvenido
                </h1>
              </div>
              <p className="text-white/90 text-lg text-balance">
                Por favor, completa esta breve encuesta. Puedes saltar este paso
                si ya lo has completaste anteriormente.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate={false}
            >
              <div>
                <label className="block text-white font-semibold text-base mb-3">
                  Género <span className="text-red-300">*</span>
                </label>
                <div className="space-y-2">
                  {genderOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={option.value}
                        checked={formData.gender === option.value}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        required
                        className="w-4 h-4 text-white border-2 border-white/30 focus:ring-2 focus:ring-white bg-transparent"
                      />
                      <span className="text-white text-base group-hover:text-yellow-300 transition-colors">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold text-base mb-3">
                  Edad <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="^(?:[1-9]|[1-9][0-9]|100)$"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  required
                  title="Ingresa una edad válida entre 1 y 100 años"
                  className="w-full bg-white/20 border-2 border-white/30 rounded-2xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-base backdrop-blur-sm invalid:border-red-300 invalid:ring-red-300"
                  placeholder="Ingresa tu edad (1-100)"
                />
              </div>

              <div>
                <label className="block text-white font-semibold text-base mb-3">
                  Nivel de educación <span className="text-red-300">*</span>
                </label>
                <select
                  value={formData.education}
                  onChange={(e) =>
                    setFormData({ ...formData, education: e.target.value })
                  }
                  required
                  className="w-full bg-white/20 border-2 border-white/30 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-base appearance-none cursor-pointer backdrop-blur-sm invalid:border-red-300 invalid:ring-red-300"
                >
                  <option value="" className="bg-purple-700 text-white">
                    Selecciona tu nivel educativo
                  </option>
                  {educationOptions.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="bg-purple-700 text-white"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-white hover:bg-white/90 text-purple-700 font-bold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Continuar</span>
                  <ChevronRight size={18} />
                </button>

                <button
                  type="button"
                  onClick={handleSkip}
                  className="flex-1 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 border border-white/30 flex items-center justify-center space-x-2"
                >
                  <SkipForward size={18} />
                  <span>Omitir encuesta</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingSurvey;
