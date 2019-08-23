import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const ResultsPage = (props) => {

    return ( 
        <div>
            {props.picBank.map(el => 
                <div>
                    <Navbar type="results" />
                    <div>
                        <img src={`${el.webformatURL}`} alt=""/>
                    </div>
                </div>
                )}
        </div>
     );
}
 
const mapStateToProps = state => ({
    picBank: state.picBankSearch
})

export default connect(mapStateToProps)(ResultsPage);