import React, { Component } from "react"

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 100,
            showTime: true,
            date: new Date(),
        }
    }

    componentDidMount() {
        if (this.props.start !== undefined) {
            this.setState({ time: this.props.start })
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log('unmount')
        clearInterval(this.timerID);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.time === 0) {
            this.componentWillUnmount()
            console.log(prevState.showTime);
            if (prevState.showTime === this.state.showTime) {
                this.hideTime()
            }
        }
    }

    tick() {
        this.setState({
            time: this.state.time - 1,
            date: new Date(),
        });
    }

    hideTime() {
        this.setState({ showTime: false })
    }

    render() {
        return (
            <>
                <h1 style={{textAlign:'center'}}>Tugas-11</h1>
                {
                    this.state.showTime && (
                        <div style={{ textAlign: 'center' }} id='timer'>
                            <h1>
                                <span>sekarang jam: {this.state.date.toLocaleTimeString()}</span>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                <span>hitung mundur: {this.state.time}</span>
                            </h1>
                        </div>
                    )
                }
            </>
        )
    }
}

export default Timer
