import React, {Component} from 'react';
import Post from './Post';
import InstaService from '../Services/instaservice';
import ErrorMessage from './ErrorMessages'

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    };

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllposts()
            .then(this.onPostsLoaded)
            .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts: posts,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error:true
        })
    };

     renderItems(arr) {
        return arr.map((item) =>{
            const {name, altname, photo, src, alt, descr, id} = item;
            return (
                <div key={id} >
                    <Post
                        photo={photo}
                        altname={altname}
                        min
                        src={src}
                        alt={alt}
                        descr={descr}
                        name={name}
                    />
                </div>
            )
        })
    }

    render () {
        const {error, posts} = this.state;
        if (error){
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);
        return (
            <div className='left'>
                {items}
            </div>
        )
    }
}