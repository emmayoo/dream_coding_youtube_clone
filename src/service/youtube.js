class Youtube {
	constructor(key) {
		this.key = key;
		this.baseUrl = 'https://www.googleapis.com/youtube/v3'
		this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
	}

	async mostPopular() {
		try {
			const response = await fetch(
				`${this.baseUrl}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
				this.requestOptions
			);
			const { items } = await response.json();
			return items;
		} catch (error) {
			return console.log('error', error);
		}
	}
	
	search(query) {
		return fetch(
			`${this.baseUrl}/search?part=snippet&maxResults=25&type=video&q=${query}&key=${this.key}`,
			this.requestOptions
		)
      .then(response => response.json())
      .then(({ items }) => items.map(item => ({ ...item, id: item.id.videoId })))
      .catch(error => console.log('error', error));
	}
}

export default Youtube;