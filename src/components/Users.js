import React, {Component} from 'react';
import User from "./User";
import InstaService from "../Services/instaservice";

export default class Users extends  Component {
    InstaService = new InstaService();
    state = {
        users: []
    };

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllposts()
            .then(this.onUsersLoaded)
            .catch(this.onError)
    }

    onUsersLoaded = (users) =>{
        this.setState({
            users:users
        })
    };

    render (){
        const users = this.state.users.map((user, index) => {
            return (
                <div key={index}>
                    <User src={user.photo} name={user.name} min/>
                </div>
            )
        });

        return (
            <div className='right'>
                <User
                    src="http://rs.img.com.ua/crop?v2=1&w=600&h=0&url=%2F%2Fv.img.com.ua%2Fb%2Forig%2F4%2F77%2F0304daca3e463cf6e036a0ecb5634774.jpg"
                    alt="prince"
                    name="Harry_the_prince"
                />

                <div className='users__block'>
                    {users}
                </div>
            </div>
        )
    }
}


