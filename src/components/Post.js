import React, {Component} from 'react';
import User from "./User";


export default class Post extends Component {
    render () {
        return (
            <div className='post'>
                <User
                    src="http://rs.img.com.ua/crop?v2=1&w=600&h=0&url=%2F%2Fv.img.com.ua%2Fb%2Forig%2F4%2F77%2F0304daca3e463cf6e036a0ecb5634774.jpg"
                    alt="prince"
                    name="Harry_the_prince"
                    min
                />


                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">
                    some account
                </div>
                <div className='post__descr'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi consequuntur earum quaerat quos? Aperiam aut doloribus illum molestiae mollitia quia voluptate voluptatibus. Beatae consectetur delectus possimus quasi! A, sit?
                </div>
            </div>
        )
    }
}