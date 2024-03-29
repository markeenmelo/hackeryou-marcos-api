const Movie = require('../models/Movie')
const movies = []

/* SAMPLE SEED
const aquaman = new Movie({
  title: 'Aquaman',
  overview: "The film reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be… a king.",
  release_date: 2018,
  rate: 7,
  poster_path: "http://image.tmdb.org/t/p/original/"
})
movies.push(aquaman)
*/

const aquaman = new Movie({
  title: 'Aquaman',
  overview: "The film reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be… a king.",
  release_date: 2018,
  rate: 7,
  poster_path: "http://image.tmdb.org/t/p/original/ydUpl3QkVUCHCq1VWvo2rW4Sf7y.jpg"
})
movies.push(aquaman)

const venom = new Movie({
  title: 'Venom',
  overview: "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of an alien symbiote that gives him a violent super alter-ego: Venom. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
  release_date: 2018,
  rate: 5,
  poster_path: "https://image.tmdb.org/t/p/original/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg"
})
movies.push(venom)

const avengers = new Movie({
  title: 'Avengers: Infinity War',
  overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
  release_date: 2018,
  rate: 10,
  poster_path: "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
})
movies.push(avengers)

const spiderman = new Movie({
  title: 'Spider-Man: Into the Spider-Verse',
  overview: "Miles Morales is juggling his life between being a high school student and being Spider-Man. However, when Wilson \\\"Kingpin\\\" Fisk uses a super collider, another Spider-Man from another dimension, Peter Parker, accidentally winds up in Miles' dimension. As Peter trains Miles to become a better Spider-Man, they are soon joined by four other Spider-Men from across the \\\"Spider-Verse\\\". As all these clashing dimensions start to tear Brooklyn apart, Miles must help the others stop Fisk and return everyone to their own dimensions.",
  release_date: 2018,
  rate: 10,
  poster_path: "http://image.tmdb.org/t/p/original/laMM4lpQSh5z6KIBPwWogkjzBVQ.jpg"
})
movies.push(spiderman)

const dieHard = new Movie({
  title: 'Die Hard',
  overview: "NYPD cop, John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
  release_date: 1988,
  rate: 9,
  poster_path: "http://image.tmdb.org/t/p/original/mc7MubOLcIw3MDvnuQFrO9psfCa.jpg"
})
movies.push(dieHard)

const toyStore2 = new Movie({
  title: 'Toy Story 2',
  overview: "Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.",
  release_date: 1999,
  rate: 9,
  poster_path: "http://image.tmdb.org/t/p/original/3CmK3XurcLeUyMifCR28ibzupbB.jpg"
})
movies.push(toyStore2)

module.exports = movies

