import { Palette, Brain, Heart, Star } from "lucide-react";

const features = [
  {
    icon: <Palette className="w-12 h-12" />,
    title: "Творческое развитие",
    description: "Уникальные методики для раскрытия творческого потенциала",
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "Интеллектуальный рост",
    description: "Развитие мышления и познавательных способностей",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Индивидуальный подход",
    description: "Внимание к особенностям каждого ребенка",
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: "Опытные педагоги",
    description: "Команда профессиональных преподавателей",
  },
];

const Features = () => {
  return (
    <div className="py-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;