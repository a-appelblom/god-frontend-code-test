import Image from "next/image";
import { Car } from "../../pages";

type Props = {
  car: Car;
};

export default function CarouselCar({ car }: Props) {
  return (
    <div className="carousel-item active">
      <Image
        className="d-block w-100"
        src={car.imageUrl}
        alt={car.modelName}
        height={500}
        width={700}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>{car.modelName}</h5>
        <p>
          {car.bodyType} - {car.modelType}
        </p>
      </div>
    </div>
  );
}
