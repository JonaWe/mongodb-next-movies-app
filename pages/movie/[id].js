import Link from 'next/link';
import getMovie from '../../lib/getMovie';

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

export async function getServerSideProps(context) {
  const movie = await getMovie(context.params.id);

  return {
    props: { movie: JSON.parse(JSON.stringify(movie)) },
  };
}
