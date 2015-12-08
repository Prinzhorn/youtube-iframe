(function(window) {
	var YouTubeIframeLoader = {
		src: 'https://www.youtube.com/iframe_api',
		loading: false,
		loaded: false,
		listeners: [],

		load: function(callback) {
			var _this = this;
			this.listeners.push(callback);

			if(this.loaded) {
				setTimeout(function() {
					_this.done();
				});
				return;
			}

			if(this.loading) {
				return;
			}

			this.loading = true;

			window.onYouTubeIframeAPIReady = function() {
				_this.loaded = true;
				_this.done();
			};

			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = this.src;
			document.body.appendChild(script);
		},

		done: function() {
			delete window.onYouTubeIframeAPIReady;

			for(var listenerIndex = 0; listenerIndex < this.listeners.length; listenerIndex++) {
				this.listeners[listenerIndex](window.YT);
			}

			this.listeners.length = 0;
		}
	};

	if(typeof module !== 'undefined' && module.exports) {
		module.exports = YouTubeIframeLoader;
	} else {
		window.YouTubeIframeLoader = YouTubeIframeLoader;
	}
}(window));
