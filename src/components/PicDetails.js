import React from 'react';
import { addPic } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../cssNonRetina/PicDetails.css'


const PicDetails = (props) => {

  const onSubmit = el => {
    props.addPic(el)
  }

  let id = parseInt(props.props.match.params.id);

  return (
    <div className="card">

      {props.pictures.map(el => (
       
        el.id === id &&
        <div className="DetailsContainer" key={el.id}>
          <div>
            <div className="DetailsNavContainer">
              <Link className="NavItemDetails1" to="/">Home</Link>
            </div>
            <div className="DetailsNavContainer">
              <Link className="NavItemDetails2" to="/users/collection">Collections</Link>
            </div>
          </div>
          <div >
            <div className="card-img">
              <div id="UserInfo">
                <div id="UserImage">
                  <img id="SelectUserImage" src={el.userImageURL} alt="" />
                  <div id="Username">{el.user}</div>
                </div>
              </div>
              <div id="DetailsImage">
                <img id="SelectImage" src={el.largeImageURL} alt="" />
                <div id="ButtonContainer">
                  <button type="button" className="CollectDetailButton" onClick={() => onSubmit(el)}>+</button>
                </div>
              </div>
              <div id="DataContainer">
                <div id="Views">Views: {el.views}</div>
                <div id="Downloads">Downloaded: {el.downloads}</div>
                <div id="Favorite">Favorited: {el.favorites}</div>
              </div>
            </div>
          </div>
          <div className="card-body">
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  pictures: state.picBank
})

const mapPropsToDispatch = dispatch => ({
  addPic: (el) => dispatch(addPic(el))
})

export default connect(mapStateToProps, mapPropsToDispatch)(PicDetails);
