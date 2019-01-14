import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

class History extends Component {

    state = {
        todayprice: [],
        yesterdayprice: [],
        twodaysprice: [],
        threedaysprice:[],
        fourdaysprice: [],
    }

    componentWillMount () {
        this.getTodayPrice();
        this.getYesterdayPrice();
        this.getTwoDaysPrice();
        this.getThreeDaysPrice();
        this.getFourDaysPrice();
    }

    getETHPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
    }

    getBTCPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
    }

    getLTCPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
    }

    getXRPPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=XRP&tsyms=USD&ts=' + date);
    }

    getTodayPrice = () => {
        let t = moment().unix()
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t), this.getXRPPrices(t)])
            .then(axios.spread((eth, btc, ltc, xrp) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD,
                    xrp: xrp.data.XRP.USD
                }
                this.setState({ todayprice: f });
            }));
    }

    getYesterdayPrice = () => {
        let t = moment().subtract(1, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t), this.getXRPPrices(t)])
            .then(axios.spread((eth, btc, ltc, xrp) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD,
                    xrp: xrp.data.XRP.USD
                }
                this.setState({ yesterdayprice: f });
            }));
    }

    getTwoDaysPrice = () => {
        let t = moment().subtract(2, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t), this.getXRPPrices(t)])
            .then(axios.spread((eth, btc, ltc, xrp) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD,
                    xrp: xrp.data.XRP.USD
                }
                this.setState({ twodaysprice: f });
            }));
    }

    getThreeDaysPrice = () => {
        let t = moment().subtract(3, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t), this.getXRPPrices(t)])
            .then(axios.spread((eth, btc, ltc, xrp) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD,
                    xrp: xrp.data.XRP.USD
                }
                this.setState({ threedaysprice: f });
            }));
    }

    getFourDaysPrice = () => {
        let t = moment().subtract(4, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t), this.getXRPPrices(t)])
            .then(axios.spread((eth, btc, ltc, xrp) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD,
                    xrp: xrp.data.XRP.USD
                }
                this.setState({ fourdaysprice: f });
            }));
    }

    render() {
        return (
            <div>
                 <div className="history--section container">
                    <h2>History (Past 5 days)</h2>
                    <div className="history--section__box">
                        <div className="history--section__box__inner">
                            <h4>{this.state.todayprice.date}</h4>
                            <div className="columns">
                                <div className="column">
                                    <p>1 BTC = ${this.state.todayprice.btc}</p>
                                </div>
                                <div className="column">
                                    <p>1 ETH = ${this.state.todayprice.eth}</p>
                                </div>
                                <div className="column">
                                    <p>1 LTC = ${this.state.todayprice.ltc}</p>
                                </div>
                                <div className="column">
                                    <p>1 XRP = ${this.state.todayprice.xrp}</p>
                                </div>
                            </div>
                        </div>
                        <div className="history--section__box__inner">
                            <h4>{this.state.yesterdayprice.date}</h4>
                            <div className="columns">
                                <div className="column">
                                    <p>1 BTC = ${this.state.yesterdayprice.btc}</p>
                                </div>
                                <div className="column">
                                    <p>1 ETH = ${this.state.yesterdayprice.eth}</p>
                                </div>
                                <div className="column">
                                    <p>1 LTC = ${this.state.yesterdayprice.ltc}</p>
                                </div>
                                <div className="column">
                                    <p>1 XRP = ${this.state.todayprice.xrp}</p>
                                </div>
                            </div>
                        </div>
                        <div className="history--section__box__inner">
                            <h4>{this.state.twodaysprice.date}</h4>
                            <div className="columns">
                                <div className="column">
                                    <p>1 BTC = ${this.state.twodaysprice.btc}</p>
                                </div>
                                <div className="column">
                                    <p>1 ETH = ${this.state.twodaysprice.eth}</p>
                                </div>
                                <div className="column">
                                    <p>1 LTC = ${this.state.twodaysprice.ltc}</p>
                                </div>
                                <div className="column">
                                    <p>1 XRP = ${this.state.todayprice.xrp}</p>
                                </div>
                            </div>
                        </div>
                        <div className="history--section__box__inner">
                            <h4>{this.state.threedaysprice.date}</h4>
                            <div className="columns">
                                <div className="column">
                                    <p>1 BTC = ${this.state.threedaysprice.btc}</p>
                                </div>
                                <div className="column">
                                    <p>1 ETH = ${this.state.threedaysprice.eth}</p>
                                </div>
                                <div className="column">
                                    <p>1 LTC = ${this.state.threedaysprice.ltc}</p>
                                </div>
                                <div className="column">
                                    <p>1 XRP = ${this.state.todayprice.xrp}</p>
                                </div>
                            </div>
                        </div>
                        <div className="history--section__box__inner">
                            <h4>{this.state.fourdaysprice.date}</h4>
                            <div className="columns">
                                <div className="column">
                                    <p>1 BTC = ${this.state.fourdaysprice.btc}</p>
                                </div>
                                <div className="column">
                                    <p>1 ETH = ${this.state.fourdaysprice.eth}</p>
                                </div>
                                <div className="column">
                                    <p>1 LTC = ${this.state.fourdaysprice.ltc}</p>
                                </div>
                                <div className="column">
                                    <p>1 XRP = ${this.state.todayprice.xrp}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default History;