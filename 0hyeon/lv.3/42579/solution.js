const genres = ["classics","pop","classics","classics","pop"];
const plays = [500,600,150,800,2500]
function solution(genres, plays) {
  const genreMap = new Map();
      //Map setting
      genres
      .map((genre,index)=> [genre,plays[index]])//index + plays 
      .forEach(([genre,play],index) => {//장르,플레이수 꺼내고
          const data = genreMap.get(genre)||{total:0,songs:[]}// 키값을 꺼내고 없으면 || 뒤에 초기세팅
          genreMap.set(genre,{
              total: data.total + play,
              songs: [...data.songs, {play,index}]
                  .sort((a,b)=>b.play-a.play)
                  .slice(0,2)
          })
      })
      //Map사용
      return [...genreMap.entries()]
        .sort((a,b)=>b[1].total - a[1].total)
        .flatMap((item)=>item[1].songs)
        .map((song)=>song.index)
  
}
console.log(
  solution(genres,plays)
)