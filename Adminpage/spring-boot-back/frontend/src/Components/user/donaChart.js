import React, { Component } from 'react';
import ApiService from '../../ApiService';
import './donaChart.css';

import { VictoryBar, VictoryChart, VictoryTheme, VictoryStack } from 'victory';

class donaChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donas: [
                {
                    id: 'rabbit',
                    donationorder: 1,
                    payment: 2000,
                    regdate: '20/12/12'
                },
                {
                    id: 'bear',
                    donationorder: 2,
                    payment: 4000,
                    regdate: '20/12/13'
                },
                {
                    id: 'dog',
                    donationorder: 4,
                    payment: 5000,
                    regdate: '20/12/14'
                },
                {
                    id: 'dog',
                    donationorder: 4,
                    payment: 8000,
                    regdate: '20/12/15'
                },
            ],
            message: null
        }
    }

    componentDidMount() {
        this.reloadDonaList();
    }

    reloadDonaList = () => {
        ApiService.fetchDonas()
            .then(res => {
                this.setState({
                    donas: res.data
                })
            })
            .catch(err => {
                console.log('reloadDonaList() err', err);
            })
    }
    render() {
        return (
            <div>
                <VictoryChart domainPadding={10} theme={VictoryTheme.material} style={style}>
                    <VictoryStack
                        // colorScale 속성에 warm 추가
                        colorScale={'grayscale'} >
                        < VictoryBar data={this.state.donas} x="id" y="payment" style={{
                            data: { fill: "#53E4BE" }
                        }} />
                    </VictoryStack>
                </VictoryChart>
            </div >
        );
    }
}
const style = {
    backgroundColor: 'white',
}

export default donaChart;