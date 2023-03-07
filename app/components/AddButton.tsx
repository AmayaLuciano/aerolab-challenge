'use client';
import { addCoins, getUser } from '@/utils/getProducts';
import React, { FC, useEffect, useState } from 'react';
import { useGlobalContext } from '../context/store';

export const AddButton: FC = () => {
  const { user, setUser, setBuying, buying } = useGlobalContext();
  const [displayBtn, setDisplayBtn] = useState<boolean>(false);

  const handleAdd = (amount: number) => {
    setBuying(true);
    addCoins(amount).then(() => {
      getUser()
        .then((res) => {
          setUser(res);
        })
        .finally(() => {
          setBuying(false);
        });
    });
    console.log(amount);
  };
  return (
    <>
      <button onClick={() => setDisplayBtn(!displayBtn)}>➕</button>
      {displayBtn && (
        <div className=" flex flex-col absolute top-14 bg-slate-200 p-3 right-[30px] rounded-lg px-10">
          <button
            onClick={() => {
              handleAdd(1000), setDisplayBtn(false);
            }}
            className="text-slate-500 mb-1 hover:text-black"
          >
            + 1000
          </button>
          <button
            onClick={() => {
              handleAdd(5000), setDisplayBtn(false);
            }}
            className="text-slate-500 mb-1 hover:text-black"
          >
            + 5000
          </button>
          <button
            onClick={() => {
              handleAdd(7500), setDisplayBtn(false);
            }}
            className="text-slate-500 hover:text-black"
          >
            + 7500
          </button>
        </div>
      )}
    </>
  );
};
