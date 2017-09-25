import React from 'react';
import pace from '../vendor/pace';
import styled from 'styled-components';
import DummyLogo from '../img/logo1.svg';

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h4`Artboard 1.png
    font-size: 45px;
    color: white;
`;

const Logo = styled.img`
    width: 500px;
    height: 500px;
`;

export default class AppLoader extends React.Component {
    constructor(props) {
        super(props);
        pace.start({
            ghostTime: 1000,
            restartOnPushState: false,
            elements: {
                selectors: ['.app']
            }
        });

        this.state = {
            'text': props.text
        };
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <Title>{this.state.text}</Title>
                </div>
                <div>
                    <Logo src={DummyLogo}/>
                </div>
            </Wrapper>
        )
    }
}