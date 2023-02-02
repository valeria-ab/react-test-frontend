import { FC, useEffect } from "react";
import carsJSON from "../../../fake_cars.json";
import { Query } from "../../../graphql/generated";

const Cars: FC = () => {
  const cars: Query["cars"] = carsJSON;

  useEffect(() => {

  }, [])

  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          <div css={{ color: car.color.toLowerCase() }}>
            {car.brand}
            <img
              src={car?.img_src ?? undefined}
              alt={`${car.brand} ${car.model}`}
              css={{ maxWidth: "100px" }}
            />
            <span>{car.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
