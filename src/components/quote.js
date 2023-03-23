import './quote.css';
import { useState, useEffect } from 'react';

const Quote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': '+vr1tnlQMc3Voc14zoN6pA==3tbo8UjlwHefFYHv',
          },
        });
        const json = await res.json();
        setData(await json);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (isLoading) {
    return (
      <div>
        {' '}
        <h1>Quote of the day</h1>
        <h2 className="load">Loading...</h2>
      </div>
    );
  }
  if (hasError) {
    return (
      <div>
        <h1>Quote of the day</h1>
        <h2 className="error">An error occured while loading the page</h2>
      </div>
    );
  }
  return (
    <div className="quote-container">
      <h1>Quote of the day</h1>
      <p className="quote">
        &quot;
        { data[0].quote }
        &quot;
      </p>
      <p className="author">
        -
        {data[0].author}
      </p>

    </div>
  );
};

export default Quote;
