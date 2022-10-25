import audio1 from '../../public/audio1.wav';

/*
  ЗАБЛОЧЕННЫЕ ПЕСНИ ДОЛЖНЫ БЫТЬ В КОНЦЕ СПИСКА
*/

export const songsArr = [
  {
    title: 'ПО ГОРОДУ',
    url: 'PO_GORODU',
    defaultTime: 32,
    audio: audio1,
    Lyrics: 'Sergey Shmidt',
    recordingPerformance: `Vocals, guitars, bass – <span>Sergey Shmidt</span><br/>
        Drums –  Alexander Goubko `,
    Recording: `Steffen Burkhardt (<a
        class="songs-page__link"
        href="https://www.scb-music.de/"
        alt="scb-music"
        target="_blank"
        rel="noreferrer"
      >scb-music</a>)`,
    releaseDateText: 'MAY, 2022',
    releaseDate: '2022/05/13',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
    disabled: false,
    parameters: [
      //40 20 20
      {
        amplitude: 55,
        amplitudeMax: 75,
        amplitudeMin: 50,
        amplitudeIncrease: true,
        frequency: 0.95,
        offset: 150,
      },
      {
        amplitude: -40,
        amplitudeMax: -30,
        amplitudeMin: -50,
        amplitudeIncrease: true,
        frequency: 1.3,
        offset: -50,
      },
      {
        amplitude: 40,
        amplitudeMax: 42,
        amplitudeMin: 20,
        amplitudeIncrease: true,
        frequency: 1,
        offset: 0,
      },
    ],
  },
  {
    title: 'FATE',
    url: 'FATE',
    defaultTime: '0:00',
    audio: audio1,
    Lyrics: '2.Sergey Shmidt',
    recordingPerformance:
      '2.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '2.scb-music',
    releaseDateText: 'SONG IN PROGRESS',
    releaseDate: '01/03/2022',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
    disabled: true,
    parameters: [
      //40 20 20
      {
        amplitude: 40,
        amplitudeMax: 60,
        amplitudeMin: 35,
        amplitudeIncrease: true,
        frequency: 0.95,
        offset: 40,
      },
      {
        amplitude: -30,
        amplitudeMax: -25,
        amplitudeMin: -50,
        amplitudeIncrease: true,
        frequency: 1.3,
        offset: -150,
      },
      {
        amplitude: -40,
        amplitudeMax: -30,
        amplitudeMin: -50,
        amplitudeIncrease: true,
        frequency: 1,
        offset: 100,
      },
    ],
  },
  {
    title: 'В Am Я ТЕБЕ, БРАТ',
    url: 'V_Am_YA_TEBE_BRAT',
    audio: audio1,
    defaultTime: '0:00',
    Lyrics: '3.Sergey Shmidt',
    recordingPerformance:
      '3.Vocals, guitars, bass – Sergey Shmidt Drums – Bastian Arac',
    Recording: '3.scb-music',
    releaseDateText: 'SONG IN PROGRESS',
    releaseDate: '01/03/2022',
    spotify: 'https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5',
    appleMusic: 'https://music.apple.com/us/album/по-городу-single/1624085601',
    youtube:
      'https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68',
    disabled: true,
  },
];
