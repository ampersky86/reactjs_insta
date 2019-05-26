import React, {Component} from 'react';
import User from "./User";


export default class Post extends Component {
    state={
        photo:this.props.photo,
        alt:this.props.alt,
        name:this.props.name
    };

    render () {
        const {photo, alt, name} = this.state;
        return (
            <div className='post'>
                <User
                    src={photo}
                    alt={alt}
                    name={name}
                    min
                />
                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">
                    {this.props.name}
                </div>
                <div className='post__descr'>
                    {this.props.descr}
                </div>
            </div>
        )
    }
}