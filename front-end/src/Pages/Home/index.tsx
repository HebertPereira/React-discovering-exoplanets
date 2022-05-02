import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import CardView from '../../Components/Cardview';
import Loader from '../../Components/Common/Loader';
import { getExplanetsData } from '../../Services/exoplanets.info';
import { HomeContainer, HomeContent } from './styles';

interface ExoplanetProps {
  pl_name: string;
  hostname: string;
  tic_id: string;
  disc_year: number;
  discoverymethod: string;
  disc_telescope: string;
}

function Home() {
  const [data, setData] = useState<ExoplanetProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getExplanetsData()
      .then((response: any) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(() => toast.error('Erro ao obter dados!'));
  }, []);
  return (
    <HomeContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <HomeContent>
          {data.map((exoplanet: ExoplanetProps, index) => {
            return (
              <CardView
                title={exoplanet.pl_name}
                key={`${exoplanet.tic_id + index}`}
              />
            );
          })}
        </HomeContent>
      )}
    </HomeContainer>
  );
}

export default Home;
