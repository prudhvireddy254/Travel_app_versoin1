export interface Reel {
  id: string;
  video: string;
  caption: string;
}

const reels: Reel[] = [
  { id: '1', video: 'https://www.w3schools.com/html/mov_bbb.mp4', caption: 'First Reel!' },
  { id: '2', video: 'https://www.w3schools.com/html/movie.mp4', caption: 'Second Reel!' },
];

export default reels;