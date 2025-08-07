import { store } from '@app/store';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

type RouterProviderProps = {
  children: ReactNode;
};

const RouterProvider = ({ children }: RouterProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RouterProvider;
