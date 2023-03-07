'use client';
import { getRedeemHistory } from '@/utils/getProducts';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RiCopperCoinFill } from 'react-icons/ri';
import { Product } from '../types/types';

const Redeem = () => {
  const [redeemed, setRedemeed] = useState<Product[]>();
  const [loadProducts, setLoadProducts] = useState<boolean>(false);
  const [parameter, setParameter] = useState<number>(20);

  useEffect(() => {
    getRedeemHistory().then((res) => {
      setRedemeed(res.reverse().slice(0, 10));
    });
  }, []);

  const loadMore = () => {
    setParameter(parameter + 10);
    setLoadProducts(true);
    getRedeemHistory()
      .then((res) => {
        setRedemeed(res.reverse().slice(0, parameter));
      })
      .finally(() => {
        setLoadProducts(false);
      });
  };

  return (
    <div>
      <div className="bg-slate-50">
        <h1 className="font-extrabold text-3xl mb-10 ml-10  pt-8">
          Redeemed Products:
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto pb-8">
          {redeemed?.map((product) => {
            return (
              <div
                key={product?.createDate}
                className="bg-white p-4 rounded-sm shadow-md w-60 m-auto"
              >
                <>
                  {' '}
                  <Image
                    src={product?.img.url}
                    alt="product"
                    width={150}
                    height={150}
                    className="mt-6 ml-7"
                  />
                  <hr />
                  <h3 className="text-xs text-gray-500">{product?.category}</h3>
                  <h3 className="text-sm">{product?.name}</h3>
                  <div className="flex">
                    {product?.cost}
                    <RiCopperCoinFill
                      className="text-yellow-400 ml-1 mt-0.5"
                      size={'1.2rem'}
                    />
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center bg-slate-50 pb-6">
        <button
          onClick={loadMore}
          className="bg-orange-500 p-4 rounded-xl text-white font-semibold "
        >
          Load More Redeems
        </button>
      </div>
    </div>
  );
};

export default Redeem;
