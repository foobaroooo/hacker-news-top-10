import HackerNewsTop10 from "./HackerNewsTop10";
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <HackerNewsTop10 />
    </QueryClientProvider>
  );
}

export default App;
