import React, {Component} from 'react';
import Post from './Post';


export default class Posts extends Component {
    render () {


        return (
            <div className='left'>
                <Post src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1q43UuJSR08P1Jy3LqTH38uewhLPM3OWOSW3T2o0Tky26ulde' alt='nature' />
                <Post alt='акула лодка' src='http://nibler.ru/uploads/users/2012-04-02/%D0%A4%D1%8D%D0%BD%D1%82%D0%B5%D0%B7%D0%B8-%D1%81%D1%82%D0%B8%D0%BB%D0%B8-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5%20%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%84%D0%BE%D1%82%D0%BE%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B_4235843397.jpg' />
            </div>
        )
    }
}