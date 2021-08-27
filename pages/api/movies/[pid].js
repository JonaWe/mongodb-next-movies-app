import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async (req, res) => {
  const { pid: movieId } = req.query;

  const client = await clientPromise;
  const db = client.db();

  try {
    const movie = await db
      .collection('movies')
      .findOne({ _id: ObjectId(movieId) });
    res.status(200).json(movie);
  } catch {
    res.status(400).json();
  }
};
