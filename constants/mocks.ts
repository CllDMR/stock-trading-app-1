export type MovieDataType = {
  Actors?: string;
  Awards?: string;
  BoxOffice?: string;
  Country?: string;
  DVD?: string;
  Director?: string;
  Genre?: string;
  Language?: string;
  Metascore?: string;
  Plot?: string;
  Poster?: string;
  Production?: string;
  Rated?: string;
  Ratings?: {
    Source?: string;
    Value?: string;
  }[];
  Released?: string;
  Response?: string;
  Runtime?: string;
  Title?: string;
  Type?: string;
  Website?: string;
  Writer?: string;
  Year?: string;
  imdbID?: string;
  imdbRating?: string;
  imdbVotes?: string;
};

export const movieDatas: MovieDataType[] = [
  {
    Actors: "Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard",
    Awards: "Nominated for 2 Oscars. Another 10 wins & 4 nominations.",
    BoxOffice: "N/A",
    Country: "USA",
    DVD: "05 Oct 1999",
    Director: "Chris Columbus",
    Genre: "Comedy, Family",
    Language: "English",
    Metascore: "63",
    Plot:
      "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Production: "Twentieth Century Fox",
    Rated: "PG",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.6/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "65%"
      },
      {
        Source: "Metacritic",
        Value: "63/100"
      }
    ],
    Released: "16 Nov 1990",
    Response: "True",
    Runtime: "103 min",
    Title: "Home Alone",
    Type: "movie",
    Website: "N/A",
    Writer: "John Hughes",
    Year: "1990",
    imdbID: "tt0099785",
    imdbRating: "7.6",
    imdbVotes: "419,591"
  },
  {
    Actors: "Macaulay Culkin, Joe Pesci, Daniel Stern, Catherine O'Hara",
    Awards: "3 wins & 3 nominations.",
    BoxOffice: "N/A",
    Country: "USA",
    DVD: "05 Oct 1999",
    Director: "Chris Columbus",
    Genre: "Adventure, Comedy, Crime, Family",
    Language: "English, French",
    Metascore: "N/A",
    Plot:
      "One year after Kevin McCallister was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself stranded in New York City - and the same criminals are not far behind.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Production: "20th Century Fox",
    Rated: "PG",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.7/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "33%"
      }
    ],
    Released: "20 Nov 1992",
    Response: "True",
    Runtime: "120 min",
    Title: "Home Alone 2: Lost in New York",
    Type: "movie",
    Website: "N/A",
    Writer: "John Hughes (characters), John Hughes",
    Year: "1992",
    imdbID: "tt0104431",
    imdbRating: "6.7",
    imdbVotes: "277,535"
  },
  {
    Actors: "Tom Holland, Samuel L. Jackson, Jake Gyllenhaal, Marisa Tomei",
    Awards: "N/A",
    BoxOffice: "N/A",
    Country: "USA",
    DVD: "17 Sep 2019",
    Director: "Jon Watts",
    Genre: "Action, Adventure, Sci-Fi",
    Language: "Italian, Czech, English",
    Metascore: "69",
    Plot:
      "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    Production: "Sony Pictures",
    Rated: "PG-13",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.6/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "91%"
      },
      {
        Source: "Metacritic",
        Value: "69/100"
      }
    ],
    Released: "02 Jul 2019",
    Response: "True",
    Runtime: "129 min",
    Title: "Spider-Man: Far from Home",
    Type: "movie",
    Website: "N/A",
    Writer:
      "Chris McKenna, Erik Sommers, Stan Lee (based on the Marvel comic book by), Steve Ditko (based on the Marvel comic book by)",
    Year: "2019",
    imdbID: "tt6320628",
    imdbRating: "7.6",
    imdbVotes: "238,917"
  },
  {
    Actors: "Eva Green, Asa Butterfield, Samuel L. Jackson, Judi Dench",
    Awards: "2 wins & 12 nominations.",
    BoxOffice: "$87,240,689",
    Country: "USA, UK, Belgium, Canada",
    DVD: "13 Dec 2016",
    Director: "Tim Burton",
    Genre: "Adventure, Drama, Fantasy, Thriller",
    Language: "English",
    Metascore: "57",
    Plot:
      "When Jacob discovers clues to a mystery that stretches across time, he finds Miss Peregrine's Home for Peculiar Children. But the danger deepens after he gets to know the residents and learns about their special powers.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU0Nzc5NzI5NV5BMl5BanBnXkFtZTgwNTk1MDE4MDI@._V1_SX300.jpg",
    Production: "20th Century Fox",
    Rated: "PG-13",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.7/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "64%"
      },
      {
        Source: "Metacritic",
        Value: "57/100"
      }
    ],
    Released: "30 Sep 2016",
    Response: "True",
    Runtime: "127 min",
    Title: "Miss Peregrine's Home for Peculiar Children",
    Type: "movie",
    Website: "N/A",
    Writer:
      "Ransom Riggs (based upon the novel written by), Jane Goldman (screenplay by)",
    Year: "2016",
    imdbID: "tt1935859",
    imdbRating: "6.7",
    imdbVotes: "145,687"
  },
  {
    Actors:
      "Will Ferrell, Mark Wahlberg, Linda Cardellini, Thomas Haden Church",
    Awards: "1 win & 4 nominations.",
    BoxOffice: "N/A",
    Country: "USA",
    DVD: "22 Mar 2016",
    Director: "Sean Anders",
    Genre: "Comedy, Family",
    Language: "English",
    Metascore: "42",
    Plot:
      "Brad Whitaker is a radio host trying to get his stepchildren to love him and call him Dad. But his plans turn upside down when their biological father, Dusty Mayron, returns.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ0OTE1MTk4N15BMl5BanBnXkFtZTgwMDM5OTk5NjE@._V1_SX300.jpg",
    Production: "Paramount Pictures",
    Rated: "PG-13",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.2/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "31%"
      },
      {
        Source: "Metacritic",
        Value: "42/100"
      }
    ],
    Released: "25 Dec 2015",
    Response: "True",
    Runtime: "96 min",
    Title: "Daddy's Home",
    Type: "movie",
    Website: "N/A",
    Writer:
      "Brian Burns (screenplay), Sean Anders (screenplay), John Morris (screenplay), Brian Burns (story)",
    Year: "2015",
    imdbID: "tt1528854",
    imdbRating: "6.2",
    imdbVotes: "100,458"
  },
  {
    Actors: "Alex D. Linz, Olek Krupa, Rya Kihlstedt, Lenny von Dohlen",
    Awards: "3 nominations.",
    BoxOffice: "N/A",
    Country: "USA",
    DVD: "16 Oct 2001",
    Director: "Raja Gosnell",
    Genre: "Comedy, Crime, Family",
    Language: "English, Polish",
    Metascore: "N/A",
    Plot:
      "Alex Pruitt, a young boy of nine living in Chicago, fends off thieves who seek a top-secret chip in his toy car to support a North Korean terrorist organization's next deed.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTJhYjVhOWMtYTUyOS00NWM0LThjNzYtZWYxOTkwN2FhODg2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Production: "20th Century Fox",
    Rated: "PG",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "4.4/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "29%"
      }
    ],
    Released: "12 Dec 1997",
    Response: "True",
    Runtime: "102 min",
    Title: "Home Alone 3",
    Type: "movie",
    Website: "N/A",
    Writer: "John Hughes",
    Year: "1997",
    imdbID: "tt0119303",
    imdbRating: "4.4",
    imdbVotes: "97,555"
  },
  {
    Actors: "Reese Witherspoon, Josh Lucas, Patrick Dempsey, Candice Bergen",
    Awards: "3 wins & 6 nominations.",
    BoxOffice: "$127,214,072",
    Country: "USA",
    DVD: "04 Feb 2003",
    Director: "Andy Tennant",
    Genre: "Comedy, Romance",
    Language: "English",
    Metascore: "45",
    Plot:
      "A young woman who's reinvented herself as a New York City socialite must return home to Alabama to obtain a divorce from her husband, after seven years of separation.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjEwMjIwMDQ4OV5BMl5BanBnXkFtZTYwNzc3OTY3._V1_SX300.jpg",
    Production: "Buena Vista Distribution Compa",
    Rated: "PG-13",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.2/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "38%"
      },
      {
        Source: "Metacritic",
        Value: "45/100"
      }
    ],
    Released: "27 Sep 2002",
    Response: "True",
    Runtime: "108 min",
    Title: "Sweet Home Alabama",
    Type: "movie",
    Website: "N/A",
    Writer: "Douglas J. Eboch (story), C. Jay Cox (screenplay)",
    Year: "2002",
    imdbID: "tt0256415",
    imdbRating: "6.2",
    imdbVotes: "97,491"
  },
  {
    Actors: "Jim Parsons, Rihanna, Steve Martin, Jennifer Lopez",
    Awards: "2 wins & 9 nominations.",
    BoxOffice: "$157,801,252",
    Country: "USA",
    DVD: "28 Jul 2015",
    Director: "Tim Johnson",
    Genre: "Animation, Adventure, Comedy, Family, Fantasy, Sci-Fi",
    Language: "English, French",
    Metascore: "55",
    Plot:
      "An alien on the run from his own people makes friends with a girl. He tries to help her on her quest, but can be an interference.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjExOTQ4MDMyMV5BMl5BanBnXkFtZTgwMTE3NDM2MzE@._V1_SX300.jpg",
    Production: "DreamWorks Animation",
    Rated: "PG",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.6/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "50%"
      },
      {
        Source: "Metacritic",
        Value: "55/100"
      }
    ],
    Released: "27 Mar 2015",
    Response: "True",
    Runtime: "94 min",
    Title: "Home",
    Type: "movie",
    Website: "N/A",
    Writer:
      "Tom J. Astle (screenplay by), Matt Ember (screenplay by), Adam Rex (book)",
    Year: "2015",
    imdbID: "tt2224026",
    imdbRating: "6.6",
    imdbVotes: "87,503"
  },
  {
    Actors: "William Shatner, Leonard Nimoy, DeForest Kelley, James Doohan",
    Awards: "Nominated for 4 Oscars. Another 4 wins & 14 nominations.",
    BoxOffice: "N/A",
    Country: "USA",
    DVD: "09 Nov 1999",
    Director: "Leonard Nimoy",
    Genre: "Adventure, Comedy, Sci-Fi",
    Language: "English, Finnish",
    Metascore: "71",
    Plot:
      "To save Earth from an alien probe, Admiral James T. Kirk and his fugitive crew go back in time to San Francisco in 1986 to retrieve the only beings who can communicate with it: humpback whales.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGY2MDE2MGQtMjczYi00YTdhLWIzNzktNDk2NzMzZmYwMTJjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Production: "Paramount Pictures",
    Rated: "PG",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.3/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "85%"
      },
      {
        Source: "Metacritic",
        Value: "71/100"
      }
    ],
    Released: "26 Nov 1986",
    Response: "True",
    Runtime: "119 min",
    Title: "Star Trek IV: The Voyage Home",
    Type: "movie",
    Website: "N/A",
    Writer:
      'Gene Roddenberry (based on "Star Trek" created by), Leonard Nimoy (story), Harve Bennett (story), Steve Meerson (screenplay), Peter Krikes (screenplay), Harve Bennett (screenplay), Nicholas Meyer (screenplay)',
    Year: "1986",
    imdbID: "tt0092007",
    imdbRating: "7.3",
    imdbVotes: "74,216"
  },
  {
    Actors: "Jason Segel, Ed Helms, Susan Sarandon, Judy Greer",
    Awards: "1 nomination.",
    BoxOffice: "$4,244,155",
    Country: "USA",
    DVD: "19 Jun 2012",
    Director: "Jay Duplass, Mark Duplass",
    Genre: "Comedy, Drama",
    Language: "English",
    Metascore: "60",
    Plot:
      "Dispatched from his basement room on an errand for his widowed mother, slacker Jeff might discover his destiny (finally) when he spends the day with his unhappily married brother as he tracks his possibly adulterous wife.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTgyNzQ0MjY5Ml5BMl5BanBnXkFtZTcwNDgyNzkyNw@@._V1_SX300.jpg",
    Production: "Paramount Vantage",
    Rated: "R",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.5/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "77%"
      },
      {
        Source: "Metacritic",
        Value: "60/100"
      }
    ],
    Released: "11 May 2012",
    Response: "True",
    Runtime: "83 min",
    Title: "Jeff, Who Lives at Home",
    Type: "movie",
    Website: "N/A",
    Writer: "Jay Duplass, Mark Duplass",
    Year: "2011",
    imdbID: "tt1588334",
    imdbRating: "6.5",
    imdbVotes: "60,463"
  }
];
