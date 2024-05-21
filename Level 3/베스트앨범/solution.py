class Song:
    def __init__(self, id, play):
        self.id = id
        self.play = play


def solution(genres, plays):
    answer = []

    genre_dict = {}
    play_dict = {}

    for index, (genre, play) in enumerate(zip(genres, plays)):
        if genre not in genre_dict:
            genre_dict[genre] = []
            play_dict[genre] = 0

        genre_dict[genre].append(Song(index, play))
        play_dict[genre] += play

    sorted_genres = sorted(play_dict.items(), key=lambda x: x[1], reverse=True)

    for genre, _ in sorted_genres:
        sorted_songs = sorted(genre_dict[genre], key=lambda song: (-song.play, song.id))
        answer.extend(song.id for song in sorted_songs[:2])

    return answer
