import Link from 'next/link';
import React, { useState } from 'react';
import ProfileImage from '../components/ProfileImage';
import faker from 'faker';

export default function index() {
    const [name, setName] = useState(faker.name.findName());
    const [avartar, setAvatar] = useState(faker.image.avatar());
    const [email, setEmail] = useState(faker.internet.email());

    const generate = () => {
        setName(faker.name.findName());
        setAvatar(faker.image.avatar());
        setEmail(faker.internet.email());
    }

    return (
        <>
            <h1>Index</h1>
            <button className="btn btn-primary" onClick={generate}>Change</button>
            <div>

                <dl className="row">
                    <dt className="col-sm-3">Avatar</dt>
                    <dd className="col-sm-9"><img src={avartar} /></dd>
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9">{name}</dd>
                    <dt className="col-sm-3">Email</dt>
                    <dd className="col-sm-9">{email}</dd>
                </dl>

                {/* <ProfileImage />
                <ProfileImage size={100} />
                <ProfileImage url={'https://placeimg.com/400/400/animals'} />
                <ProfileImage size={300} />
                <ProfileImage url={'https://placeimg.com/400/400/woman'} /> */}
            </div>
        </>);
};