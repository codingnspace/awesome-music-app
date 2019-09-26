import React from 'react';
 import './App.css';

const artists = [
  {
    id: 0,
    name: "Beyonce",
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beyonce-1554742143.jpg?crop=0.502xw:1.00xh;0.270xw,0&resize=480:*",
    bio: '',
    num_of_listeners: '',
    albums: [
      {
        id: '0',
        name: 'Dangerously In Love',
        artist: 'Beyonce',
        release_year: '2003',
        num_of_streams: 4,
        cover: 'https://content-images.p-cdn.com/images/public/int/4/2/6/8/696998638624_1080W_1080H.jpg',
        review: '',
        songs: [
          {
            id: '0',
            name: 'Crazy in Love',
            length: '3:57',
            num_of_streams: '0'
          },
          {
            id: '1',
            name: 'Naughty Girl',
            length: '3:29',
            num_of_streams: '2'
          },
          {
            id: '2',
            name: 'Baby Boy',
            length: '4:05',
            num_of_streams: '0'
          },
          {
            id: '3',
            name: 'Hip Hop Star',
            length: '3:42',
            num_of_streams: '5'
          },
          {
            id: '4',
            name: 'Be With You',
            length: '4:21',
            num_of_streams: '5'
          },
          {
            id: '5',
            name: 'Me, Myself and I',
            length: '5:02',
            num_of_streams: '0'
          },
          {
            id: '6',
            name: 'Yes',
            length: '4:11',
            num_of_streams: '5'
          },
          {
            id: '7',
            name: 'Signs',
            length: '3:42',
            num_of_streams: '5'
          },
          {
            id: '8',
            name: 'Speechless',
            length: '3:56',
            num_of_streams: '5'
          },
          {
            id: '9',
            name: "That's How You Like It",
            length: '2:45',
            num_of_streams: '5'
          },
          {
            id: '10',
            name: 'The Close I Get To You',
            length: '5:11',
            num_of_streams: '5'
          },
          {
            id: '11',
            name: 'Dangerously In Love 2',
            length: '4:52',
            num_of_streams: '5'
          },
          {
            id: '12',
            name: 'Beyonce Interlude',
            length: '3:21',
            num_of_streams: '5'
          },
          {
            id: '13',
            name: 'Gift From Virgo',
            length: '6:12',
            num_of_streams: '5'
          },
          {
            id: '14',
            name: 'Daddy',
            length: '3:05',
            num_of_streams: '5'
          },
        ]
      },
      {
        id: '1',
        name: "B'Day",
        artist: 'Beyonce',
        release_year: '2006',
        num_of_streams: 3,
        cover: 'https://content-images.p-cdn.com/images/public/int/8/0/9/3/888880133908_1080W_1080H.jpg',
        review: '',
        songs: [
          {
            id: '0',
            name: 'Deja Vu (Feat. Jay-Z',
            length: '4:44',
            num_of_streams: '3'
          },
          {
            id: '1',
            name: 'Get Me Bodied',
            length: '3:43',
            num_of_streams: '5'
          },
          {
            id: '2',
            name: 'Suga Mama',
            length: '2:36',
            num_of_streams: '5'
          },
          {
            id: '3',
            name: 'Upgrade U (Feat. Jay-Z)',
            length: '4:53',
            num_of_streams: '2'
          },
          {
            id: '4',
            name: 'Ring The Alarm',
            length: '4:05',
            num_of_streams: '2'
          },
          {
            id: '5',
            name: 'Kitty Kat',
            length: '4:32',
            num_of_streams: '5'
          },
          {
            id: '6',
            name: 'Freakum Dress',
            length: '4:30',
            num_of_streams: '5'
          },
          {
            id: '7',
            name: 'Green Light',
            length: '2:49',
            num_of_streams: '5'
          },
          {
            id: '8',
            name: 'Irreplaceable',
            length: '4:09',
            num_of_streams: '2'
          },
          {
            id: '9',
            name: 'Resentment',
            length: '6:09',
            num_of_streams: '5'
          },
          {
            id: '10',
            name: 'Encore For The Fans',
            length: '3:45',
            num_of_streams: '5'
          },
          {
            id: '11',
            name: 'Lisent (From The Motion Picture Dreamgirls)',
            length: '4:27',
            num_of_streams: '5'
          },
          {
            id: '12',
            name: 'Get Me Bodied (Extended Mix)',
            length: '3:42',
            num_of_streams: '5'
          },
        ]
      },
      {
        id: '2',
        name: 'I Am...Sasha Fierce',
        release_year: '2008',
        num_of_streams: 4,
        cover: 'https://content-images.p-cdn.com/images/public/int/3/2/2/9/886971949223_1080W_1080H.jpg',
        review: '',
        songs: [
          {
            id: '0',
            name: 'If I Were A Boy',
            length: '3:34',
            num_of_streams: '4'
          },
          {
            id: '1',
            name: 'Halo',
            length: '5:02',
            num_of_streams: '3'
          },
          {
            id: '2',
            name: 'Disappear',
            length: '4:09',
            num_of_streams: '5'
          },
          {
            id: '3',
            name: 'Broken-Hearted Girl',
            length: '4:54',
            num_of_streams: '5'
          },
          {
            id: '4',
            name: 'Ave Maria',
            length: '2:41',
            num_of_streams: '5'
          },
          {
            id: '5',
            name: 'Satellites',
            length: '3:22',
            num_of_streams: '5'
          },
          {
            id: '6',
            name: 'Single Ladies (Put A Ring On It)',
            length: '3:49',
            num_of_streams: '1'
          },
          {
            id: '7',
            name: 'Radio',
            length: '3:29',
            num_of_streams: '5'
          },
          {
            id: '8',
            name: 'Diva',
            length: '3:44',
            num_of_streams: '3'
          },
          {
            id: '9',
            name: 'Sweet Dreams',
            length: '5:49',
            num_of_streams: '5'
          },
          {
            id: '10',
            name: 'Video Phone',
            length: '3:00',
            num_of_streams: '5'
          }
        ]
      },
      {
        id: '3',
        name: '4',
        release_year: '2013',
        num_of_streams: 2,
        cover: 'https://content-images.p-cdn.com/images/public/int/1/9/9/2/886443912991_1080W_1080H.jpg',
        review: '',
        songs: [
          {
            id: '0',
            name: 'Love On Top',
            length: '3:41',
            num_of_streams: '5'
          },
          {
            id: '1',
            name: 'Party',
            length: '3:46',
            num_of_streams: '3'
          },
          {
            id: '2',
            name: 'Schoolin Life',
            length: '4:32',
            num_of_streams: '5'
          },
          {
            id: '3',
            name: 'Countdown',
            length: '4:23',
            num_of_streams: '4'
          },
          {
            id: '4',
            name: 'I Miss You',
            length: '4:21',
            num_of_streams: '5'
          },
          {
            id: '5',
            name: 'Dance For You',
            length: '3:49',
            num_of_streams: '5'
          },
          {
            id: '6',
            name: 'I Care',
            length: '4:43',
            num_of_streams: '4'
          },
          {
            id: '7',
            name: 'Rather Die Young',
            length: '5:54',
            num_of_streams: '5'
          },
          {
            id: '8',
            name: '1+1',
            length: '3:58',
            num_of_streams: '5'
          },
          {
            id: '9',
            name: 'End Of Time',
            length: '4:32',
            num_of_streams: '5'
          },
          {
            id: '10',
            name: 'Run The World (Girls)',
            length: '4:12',
            num_of_streams: '1'
          },
          {
            id: '11',
            name: 'Start Over',
            length: '3:42',
            num_of_streams: '5'
          },
          {
            id: '12',
            name: 'I Was Here',
            length: '5:21',
            num_of_streams: '5'
          }
        ]
      },
      {
        id: '4',
        name: 'BEYONCE',
        release_year: '2014',
        num_of_streams: 0,
        cover: 'https://content-images.p-cdn.com/images/public/int/5/2/0/5/886444975025_1080W_1080H.jpg',
        review: '',
        songs: [
          {
            id: '0',
            name: 'Pretty Hurts',
            length: '4:56',
            num_of_streams: '2'
          },
          {
            id: '1',
            name: 'Haunted',
            length: '6:34',
            num_of_streams: '3'
          },
          {
            id: '2',
            name: 'Drunk In Love',
            length: '3:48',
            num_of_streams: '1'
          },
          {
            id: '3',
            name: 'Blow',
            length: '4:12',
            num_of_streams: '4'
          },
          {
            id: '4',
            name: 'No Angel',
            length: '4:34',
            num_of_streams: '4'
          },
          {
            id: '5',
            name: 'Partition',
            length: '4:36',
            num_of_streams: '1'
          },
          {
            id: '6',
            name: 'Jealous',
            length: '4:23',
            num_of_streams: '5'
          },
          {
            id: '7',
            name: 'Rocket',
            length: '5:34',
            num_of_streams: '5'
          },
          {
            id: '8',
            name: 'Mine',
            length: '3:54',
            num_of_streams: '5'
          },
          {
            id: '9',
            name: 'XO',
            length: '4:24',
            num_of_streams: '5'
          },
          {
            id: '10',
            name: '***Flawless',
            length: '4:01',
            num_of_streams: '2'
          },
          {
            id: '11',
            name: 'Superpower',
            length: '3:52',
            num_of_streams: '5'
          },
          {
            id: '12',
            name: 'Heaven',
            length: '4:39',
            num_of_streams: '5'
          },
          {
            id: '13',
            name: 'Blue',
            length: '4:06',
            num_of_streams: '5'
          },
          {
            id: '14',
            name: '7/11',
            length: '3:59',
            num_of_streams: '3'
          },
        ]
      },
      {
        id: '5',
        name: 'Lemonade',
        release_year: '2016',
        num_of_streams: 0,
        cover: 'https://content-images.p-cdn.com/images/public/int/1/1/7/0/886447680711_1080W_1080H.jpg',
        review: '',
        songs: [
          {
            id: '0',
            name: 'Pray You Catch Me',
            length: '5:11',
            num_of_streams: '5'
          },
          {
            id: '1',
            name: 'Hold Up',
            length: '4:32',
            num_of_streams: '5'
          },
          {
            id: '2',
            name: "Don't Hurt Yourself (Feat. Jack White)",
            length: '4:29',
            num_of_streams: '5'
          },
          {
            id: '3',
            name: 'Sorry',
            length: '3:32',
            num_of_streams: '1'
          },
          {
            id: '4',
            name: '6 Inch (Feat. The Weeknd)',
            length: '4:54',
            num_of_streams: '3'
          },
          {
            id: '5',
            name: 'Daddy Lessons',
            length: '3:49',
            num_of_streams: '3'
          },
          {
            id: '6',
            name: 'Love Drought',
            length: '4:22',
            num_of_streams: '5'
          },
          {
            id: '7',
            name: 'Sandcastles',
            length: '3:45',
            num_of_streams: '5'
          },
          {
            id: '8',
            name: 'Forward (Feat. James Blake)',
            length: '3:44',
            num_of_streams: '5'
          },
          {
            id: '9',
            name: 'Freedom (Feat. Kendrick Lamar)',
            length: '4:27',
            num_of_streams: '5'
          },
          {
            id: '10',
            name: 'All Night',
            length: '4:15',
            num_of_streams: '5'
          },
          {
            id: '11',
            name: 'Formation',
            length: '4:11',
            num_of_streams: '1'
          },
        ]
      },
    ]
  },
  {
    id: 1,
    name: "Rihanna",
    img: "https://content-images.p-cdn.com/images/f3/56/25/ed/3bd042768371b66dc7bae443/_500W_500H.jpg"
  },
  {
    id: 2,
    name: "Lizzo",
    img: "https://content-images.p-cdn.com/images/1a/e5/23/2a/c1b343dc8638c21155ebfc95/_500W_500H.jpg"
  },
  {
    id: 3,
    name: "Willow",
    img: "https://content-images.p-cdn.com/images/90/1f/9d/d3/d4c94bf5b971deb093d4a5f1/_500W_500H.jpg"
  },
  {
    id: 4,
    name: "Alicia Keys",
    img: "https://content-images.p-cdn.com/images/dc/d0/68/9d/a37b48e7b53990b87230d389/_500W_500H.jpg" 
  },
  {
    id: 5,
    name: "Kehlani",
    img: "https://content-images.p-cdn.com/images/a3/b4/39/b5/c5b245c589f920ef4aea926f/_500W_500H.jpg"
  },
  {
    id: 6,
    name: "Nicki Minaj",
    img: "https://content-images.p-cdn.com/images/1f/b3/e8/d7/0c814aba88daab18ff6332a8/_500W_500H.jpg"
  },
  {
    id:7,
    name: "Mila J",
    img: "https://content-images.p-cdn.com/images/9c/b1/98/de/d6c7483fbd08b8536f6e355c/_500W_500H.jpg" 
  },
  {
    id: 8,
    name:"Missy Elliott",
    img: "https://content-images.p-cdn.com/images/2c/41/30/23/8e264dfd9ff96d6b918cd9ba/_500W_500H.jpg"
  },
  {
    id:9,
    name: "Cardi B",
    img: "https://content-images.p-cdn.com/images/4a/be/b9/d9/50c648dab138a7daaffe42e5/_500W_500H.jpg"
  }
];

function App() {
  const artistList = artists
    .sort((a,b) => {
      const textA = a.name;
      const textB = b.name;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    .map(artist => {
    return (
      <div className="artist" style={{width: '188px', display: 'inline-block', height: '188px',}}>
        <img alt={artist.name} src={artist.img} key={artist.id} style={{height: '100%', width: '100%', borderRadius: '50%'}} />
        <p>{artist.name}</p>
      </div>
    )
  })

  // console.log(artists[0])
  const song = artists[1].albums[0].songs[0]
  const songUI = (
    <div className="song">
      <div className="song-number" style={{display: 'inline-block'}}>{song.id == 0 ? 1 : song.id +1}</div>
      <div className="song-name" style={{display: 'inline-block'}}>{song.name}</div>
      <div className="song-length" style={{display: 'inline-block'}}>{song.length}</div>
    </div>
  )

  const songList = artists[1].albums[0].songs.map(song => {
    const songId = parseInt(song.id, 10)
    return (
      <div className="song">
        <div className="song-number" style={{display: 'inline-block'}}>{songId === 0 ? 1 : songId +1}</div>
        <div className="song-name" style={{display: 'inline-block'}}>{song.name}</div>
        <div className="song-length" style={{display: 'inline-block'}}>{song.length}</div>
      </div>
    )
  })

  const album = artists[1].albums[0]
  const albumUI = (
    <div className="album">
      <div className="album-cover-container">
        <img src={album.cover} alt={album.name} />
      </div>
      <div className="album-info-songs-wrapper">
        <div className="album-info">
          <h3>{album.name}</h3>
          <h4>Album by {album.artist}</h4>
          <h5>{album.songs.length} songs - {album.release_year}</h5>
        </div>
        <div className="album-songs">
          {songList}
        </div>
      </div>
    </div>
  )
  return (
    <div className="App">
      <h3>Artists</h3>
      {artistList}

      <h3>Song</h3>
      {songUI}

      <h3>Song List</h3>
      {songList}

      <h3>Album UI</h3>
      {albumUI}
    </div>
  );
}

export default App;
