
import useData from '../hooks/useData';
import useGenres from '../hooks/useGenres';

export const GenreList = () => {
    const {data} = useGenres();
  return (
    <ul>{data.map(d => 
        <li key={d.id}> {d.name}</li>
    )}</ul>
  )
}


