function solution(genres, plays) {
  const answer = [];
  const genreSongs = new Map();
  const genrePlayTotalCount = new Map();

  for (let i = 0; i < genres.length; i++) {
    genreSongs.set(
      genres[i],
      genreSongs.get(genres[i])
        ? [...genreSongs.get(genres[i]), { id: i, play: plays[i] }]
        : [{ id: i, play: plays[i] }]
    );
    genrePlayTotalCount.set(
      genres[i],
      (genrePlayTotalCount.get(genres[i]) || 0) + plays[i]
    );
  }

  const sortedGenrePlayTotalCount = [...genrePlayTotalCount].sort(
    (a, b) => b[1] - a[1]
  );

  sortedGenrePlayTotalCount.forEach(([genre]) => {
    const twoSong = genreSongs
      .get(genre)
      .sort((a, b) => {
        if (a.play === b.play) {
          return a.id - b.id;
        }
        return b.play - a.play;
      })
      .map(({ id }) => id)
      .slice(0, 2);

    answer.push(...twoSong);
  });

  return answer;
}
