import styles from "./CarouselCar.module.css";
import Image from "next/image";
import { Car } from "../../pages";

type Props = {
  car: Car;
};

export default function CarouselCar({ car }: Props) {
  const { bodyType, id, imageUrl, modelName, modelType } = car;

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.bodyType}>{bodyType.toUpperCase()}</p>
        <div className={styles.extendedModel}>
          <h3 className={styles.model}>{modelName}</h3>
          <p>{modelType}</p>
        </div>
      </div>
      <div className={styles.image}>
        <Image src={imageUrl} alt={modelName} layout="fill" />
      </div>
      <div className={styles.links}>
        <a href={`/car/${id}/learn`}>
          <span>
            LEARN
            <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 1.5l4 4-4 4"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
        <a href={`/car/${id}/shop`}>
          <span>
            SHOP
            <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 1.5l4 4-4 4"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
