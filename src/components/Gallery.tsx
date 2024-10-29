import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const images = [
    "photo-1461749280684-dccba630e2f6",
    "photo-1581090464777-f3220bbe1b8b",
    "photo-1469474968028-56623f02e42e",
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Наша галерея</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((imageId, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=800&q=80`}
                    alt={`Галерея ${index + 1}`}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;