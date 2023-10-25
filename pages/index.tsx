import { GetStaticProps } from "next";
import Carousel from "../src/components/Carousel";
import CarouselCar from "../src/components/CarouselCar";

export type Car = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

type Props = {
  cars: Car[];
};

export default function HomePage({ cars }: Props) {
  return (
    <div>
      <Carousel>
        {cars.map((car) => (
          <CarouselCar key={car.id} car={car} />
        ))}
      </Carousel>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = (await import("../public/api/cars.json")).default as Car[];

  return {
    props: {
      cars: data,
    },
  };
};
