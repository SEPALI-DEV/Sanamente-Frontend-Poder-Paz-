import Cookies from "js-cookie";
import { Home, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import OnboardingSurvey from "./components/OnboardingSurvey";
import { Loading } from "./components/Loading";
import { Layout } from "./components/Layout";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const surveyCompleted = Cookies.get("surveyCompleted");

    if (!surveyCompleted) {
      setShowOnboarding(true);
    }

    setIsLoading(false);
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const navItems = [
    { id: "home", label: "Inicio", icon: Home },
    { id: "contact", label: "Contacto", icon: Phone },
  ];

  if (isLoading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (showOnboarding) {
    return <OnboardingSurvey onComplete={handleOnboardingComplete} />;
  }

  return (
    <Layout>
      <header
        className={"bg-white/10 backdrop-blur-sm border-b border-white/20"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <h1 className="text-white text-xl font-bold">Poder Paz</h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className={"flex-1"}>{renderPage()}</main>

      {/* Bottom Navigation - Mobile Only */}
      <nav
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200`}
      >
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === item.id
                  ? "text-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </Layout>
  );
}

export default App;
