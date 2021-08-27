import getTopMovies from '../lib/getTopMovies';
import Head from 'next/head';
import Movie from '../components/Movie';
import styled from 'styled-components';

const MovieGrid = styled.ul`
  padding: 0;
  margin: 2rem 0;
  width: 80%;
  display: grid;
  gap: 2.5rem;
  justify-content: center;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const MainWrapper = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 3em;
  h1 {
    font-size: 3rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
  }
`;

export default function Home({ movies }) {
  return (
    <MainWrapper>
      <Head>
        <title>Movie Page</title>
      </Head>
      <h1>Top 100 Movies</h1>
      <p>By IMDB Rating</p>

      <MovieGrid>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie._id} />
        ))}
      </MovieGrid>
    </MainWrapper>
  );
}

export async function getStaticProps(context) {
  const movies = await getTopMovies();
  return {
    props: { movies: JSON.parse(JSON.stringify(movies)) },
  };
}
