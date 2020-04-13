import Link from 'next/link';
import React, { useState } from 'react';
import ProfileImage from '../components/ProfileImage';
import faker from 'faker';
import { decorate, observable } from 'mobx';
import { observer } from "mobx-react"
import Layout from '../components/Layout';


class Index extends React.Component {

    render() {
        return (
            <>
                <Layout><h1>Index</h1></Layout>
            </>);
    }
}

export default Index;