import React from 'react';
import throttle from 'lodash/throttle';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 0,
            centerGraphicState: 1,
            currentLeftText: 0,
        };

        this.changeContent = this.changeContent.bind(this);
    }

    handleWheelEvent(e) {
        e.persist();
        this.updateHomeContent(e);
    };

    throttleHandleWheelEvent() {
        return throttle(this.handleWheelEvent, 1000, { 'trailing': false });
    }

    updateHomeContent({ deltaX, deltaY }) {
        if (deltaX === -0) {
            const movement = deltaY > 0 ? 'UP' : 'DOWN';
            console.log('movement = ', movement);
            this.throttleChangeContent()(movement);
        }
    }

    throttleChangeContent() {
        return throttle(this.changeContent, 900, { leading: false });
    }

    changeContent(movement) {
        switch (movement) {
            case 'UP':
                this.setState(() => {
                    return {
                        currentStep: this.state.currentStep + 1,
                        centerGraphicState: 1,
                        currentLeftText: 0,
                    }
                });
                break;
            case 'DOWN':
                this.setState(() => {
                    return {
                        currentStep: this.state.currentStep - 1,
                        centerGraphicState: 1,
                        currentLeftText: 0,
                    }
                });
                break;
            default:
                console.log("Something went wrong evaluating.");
        }
    }

    render() {
        return (
            <div className="home-container container-fluid" onWheel={this.throttleHandleWheelEvent().bind(this)}>
                <p>I'm the app</p>
                <div className="row home-content-container">
                    <div className="col align-self-center">
                        {this.state.currentStep}
                    </div>
                    <div className="col align-self-center">
                        {this.state.centerGraphicState}
                    </div>
                    <div className="col  align-self-center">
                        {this.state.currentLeftText}
                    </div>
                </div>
            </div>
        )
    }
}