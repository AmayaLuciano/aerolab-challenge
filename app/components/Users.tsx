import { getUser } from '@/utils/getProducts';
import React, { useState } from 'react';
import { User } from '../types/types';
import UserData from './UserData';

// interface UserProps {
//   data: User;
// }

const Users = async () => {
  const data = await getUser();

  return <UserData data={data} />;
};

export default Users;
