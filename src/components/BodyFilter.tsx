import { Car } from "../../pages";
import styles from "./BodyFilter.module.css";

type Props = {
  cars: Car[];
  setCars: (cars: Car[]) => void;
};

export default function BodyFilter({ cars, setCars }: Props) {
  const bodyTypes = cars.reduce((acc, car) => {
    if (acc.includes(car.bodyType)) return acc;
    return [...acc, car.bodyType];
  }, [] as string[]);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedType = event.target.value;
    if (selectedType === "all") {
      setCars(cars);
      return;
    }
    const filteredCars = cars.filter((car) => car.bodyType === selectedType);
    setCars(filteredCars);
  }
  return (
    <form className={styles.form}>
      <label className={styles.label} htmlFor="typeFilter">
        Filter by type
      </label>
      <select
        className={styles.select}
        name="typeFilter"
        onChange={handleChange}
      >
        <option value="all">All</option>
        {bodyTypes.map((car) => (
          <option key={car} value={car}>
            {car}
          </option>
        ))}
      </select>
    </form>
  );
}
