import getMovie from '../../../lib/getMovie';

export default async (req, res) => {
  const { pid: movieId } = req.query;

  const movie = await getMovie(movieId);

  if (movie) res.json(movie);
  else res.status(400).json();
};
