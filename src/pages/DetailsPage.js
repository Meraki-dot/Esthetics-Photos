import React from 'react';
import Navbar from '../components/Navbar';
import PicDetails from '../components/PicDetails';

const DetailsPage = (props) => {

    return (
      <div className='container'>
        <Navbar type="details_page" userId={props.match.params.username}/>
        <PicDetails props={props}/>
      </div>
    );
  }

export default DetailsPage;