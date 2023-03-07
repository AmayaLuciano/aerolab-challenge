import { createContext, Dispatch, SetStateAction } from 'react';
import { User } from '../types/types';

interface ContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  buying: boolean;
  setBuying: Dispatch<SetStateAction<boolean>>;
}

export const StoreContext = createContext<ContextProps>({} as ContextProps);
