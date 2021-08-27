import Link from 'next/link';
import getMovie from '../../lib/getMovie';
import getTopMovies from '../../lib/getTopMovies';

export default function Movie({ movie }) {
  const { title } = movie;
  return (
    <div>
      <h1>{title}</h1>

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
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
