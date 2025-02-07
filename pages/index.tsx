import styles from "../public/css/home.module.css";
import { GetStaticProps } from "next";
import Carousel from "../src/components/Carousel";
import CarouselCar from "../src/components/CarouselCar";
import { useState } from "react";
import BodyFilter from "../src/components/BodyFilter";

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
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

  return (
    <main className={styles.main}>
      <BodyFilter cars={cars} setCars={setFilteredCars} />
      <Carousel items={filteredCars.length}>
        {filteredCars.map((car) => (
          <CarouselCar key={car.id} car={car} />
        ))}
      </Carousel>
    </main>
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
