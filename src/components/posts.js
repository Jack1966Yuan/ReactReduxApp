import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';
import { createSelector } from 'reselect';


class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
        //this.timerID = setInterval(
            //() => this.props.fetchPosts(),
            //1000
        //);
    }

    /*
    componentWillUnmount() {
       clearInterval(this.timerID);
    }
    */
/*
    componentWillReceiveProps(nextProps) {
        console.log('Received props in ReceiveProps');
        if(nextProps.newPost) {
            nextProps.newPost.id = this.props.posts.length + 1;
            this.props.posts.unshift(nextProps.newPost)
        }
    }
*/
    reloadData = () => {
        console.log("inside reload event handler");
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <span>{post.id + '. '}</span>
                <span>{post.title}</span>
            </div>
        )); 
        console.log("rendering inside post");
        return (
            <div>
            <h3>Post List</h3>
            <button className="btn" onClick={this.reloadData}>Reload Data</button>
            {postItems}
            </div>            
        );
    }
};

Posts.propTypes = {
   fetchPosts: PropTypes.func.isRequired,
   posts: PropTypes.array.isRequired
}

/*using reselect */
/*
const itemsList = (state) => state.post.items;
const itemList = (state) => state.post.item;



const currentItems = (state) => createSelector (
    [itemsList, itemList],
    (items, item) => (
        {
            posts: items? items: [],
            newPost: item? item: {}
        }
    )
);

const mapStateToProps = state => {
    return currentItems(state);
}

*/

const mapStateToProps = state => ({
   posts: state.post.items,
   newPost: state.post.item,
});


//state.post  post is from rootReducer

export default connect(mapStateToProps, {fetchPosts})(Posts);
