import getTopMovies from '../../../lib/getTopMovies';

export default async (req, res) => {
  res.json(await getTopMovies());
};
