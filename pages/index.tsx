import { GetStaticProps } from "next";
import { Car } from "./api/cars";

type Props = {
  cars: Car[];
};

export default function HomePage({ cars }: Props) {
  return (
    <div>
      <h1>Hello From home</h1>
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
