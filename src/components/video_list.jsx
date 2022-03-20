import Video from "./video_item";

const VideoList = ({ videos }) => {
	return (
		videos.map(video => <Video key={video.id} video={video}/>)
	)
};

export default VideoList;