import { useEffect, useState } from 'react';
import './app.css';
import Videos from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  
  // 텅 빈 배열을 넘기면, mount에만 실행됨. (update x)
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const baseUrl = 'https://www.googleapis.com/youtube';
    const key = 'AIzaSyCrwDXIt6c9nyJamwvTaWiJTT96tawmpBc';
    fetch(`${baseUrl}/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${key}`, requestOptions)
      .then(response => response.json())
      .then(({ items }) => {
        setVideos(items);
      })
      .catch(error => console.log('error', error));
  }, [])

  return (
    <Videos videos={videos} />
  );
}

export default App;
