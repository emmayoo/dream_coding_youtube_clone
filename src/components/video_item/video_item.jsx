import styles from './video_item.module.css'

const VideoItem = ({ video, video: { snippet: { thumbnails, title, channelTitle } }, onVideoClick, display }) => {
	const displayType = display === 'grid' ? styles.grid : styles.list;
	return (
		<li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
			<div className={styles.video}>
				<img className={styles.thumbnail} src={thumbnails.medium.url} alt="video thumbnail" />
				<div className={styles.metadata}>
					<p className={styles.title}>{title}</p>
					<p className={styles.channel}>{channelTitle}</p>
				</div>
			</div>
		</li>
	)
};

export default VideoItem;