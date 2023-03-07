'use client';
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { User } from '../types/types';
import { StoreContext } from './StoreContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GlobalContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({
    createDate: '',
    name: '',
    points: 0,
    redeemHistory: [],
    __v: 0,
    _id: '',
  });

  const [buying, setBuying] = useState<boolean>(false);
  return (
    <StoreContext.Provider value={{ user, setUser, buying, setBuying }}>
      {children}
    </StoreContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(StoreContext);
