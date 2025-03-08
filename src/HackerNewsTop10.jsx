import { useQuery } from 'react-query';
import { fetchTop10News } from './hn-api';

const HackerNewsTop10 = () => {
  const URL = "https://hacker-news.firebaseio.com/v0/topstories.json";

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['top10News'],
    queryFn: () => fetchTop10News(URL)
  });

  if (isError) {
    return <span>{error.message}</span>  
  }


  return ( 
    <main>
      <h1 className='text-center mb-5 text-2xl font-bold'>Top 10 Hacker News</h1>
      <ol className='list-decimal'>
        {isLoading ? 
          <span className='animate-pulse'>Loading...</span>
          : 
          data.map((news) => (
            <li key={news.id} className='pb-2'>
              <div>
                <p><a href={news.url} className='text-blue-500 hover:underline'>{news.title}</a></p>
                <p>Score: {news.score}, By: {news.by}</p>
              </div>
            </li>
          ))
        }
      </ol>
  </main>
  )
};

export default HackerNewsTop10;
