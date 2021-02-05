import { useQuery } from 'react-query';
import SinglePeople from './SinglePeople';

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/people/');
  return res.json();
};

const People = () => {
  const { data, status } = useQuery('peoples', fetchPlanets);

  return (
    <div>
      <h2>People</h2>

      {status === 'loading' && <div>Loading data</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <div>
          {data.results.map((peoples, index) => (
            // <SinglePlanet key={index} planet={planets} />
            <SinglePeople key={index} people={peoples} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
