import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import UsersList from '../components/UsersList';
import searchPics from '../actions/index'
import { connect } from 'react-redux'

const Main = (props) => {

  const [search, setSearch] = useState('')

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const onSubmit = (search) => {
    props.searchPics(search);
    setSearch('');
    props.history.push('/result')
  }

  return (
    <div className="container">
      <div className="Title">Esthetics</div>
      <Navbar type="main"/>
      <div id="backgroundContainer">
        <header id="background"></header>
        <div id="searchBarContainer">
          <h2>Esthetics</h2>
          <div id="description">
            <h4>Search for millions of beautiful photos!</h4>
          </div>
          <input id="searchBar" placeholder="Search some photos" value={search} onChange={handleChange}></input>
          <button className="button" onClick={() => onSubmit(search)}><i class="fa fa-search"></i></button>
        </div>
      </div>
      <UsersList props={props} />
    </div>
  );
}

const mapDispatchToProps = {
  searchPics
}

export default connect(null, mapDispatchToProps)(Main);
