import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() { // this component function will automicatlly called by react immediately after this component has shown up inside the DOM
        this.props.fetchPosts();
    }
    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        })
    }
    render() {
        console.log("here is : " + this.props.posts);
        return ( 
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                       Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {posts: state.posts}
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex); // this is shortcut instead of using mapDispatcherToProps