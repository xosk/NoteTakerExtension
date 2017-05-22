import React from 'react';
import Sources from './Sources.js';
import Topics from './Topics.js';

var Info = (props) => {
  var resultsContainer = props.recentQuery;
  var topics = resultsContainer.map(result => result[0]);
  if (props.pinText === props.currentText && props.loading) {
    return (
      <div className="icantwait">
        <h3>Loading...</h3>
      </div>
    )
  }
  if (props.pinText === props.currentText && props.show) {
    return (
      <div className="infoBody">
        <div className="bodyTopicsContainer">
          {
            topics.map((topic, key) => (
              <Topics
                key={key}
                index={key}
                topic={topic}
              />
            ))
          }
        </div>
        {
          resultsContainer.map((string, key) => (
            <Sources
              title={string[0]}
              sentence={string[1]}
              key={key}
              link={string[2]}
            />
          ))
        }
      </div>
    )
  } else {
    return (
      <h2>{''}</h2>
    )
  }
}


export default Info;