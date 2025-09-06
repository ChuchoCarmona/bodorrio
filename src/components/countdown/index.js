import React from 'react';
import TimeCountDown from '../TimeCountDown/TimeCountDown';
import './style.css'

const Saveday = () => {

    return (
        <div className="count-down-area">
            <div className="count-down-sectionparallax">
                <div className="container">
                    <div className="count-down-item count-down-item2">
                        <div className="row">
                            <div className="col-12 col-md-4 section-area">
                                <div className="section-sub"></div>
                                <h2 className="big"><span>Acompañanos.....</span>El gran dia</h2>
                            </div>
                            <div className="col-12 col-md-8 clock-area">
                                <div className="count-down-clock">
                                    <TimeCountDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saveday;