import React from 'react';

const LearnerList = () => {
  const learners = [
    {
      name: 'Cait Yomorta',
      bio: 'Lorem ipsum...',
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        // ...
      ]
    },
    {
      name: 'Holly Baird',
      bio: 'Eum molestiae...',
      scores: [
        {
          date: '2018-12-14',
          score: 88
        },
        // ...
      ]
    },
    {
      name: 'Wes Mungia',
      bio: 'Repudiandae veritatis...',
      scores: [
        {
          date: '2018-10-11',
          score: 62
        },
        // ...
      ]
    }
  ];

  return (
    <div>
     <h1>Learners</h1>
      {learners.map((learner, index) => (
        <div key={index}>
          <h2>{learner.name}</h2>
          <p>{learner.bio}</p>
          <ul>
            {learner.scores.map((score, scoreIndex) => (
              <li key={scoreIndex}>
                Date: {score.date} - Score: {score.score}
              </li>
            ))}
          </ul>
        </div>
     ) )}
    </div>
  )
};

export { LearnerList };