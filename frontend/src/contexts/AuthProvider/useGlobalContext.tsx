import { useContext } from 'react';
import { AuthContext } from '.';

export function useGlobalContext() {
  return useContext(AuthContext);
}
