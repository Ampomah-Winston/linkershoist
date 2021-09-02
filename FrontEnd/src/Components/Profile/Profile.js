import React , {useState} from 'react'
import { Redirect} from 'react-router-dom';
import ProfileNav from './profileNav/ProfileNav'
import ProfileBodyLeft from './ProfileBodyLeft/ProfileBodyLeft';
import ProfileBodyRight from './profileBodyRight/ProfileBodyRight';
import ProfileBodyCenter from './profileBodyCenter/ProfileBodyCenter';
import {useSelector} from 'react-redux'

export default function Profile(props) {
    const authorized = useSelector(state => state.authorized)
    const profileData = useSelector(state => state.profileData)

    const style = {
        width: '100%',
        height: '90%',
        backgrounColor: 'darkslategray',
        color:'khaki',
        display: 'flex',
        marginTop: '10px'
    }

    if(!authorized) {
        return <Redirect to="/App" />
    }

    return (
        <div className="profile-body">
            <ProfileNav />
            {/* <ProfileBody messageList = {messageList} outMsg = {composer_msg} handleComposer = {handleComposer} handleSubmitMessage = {handleSubmitMessage} /> */}
            <div  style={style}>
                <ProfileBodyLeft userData = {profileData} />
                <ProfileBodyCenter userData = {profileData} />
                <ProfileBodyRight userData = {profileData} />
            </div>
        </div>
    )
}
