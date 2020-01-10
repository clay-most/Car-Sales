import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {useSelector} from "react-redux"

const AdditionalFeatures = props => {
  const features=useSelector(state=>state.additionalFeatures)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
