import getTopMovies from '../lib/getTopMovies';
import Head from 'next/head';
import Movie from '../components/Movie';

export default function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>Movie Page</title>
      </Head>
      <h1>Top 20 Movies</h1>
      <h2>By IMDB Rating</h2>

      {movies.map((movie) => (
        <Movie movie={movie} key={movie._id} />
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const movies = await getTopMovies();
  return {
    props: { movies: JSON.parse(JSON.stringify(movies)) },
  };
}
