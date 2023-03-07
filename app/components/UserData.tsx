'use client';
import { getUser } from '@/utils/getProducts';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/store';
import { User } from '../types/types';
import { RiCopperCoinFill } from 'react-icons/ri';
import { AddButton } from './AddButton';

interface UserProps {
  data: User;
}

const UserData = ({ data }: UserProps) => {
  const { user, setUser, buying } = useGlobalContext();

  useEffect(() => {
    getUser().then((res) => {
      setUser(res);
    });

    console.log(user);
  }, [buying]);
  return (
    <>
      <h3 className="text-slate-600 mt-1">{user?.name}</h3>
      <div className="flex mx-2 bg-gray-200 rounded-xl px-3 text-gray-500 items-center py-1">
        <p className="text-center align-middle  text-slate-600">
          {user?.points}{' '}
        </p>
        <button>
          <RiCopperCoinFill className="text-yellow-400" size={'1.2rem'} />
        </button>
      </div>
      <AddButton />
    </>
  );
};

export default UserData;
