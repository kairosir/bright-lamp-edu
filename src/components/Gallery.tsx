import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Gallery = () => {
  const images = [
    "photo-1581090464777-f3220bbe1b8b",
    "photo-1465146344425-f00d5f5c8f07",
    "photo-1504893524553-b855bce32c67",
    "photo-1461749280684-dccba630e2f6",
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in font-display">
          Наша галерея
        </h2>
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((imageId, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl group">
                  <img
                    src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=800&q=80`}
                    alt={`Галерея ${index + 1}`}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;