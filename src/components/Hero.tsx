import { LightbulbIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-cream -z-10" />
      <div className="animate-float">
        <LightbulbIcon className="w-20 h-20 text-primary mb-6" />
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 font-display">
        Лампа
      </h1>
      <h2 className="text-2xl md:text-3xl text-center mb-8 font-display">
        Творческое пространство
      </h2>
      <p className="text-xl text-center max-w-2xl mb-12 font-body">
        Развиваем творческий потенциал вашего ребенка через увлекательное обучение
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-primary text-white px-8 py-3 rounded-full font-medium 
          transform hover:scale-105 hover:bg-primary-hover transition-all duration-300 
          hover:shadow-lg active:scale-95">
          Записаться на занятие
        </button>
        <button className="bg-secondary text-textDark px-8 py-3 rounded-full font-medium 
          transform hover:scale-105 hover:bg-secondary-hover transition-all duration-300 
          hover:shadow-lg active:scale-95">
          Узнать больше
        </button>
      </div>
    </div>
  );
};

export default Hero;