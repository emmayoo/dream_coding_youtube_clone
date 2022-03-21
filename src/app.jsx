import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import Videos from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  
  const search = query => {
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  }
  
  // 텅 빈 배열을 넘기면, mount에만 실행됨. (update x)
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <Videos videos={videos} />
    </div>
  );
}

export default App;
