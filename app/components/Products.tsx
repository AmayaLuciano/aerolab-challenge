'use client';
import { redeemProduct } from '@/utils/getProducts';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { RiCopperCoinFill } from 'react-icons/ri';
import ReactPaginate from 'react-paginate';
import { useGlobalContext } from '../context/store';

import { Product } from '../types/types';
import HighestSortProducts from './HighestSortProducts';
import LowestSortProducts from './LowestSortProducts';

interface ProductsProps {
  data: Product[];
}

const Products: FC<ProductsProps> = ({ data }) => {
  const { user, setBuying } = useGlobalContext();
  const [products, setProducts] = useState<Product[]>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [productOrder, setProductOrder] = useState<
    'most recent' | 'lowest' | 'highest'
  >('most recent');

  const productsPerPage: number = 16;
  const pagesVisited: number = pageNumber * productsPerPage;

  const handleRedeem = (id: string) => {
    setBuying(true);
    redeemProduct(id).finally(() => {
      setBuying(false);
    });
  };

  const displayProducts = data
    ?.slice(pagesVisited, pagesVisited + productsPerPage)
    .map((products) => (
      <div
        key={products?._id}
        className="bg-white p-4 rounded-sm shadow-md w-52"
      >
        {products.cost > user?.points ? (
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

  const pageCount = Math.ceil(data?.length / productsPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div className="max-w-screen-lg	">
      <div className="mb-8 flex justify-between">
        <div className="flex">
          <h2 className="mt-1 py-2 text-slate-700 border-solid border-r-2 pr-2">
            {pageNumber === 0 ? '16' : '32'} of 32 products
          </h2>
          {productOrder === 'most recent' ? (
            <button className="bg-cyan-400 p-2 px-4 mx-2 rounded-3xl text-white  font-semibold">
              Most Recent
            </button>
          ) : (
            <button
              className="bg-slate-100 p-2 px-4 mx-2 rounded-3xl text-slate-600"
              onClick={() => setProductOrder('most recent')}
            >
              Most Recent
            </button>
          )}

          {productOrder === 'highest' ? (
            <button className="bg-cyan-400 p-2 px-4 mx-2 rounded-3xl text-white font-semibold">
              Highest Price
            </button>
          ) : (
            <button
              className="bg-slate-100 p-2 px-4 mx-2 rounded-3xl text-slate-600"
              onClick={() => setProductOrder('highest')}
            >
              Highest Price
            </button>
          )}

          {productOrder === 'lowest' ? (
            <button className="bg-cyan-400 p-2 px-4 mx-2 rounded-3xl text-white font-semibold">
              Lowest Price
            </button>
          ) : (
            <button
              className="bg-slate-100 p-2 px-4 mx-2 rounded-3xl text-slate-600"
              onClick={() => setProductOrder('lowest')}
            >
              Lowest Price
            </button>
          )}
        </div>
        <div className="mt-2 ">
          <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'flex'}
            previousLinkClassName={'p-2 bg-slate-400 mx-2 rounded-lg hidden'}
            nextLinkClassName={'p-2 bg-slate-400 mx-2 rounded-lg hidden'}
            disabledClassName={'paginationDisabled'}
            activeClassName={' text-cyan-300 font-bold  '}
          />
        </div>
      </div>
      <hr className="mb-6 mt-[-15px]" />
      <div className="  grid sm:grid-cols-2 sm:ml-16 md:grid-cols-3 md:ml-0 lg:grid-cols-4 lg:ml-0 gap-4 mx-auto pb-8">
        {productOrder === 'most recent' && displayProducts}
        {productOrder === 'highest' && (
          <HighestSortProducts
            data={data}
            pagesVisited={pagesVisited}
            productsPerPage={productsPerPage}
            handleRedeem={handleRedeem}
          />
        )}
        {productOrder === 'lowest' && (
          <LowestSortProducts
            data={data}
            pagesVisited={pagesVisited}
            productsPerPage={productsPerPage}
            handleRedeem={handleRedeem}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
