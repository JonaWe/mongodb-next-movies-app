import Link from 'next/link';
import styled from 'styled-components';

const MovieCard = styled.li`
  display: grid;
  /* align-items: flex-start; */
  list-style-type: none;
  padding: 0;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
  background-color: hsl(223, 15%, 13%);
  /* width: 250px; */
  border-radius: 0.75rem;

  p,
  h3 {
    margin: 0;
  }

  img {
    border-radius: 0.75rem 0.75rem 0 0;
    width: 100%;
    aspect-ratio: 1 / 1.5;
    object-fit: cover;
  }
`;

const CardDescription = styled.div`
  padding: 0.6rem;
  display: grid;
  /* height: inherit; */
  gap: 1rem;
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.15rem;
    justify-self: right;
  }
`;

export default function Movie({ movie }) {
  const { _id, title, poster, imdb } = movie;
  return (
    <Link href={`movie/${_id}`}>
      <MovieCard>
        <img src={poster}></img>
        <CardDescription>
          <h3>{title}</h3>
          <p>{imdb.rating}</p>
        </CardDescription>
      </MovieCard>
    </Link>
  );
}
