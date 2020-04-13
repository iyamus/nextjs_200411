import Link from 'next/link';
import React, { useState } from 'react';
import ProfileImage from '../components/ProfileImage';
import faker from 'faker';

// use react Hooks

export default function index() {
    const [name, setName] = useState(faker.name.findName());
    const [avartar, setAvatar] = useState(faker.image.avatar());
    const [email, setEmail] = useState(faker.internet.email());

    const generate = () => {
        setName(faker.name.findName());
        setAvatar(faker.image.avatar());
        setEmail(faker.internet.email());
    }
    // callback ()함수는 순차적으로 실행되도록 한다. 
    // this.setState({}, () => { },()=> {});

    // // useCallback(()=>) 복잡한 '함수'(첫번째 인자)를 기억 vs. useMemo
    //   // 당첨숫자가 변경되어도 winNumbers가 기존값을 그대로 가지고 있음
    //   // --> useCallback에서 winNumbers가 변경되면 실행되도록 [winNumbers]로 설정함
    //   const onClickRedo = useCallback(() => {
    //     console.log("onClickRedo");
    //     console.log(winNumbers);
    //     setWinNumbers(getWinNumbers());
    //     setWinBalls([]);
    //     setBonus(null);
    //     setRedo(false);
    //     timeouts.current = [];
    //   }, [winNumbers]);


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