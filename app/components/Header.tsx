import { addCoins, getAllProducts, getUser } from '@/utils/getProducts';
import React, { ReactNode, use, useEffect, useState } from 'react';
import { User } from '../types/types';
import { AddButton } from './AddButton';
import Users from './Users';

interface HeaderProps {}

const Header = () => {
  //   const [user, setUser] = useState<User | null>(null);

  return (
    <>
      {/* @ts-expect-error Server Component */}

      <Users />
    </>
  );
};

export default Header;

// estado global de usuario y modificarlo cuando se le agregan los puntos. El tema es que no se si necesito el useEffect.
