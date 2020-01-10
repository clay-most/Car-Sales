import React from 'react';
import {useDispatch} from "react-redux"
import {addFeature} from "../actions/index"


const AdditionalFeature = props => {
  const dispatch=useDispatch()
  const handleAdd=()=>{
    dispatch(addFeature(props.feature))
  }
  return (
    <li>
      <button className="button" onClick={handleAdd}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
