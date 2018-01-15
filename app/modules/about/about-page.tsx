import './styles/about-page.scss';
import MyProfileImg from './styles/images/my-profile.jpg';

import React from 'react';

import AboutActions from './about-actions';

import { connect } from 'react-redux';

type AboutPageProps = {
    isLoading: boolean;
    items: any[];
    color: string;
};

class AboutPage extends React.Component<AboutPageProps, any> {
    componentDidMount() {
        AboutActions.init();
    }

    render() {
        const { isLoading, items, color } = this.props;

        return (
            <div>
                <div className="container-fluid bg-1 text-center">
                    <h3>Who Am I?</h3>
                    <img src={MyProfileImg} className="img-circle" alt="Bird" width="350" height="350" />
                    <h3>I'm an adventurer</h3>
                </div>
                <div className="container-fluid bg-2 text-center">
                    <h3>What Am I?</h3>
                    <p>
                        An 10 years experiences Front-End Developers. I have been through C#, Ruby, PHP, Python, NodeJS, Javascript
                    </p>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <h3>Where To Find Me?</h3>
                    <p>
                        <a href="mailto:lovedota21@gmail.com">lovedota21@gmail.com</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default connect(
    ({about}) => ({
        isLoading: about.isLoading,
        items: about.items,
        color: about.color
    })
)(AboutPage);
