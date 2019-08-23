import React from 'react';
import { connect } from 'react-redux';
import { deletePic } from '../actions';
import { Link } from 'react-router-dom';
import '../cssNonRetina/Collection.css';

const UserCollection = (props) => {

    return (
        <div className="gallery">
            {props.collection.map((el, idx) => (
                el &&
                <div className="card">
                    <div className="userNavContainer">
                        <div>
                            <span>
                                <Link className="NavItemUser" to="/">Home</Link>
                            </span>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="deleteButton" onClick={() => props.deletePic(idx)}>X</button>
                    </div>
                    <div className="gallery-item">
                        <img src={el.webformatURL} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )

};

const mapStateToProps = (state) => ({
    collection: state.userCollection,
    idx: state.idx
})

const mapPropsToDispatch = {
    deletePic
}

export default connect(mapStateToProps, mapPropsToDispatch)(UserCollection);