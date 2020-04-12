import Link from 'next/link';
import React from 'react';
import ProfileImage from '../components/ProfileImage';
export default function index() {
    return (
        <>
            <h1>Index</h1>
            <button className="btn btn-primary">Button</button>
            <div>
                <ProfileImage />
                <ProfileImage size={100} />
                <ProfileImage url={'https://placeimg.com/400/400/animals'} />
                <ProfileImage size={300} />
                <ProfileImage url={'https://placeimg.com/400/400/woman'} />
            </div>
        </>);
};