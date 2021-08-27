import clientPromise from './mongodb';
import { ObjectId } from 'mongodb';

export default async (id) => {
  const client = await clientPromise;

  const db = client.db();

  return await db.collection('movies').findOne({ _id: ObjectId(id) });
};
