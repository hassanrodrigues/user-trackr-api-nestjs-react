import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export default queryClient;
