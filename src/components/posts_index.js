import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() { // this component function will automicatlly called by react immediately after this component has shown up inside the DOM
        this.props.fetchPosts();
    }
    render() {
        console.log("here is : " + this.props.posts);
        return ( 
            <div>
                PostsIndex
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {posts: state.posts}
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex); // this is shortcut instead of using mapDispatcherToProps