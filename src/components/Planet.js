import { useQuery } from 'react-query';
import SinglePlanet from './SinglePlanet';

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets/');
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && <div>Loading data</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <div>
          {data.results.map((planets, index) => (
            <SinglePlanet key={index} planet={planets} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
