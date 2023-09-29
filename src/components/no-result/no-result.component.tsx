import React from 'react'
import noResult from '../../assets/no-results.png';
import './no-result.css';
const NoResult = () => {
  return (
    <div className="empty-logo">
      <img style={{ width: 100 }} src={noResult} alt="empty result" />
      <span style={{ color: '#00000061' }}>No Data :</span>
    </div>
  )
}

export default NoResult