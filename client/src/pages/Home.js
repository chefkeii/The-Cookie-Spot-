import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import DessertCard from '../components/DessertCard';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
      <div
          className="col-12 col-md-7 mb-3 p-3"
          style={{}}
        >
          <DessertCard />
        </div>

        <div
          className="col-12 col-md-7 mb-3 p-3"
          style={{ border: '1px dotted #1A1A1A' }}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Requested Desserts"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
