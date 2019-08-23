import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPics, addPic } from '../actions';

const UsersList = (props) => {
  
  const onSubmit = el => {
    props.addPic(el)
  }
  
  useEffect(() => {
    props.fetchPics()
  },[]
  )

  return (
    <div className="gallery">
      {props.pictures.map(el => (
          <div className="card">
            <Link to={`users/${el.id}`}>
              <img className="gallery-item" src={el.webformatURL} alt=""/>
            </Link>
            <button type="button" className="CollectButton" onClick={() => onSubmit(el)}>+</button>
          </div>
      ))}
    </div>
  );
      }

const mapStateToProps = (state) => ({
  pictures: state.picBank
})

const mapPropsToDispatch = dispatch => ({
  fetchPics: () => dispatch(fetchPics()),
  addPic: (el) => dispatch(addPic(el))
})

export default connect(mapStateToProps,mapPropsToDispatch)(UsersList)