import Link from 'next/link';
import React, { useState } from 'react';
import ProfileImage from '../components/ProfileImage';
import faker from 'faker';
import { decorate, observable } from 'mobx';
import { observer } from "mobx-react"


class Data {
    avartar = faker.image.avatar();
    email = faker.internet.email();
    name = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
    };
}

// mobx 에서 observable처리 하겠다는 의미
decorate(Data, {
    avartar: observable,
    email: observable,
    name: observable,
})

class Index extends React.Component {
    data = new Data();

    generate = () => {
        this.data.email = faker.internet.email();
        this.data.name.firstName = faker.name.firstName();
        this.data.avartar = faker.image.avatar();
        console.log("check: ", this.data.email);
    }

    render() {
        return (
            <>
                <h1>Index</h1>
                <button className="btn btn-primary" onClick={this.generate}>Change</button>
                <div>
                    <dl className="row">
                        <dt className="col-sm-3">Avatar</dt>
                        <dd className="col-sm-9"><img src={this.data.avartar} /></dd>
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9">{this.data.name.firstName} {this.data.name.lastName}</dd>
                        <dt className="col-sm-3">Email</dt>
                        <dd className="col-sm-9">{this.data.email}</dd>
                    </dl>
                </div>
            </>);
    }
}

// observer 처리해주겠다는 의미
Index = observer(Index);
export default Index;