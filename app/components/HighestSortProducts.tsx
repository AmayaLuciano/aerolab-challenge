import Image from 'next/image';
import React, { FC, useState } from 'react';
import { RiCopperCoinFill } from 'react-icons/ri';
import { useGlobalContext } from '../context/store';
import { Product } from '../types/types';

interface ProductsProps {
  data: Product[];
  pagesVisited: number;
  productsPerPage: number;
  handleRedeem: Function;
}

const HighestSortProducts: FC<ProductsProps> = ({
  data,
  pagesVisited,
  productsPerPage,
  handleRedeem,
}) => {
  const { user, setBuying } = useGlobalContext();

  const newArray = [...data];

  const sortHigh = newArray
    ?.sort((a, b) => (a.cost > b.cost ? -1 : 1))
    .slice(pagesVisited, pagesVisited + productsPerPage);

  const sortProductsHigh = sortHigh?.map((products) => (
    <div key={products?._id} className="bg-white p-4 rounded-sm shadow-md w-52">
      {products.cost > user.points ? (
        <>
          <div className="flex justify-center bg-slate-100 rounded-lg text-gray-600">
            You need {products.cost - user.points}{' '}
            <RiCopperCoinFill
              className="text-yellow-400 ml-1 mt-0.5"
              size={'1.2rem'}
            />
          </div>
          <Image
            src={products?.img.url}
            alt="product"
            width={150}
            height={150}
          />
          <hr />
          <h3 className="text-gray-500 text-xs">{products?.category}</h3>
          <h3 className="text-gray-500 text-sm">{products?.name}</h3>
          <div className="flex text-gray-500">
            {products?.cost}{' '}
            <RiCopperCoinFill
              className="text-yellow-400 ml-1 mt-0.5"
              size={'1.2rem'}
            />
          </div>
          <button className="bg-slate-100 p-2 mt-2 text-gray-500 rounded-lg text-center w-full">
            redeem
          </button>
        </>
      ) : (
        <>
          {' '}
          <Image
            src={products?.img.url}
            alt="product"
            width={150}
            height={150}
            className="mt-6"
          />
          <hr />
          <h3 className="text-xs text-gray-500">{products?.category}</h3>
          <h3 className="text-sm">{products?.name}</h3>
          <div className="flex">
            {products?.cost}
            <RiCopperCoinFill
              className="text-yellow-400 ml-1 mt-0.5"
              size={'1.2rem'}
            />
          </div>
          <button
            onClick={() => handleRedeem(products._id)}
            className="bg-orange-500 p-2 mt-2 w-full text-center rounded-md text-white font-bold hover:bg-orange-400"
          >
            redeem
          </button>
        </>
      )}
    </div>
  ));

  return <>{sortProductsHigh}</>;
};

export default HighestSortProducts;
