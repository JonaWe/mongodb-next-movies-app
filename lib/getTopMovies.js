import clientPromise from './mongodb';

export default async () => {
  const client = await clientPromise;
  const db = client.db();
  const movies = await db
    .collection('movies')
    .find({ 'imdb.rating': { $ne: '' } })
    .sort({ 'imdb.rating': -1 })
    .limit(20)
    .toArray();

  return movies;
};
