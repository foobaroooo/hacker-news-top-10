export async function fetchTop10News(url){
    const response = await fetch(url)
        .then(response => response.json())
        .then(data => data.slice(0, 10))
        .then(newsIds => {
            return Promise.all(newsIds.map(newsId => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)
                            .then(response => response.json())
                            //.then(data => console.log(data))
            }))
        })
        .catch(error => console.error(error));
    
    console.log(response);

    return response;
  }
