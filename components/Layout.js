import React, { useState } from 'react';

class Layout extends React.Component {
    render() {
        return (

            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                      text
                    </div>
                </nav>
                <div className="container">
                    {/* children 은 전체 모두 지칭함. */}
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Layout;