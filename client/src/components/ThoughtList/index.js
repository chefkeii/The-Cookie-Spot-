import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-black text-light p-2 m-0" style={{ backgroundColor: '#09C2F4', borderColor: '#09C2F4' }}>
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    Ordered on: {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You order on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-white p-2">
              <p>{thought.thoughtText}</p>
            </div>
            <Link
              className="btn btn- btn-block btn-squared"style={{ backgroundColor: '#09C2F4', borderColor: '#09C2F4' }}
              to={`/thoughts/${thought._id}`}
            >
              Share your Sweet Reviews here.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
