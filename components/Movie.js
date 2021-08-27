export default function Movie({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.plot}</p>
    </div>
  );
}
