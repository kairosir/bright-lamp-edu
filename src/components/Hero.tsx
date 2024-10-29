import { LightbulbIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-cream -z-10" />
      <div className="animate-float">
        <LightbulbIcon className="w-20 h-20 text-primary mb-6" />
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-center mb-6">
        Лампа
      </h1>
      <h2 className="text-2xl md:text-3xl text-center mb-8">
        Творческое пространство
      </h2>
      <p className="text-xl text-center max-w-2xl mb-12">
        Развиваем творческий потенциал вашего ребенка через увлекательное обучение
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="btn-primary">Записаться на занятие</button>
        <button className="btn-secondary">Узнать больше</button>
      </div>
    </div>
  );
};

export default Hero;