import React from 'react';

export default function useData(url) {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return data;
}