import React, { useState } from 'react';

export default function ProfileImage(props) {
    console.log(props);

    const [width, setWidth] = useState(props.size || 200);
    const [height, setHeight] = useState(props.size || 200);
    const [url, setUrl] = useState(props.url || 'https://placeimg.com/300/300/man');

    const style = {
        display: 'inline-block',
        width: width,
        height: height,
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        borderRadius: '50%',
    };

    return (
        <>
            <span style={style} />
        </>
    );
}