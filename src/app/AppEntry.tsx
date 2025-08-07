import RouterProvider from '@app/providers/RouterProvider';
import StoreProvider from '@app/providers/StoreProvider';

function AppEntry() {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
}

export default AppEntry;
