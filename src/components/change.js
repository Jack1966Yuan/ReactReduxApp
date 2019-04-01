import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeChange } from '../actions/changeAction';


class Change extends Component {
    constructor(props) {
        super(props);
        this.timerID = setInterval(
            () => this.props.makeChange(this.props.count),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        console.log('rendering inside Change component');        
        return (
            <div>
                Make Changes
            </div>
        )
    }
}

Change.propTypes = {
    makeChange: PropTypes.func.isRequired,
    count: PropTypes.any
}


const mapStateToProps = state => ({
    count: state.log.log.count,
});
 
export default connect(mapStateToProps, {makeChange})(Change);





