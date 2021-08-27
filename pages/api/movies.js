import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  const movie = await db
    .collection('movies')
    .find({ 'imdb.rating': { $ne: '' } })
    .sort({ 'imdb.rating': -1 })
    .limit(20)
    .toArray();

  res.json(movie);
};
