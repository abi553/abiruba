import React from 'react'

function UseEffect() {


const FetchDataExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  UseEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(json); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData(); 
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {data.slice(0, 10).map(post => (
            <li key={post.id} className="border p-2 rounded">
              <h2 className="font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
}


export default UseEffect