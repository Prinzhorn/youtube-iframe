export function load(callback: (YT: YT) => void): void;

export interface YT {
  Player: Constructable<
    Player,
    [elementID: string, options: YoutubePlayerOptions]
  >;
}

export class Player {
  constructor(elementID: string, options: YoutubePlayerOptions);
}

export interface YoutubePlayerOptions {
  height: number;
  width: number;
  videoId: string;
  playerVars?: YoutubePlayerVars;
  events: PartialRecord<
    YoutubePlayerEventTriggers,
    (e: YoutubePlayerEvent) => void
  >;
}

export type YoutubePlayerEventTriggers =
  | "onReady"
  | "onStateChange"
  | "onPlaybackQualityChange"
  | "onPlaybackRateChange"
  | "onError"
  | "onApiChange";

export interface YoutubePlayerVars {
  autoplay?: 0 | 1;
  cc_load_policy?: 0 | 1;
  cc_lang_pref?: string;
  color?: "red" | "white";
  controls?: 0 | 1 | 2;
  disablekb?: 0 | 1;
  enablejsapi?: 0 | 1;
  end?: number;
  fs?: 0 | 1;
  hl?: string;
  iv_load_policy?: 1 | 3;
  list?: string;
  listType?: "playlist" | "search" | "user_uploads";
  loop?: 0 | 1;
  modestbranding?: 0 | 1;
  origin?: string;
  playlist?: string;
  playsinline?: 0 | 1;
  rel?: 0 | 1;
  start?: number;
}

export interface YoutubePlayerEvent {
  target: YoutubePlayerEventTarget;
}

export interface YoutubePlayerEventTarget extends EventTarget {
  H: boolean;
  M: string;
  S: { onReady: boolean };
  addCueRange(): void;
  clearVideo(): void;
  cuePlaylist(url: string | string[]): void;
  cueVideoById(
    id: string,
    startSeconds?: number,
    suggestedQuality?: string
  ): void;
  cueVideoByUrl(
    url: string,
    startSeconds?: number,
    suggestedQuality?: string
  ): void;
  getAvailablePlaybackRates(): number[];
  getAvailableQualityLevels(): string[];
  getCurrentTime(): number;
  getDebugText(): string;
  getDuration(): number;
  getMediaReferenceTime(): number;
  getPlaybackQuality(): string;
  getPlaybackRate(): number;
  getPlayerMode(): string;
  getPlayerState(): number;
  getPlaylist(): string[];
  getPlaylistId(): string;
  getPlaylistIndex(): number;
  getSize(): { width: number; height: number };
  getSphericalProperties(): {
    yaw: number;
    pitch: number;
    roll: number;
    fov: number;
    enableOrientationSensor: boolean;
  };
  getVideoBytesLoaded(): number;
  getVideoBytesTotal(): number;
  getVideoData(): any;
  getVideoLoadedFraction(): number;
  getVideoStartBytes(): number;
  getVideoUrl(): string;
  getVolume(): number;
  hideVideoInfo(): void;
  isMuted(): boolean;
  isVideoInfoVisible(): boolean;
  loadModule(module: string): void;
  loadPlaylist(
    url: string | string[],
    index?: number,
    startSeconds?: number,
    suggestedQuality?: string
  ): void;
  loadVideoById(
    id: string,
    startSeconds?: number,
    suggestedQuality?: string
  ): void;
  loadVideoByUrl(
    url: string,
    startSeconds?: number,
    suggestedQuality?: string
  ): void;
  mute(): void;
  mutedAutoplay(): boolean;
  nextVideo(): void;
  pauseVideo(): void;
  playVideo(): void;
  playVideoAt(index: number): void;
  preloadVideoById(
    id: string,
    startSeconds?: number,
    suggestedQuality?: string
  ): void;
  previousVideo(): void;
  removeCueRange(id: string): void;
  seekTo(seconds: number, allowSeekAhead?: boolean): void;
  setLoop(loopPlaylists: boolean): void;
  setPlaybackQuality(suggestedQuality: string): void;
  setPlaybackRate(suggestedRate: number): void;
  setShuffle(shufflePlaylist: boolean): void;
  setSphericalProperties(properties: {
    yaw?: number;
    pitch?: number;
    roll?: number;
    fov?: number;
    enableOrientationSensor?: boolean;
  }): void;
  setVolume(volume: number): void;
  showVideoInfo(): void;
  stopVideo(): void;
  unMute(): void;
  unloadModule(module: string): void;
  videoTitle: string;
}

interface Constructable<T, A extends any[]> {
  new (...args: A): T;
}

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
