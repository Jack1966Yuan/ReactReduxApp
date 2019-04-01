import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DisplayChange extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        console.log('rendering inside displayChange component');
        return (
            <div>
                Show the Changes {this.props.log}
            </div>
        )
    }
}

const mapStateToProps = state => ({
        log: state.log.log.count,
        state: state
    }
);
 
export default connect(mapStateToProps, null)(DisplayChange);

