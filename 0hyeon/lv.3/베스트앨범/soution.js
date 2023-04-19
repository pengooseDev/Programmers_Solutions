const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
function solution(genres, plays) {
  const genresMap = new Map();
  genres
    .map((genre, idx) => [genre, plays[idx]])
    .forEach(([genre, play], idx) => {
      const data = genresMap.get(genre) || { total: 0, songs: [] };
      genresMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, idx }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });
  return [...genresMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((el) => el[1].songs)
    .map((el) => el.idx);
}
console.log(solution(genres, plays));
