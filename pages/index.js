import React, { Component } from 'react';
import dynamic from "next/dynamic"
const Thing = dynamic(import("../components/Thing"))

class Home extends Component {
    render() {
        return (
            <div>
                Home
                <Thing />
            </div>
        );
    }
}

export default Home;