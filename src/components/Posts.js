import React, {Component} from 'react';
import Post from './Post';
import InstaService from '../Services/instaservice';
import ErrorMessage from './ErrorMessages'
import Loading from './Loading'

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false,
        loading: false
    };

    componentDidMount() {
        this.onPostsLoading();
        setTimeout(this.updatePosts.bind(this), 2000);
    }

    updatePosts() {
        this.InstaService.getAllposts()
            .then(this.onPostsLoaded)
            .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts: posts,
            error: false,
            loading:false
        })
    };

    onPostsLoading = () => {
       this.setState({
           loading:true
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
                <div key={id}>
                    <Post
                        photo={photo}
                        altname={altname}
                        name={name}
                        min
                        src={src}
                        alt={alt}
                        descr={descr}
                    />
                </div>
            )
        })
    }

    render () {
        const {error, posts, loading} = this.state;
        if (error){
            return <ErrorMessage/>
        }
        if (loading) {
            return <Loading/>
        }

        const items = this.renderItems(posts);
        return (
            <div className='left'>
                {items}
            </div>
        )
    }
}