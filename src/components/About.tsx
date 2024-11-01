import { GraduationCap, Clock, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">О нашем центре</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-cream rounded-3xl p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">10+ программ обучения</h3>
            </div>
            <p className="text-lg">Разнообразные курсы для всестороннего развития вашего ребенка</p>
          </div>
          
          <div className="bg-cream rounded-3xl p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Гибкий график</h3>
            </div>
            <p className="text-lg">Занятия в удобное для вас время</p>
          </div>
          
          <div className="bg-cream rounded-3xl p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Малые группы</h3>
            </div>
            <p className="text-lg">До 8 детей в группе для максимального внимания к каждому</p>
          </div>
          
          <div className="bg-cream rounded-3xl p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Trophy className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Достижения</h3>
            </div>
            <p className="text-lg">Регулярные конкурсы и награды для мотивации учеников</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;