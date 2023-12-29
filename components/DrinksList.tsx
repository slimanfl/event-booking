import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  drinks: any;
};

const DrinksList = ({ drinks }: Props) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink: any) => (
        <li key={drink.idDrink}>
          <Link href={`/drinks/${drink.idDrink}`}>
              <Image
                src={drink?.strDrinkThumb}
                alt="drinks image"
                width={250}
                height={250}
                className="rounded-lg"
              />
              <h1 className="text-xl mb-8">{drink.strDrink}</h1>
          </Link>
        </li>
      ))}
    </ul>
  );
};
<Link href="/drinks" className="btn btn-primary mt-8 mb-12">
  back to drinks
</Link>;

export default DrinksList;
