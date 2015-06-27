# youtube-iframe
Wrapper for dynamically loading the YouTube iframe api script

```
npm install youtube-iframe
```

Can be used with browserify or global `window.YouTubeIframeLoader`.


```js
var YouTubeIframeLoader = require('youtube-iframe');

YouTubeIframeLoader.load(function(YT) {
	new YT.Player('player1', {
		height: '390',
		width: '640',
		videoId: 'M7lc1UVf-VE'
	});
});

YouTubeIframeLoader.load(function(YT) {
	new YT.Player('player2', {
		height: '390',
		width: '640',
		videoId: 'dQw4w9WgXcQ'
	});
});
```


## Changelog

### 1.0.1

* Always use https instead of the protocol-relative URL (#1)