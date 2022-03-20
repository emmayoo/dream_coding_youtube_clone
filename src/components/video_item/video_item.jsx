import styles from './video_item.module.css'

const VideoItem = ({ video: { snippet: { thumbnails, title, channelTitle } } }) => (
	<li className={styles.container}>
		<div className={styles.video}>
			<img className={styles.thumbnail} src={thumbnails.medium.url} alt="video thumbnail" />
			<div className={styles.metadata}>
				<p className={styles.title}>{title}</p>
				<p className={styles.channel}>{channelTitle}</p>
			</div>
		</div>
	</li>
);

export default VideoItem;