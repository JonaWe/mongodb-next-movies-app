import Link from 'next/link';
import Tag from '../../components/Tag';
import getMovie from '../../lib/getMovie';
import getTopMovies from '../../lib/getTopMovies';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  img {
    width: auto;
    height: 100vh;
  }
`;

const ContentWrapper = styled.div`
  margin: 3rem 2rem 0 2rem;

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  h2 {
    margin-bottom: 0.25rem;
    margin-top: 1.5rem;
  }

  p {
    margin: 0;

    span {
      font-size: 0.75em;
      opacity: 75%;
    }
  }

  div {
    margin-top: 1rem;
    display: block;
  }

  a {
    text-align: center;
    font-size: 1.25em;
    display: block;
    margin-top: 2em;
    text-decoration: none;
    color: hsl(223, 90%, 50%);
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Movie({ movie }) {
  let { title, fullplot, imdb, released, genres, cast, directors, poster } =
    movie;

  released = new Date(released);
  genres ||= [];
  cast ||= ['Unknown'];
  directors ||= ['Unknown'];
  return (
    <MainWrapper>
      <img src={poster}></img>
      <ContentWrapper>
        <h1>{title}</h1>
        <p>{fullplot}</p>
        <h2>Released</h2>
        {released.toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
        <h2>Genres</h2>
        <div>
          {genres.map((name) => (
            <Tag name={name} />
          ))}
        </div>
        <h2>Cast</h2>
        <p>{cast.join(', ')}</p>
        <h2>{`Director${directors.length > 1 ? 's' : ''}`}</h2>
        <p>{directors.join(', ')}</p>
        <h2>Rating</h2>
        <p>
          {imdb.rating} <span>{`(${imdb.votes} votes)`}</span>
        </p>

        <Link href="/">
          <a>Home</a>
        </Link>
      </ContentWrapper>
    </MainWrapper>
  );
}

export async function getStaticProps(context) {
  const movie = await getMovie(context.params.id);

  return {
    props: { movie: JSON.parse(JSON.stringify(movie)) },
  };
}

export async function getStaticPaths() {
  const movies = await getTopMovies();
  const paths = movies.map(({ _id }) => ({ params: { id: String(_id) } }));
  return {
    paths,
    fallback: false,
  };
}
