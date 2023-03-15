import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import CookieCard from '../components/DessertCard';

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
          <CookieCard />
        </div>

        <div
          className="col-12 col-md-7 mb-3 p-3"
          style={{}}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Cookie Request Here..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
