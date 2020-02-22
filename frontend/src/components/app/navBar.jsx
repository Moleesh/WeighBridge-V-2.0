import React from "react";
import {Tab, Tabs} from "react-bootstrap";

import Weighing from "./navBar/weighing";
import Configuration from "./navBar/configuration";
import Report from "./navBar/report";
import Settings from "./navBar/settings";
import WebCam from "./navBar/webCam";


const NavBar = props => {
    // noinspection JSUnresolvedVariable
    let thisState = props.preState;
    // noinspection DuplicatedCode,DuplicatedCode,DuplicatedCode,DuplicatedCode,DuplicatedCode
    return (
        <Tab.Container defaultActiveKey="first">
            <Tabs
                justify
                variant="tabs"
                defaultActiveKey="weighing"
                className="mt-1 h5 py-2 pb-1"
            >
                <Tab eventKey="weighing" title="Weighing"
                     onEntered={() => thisState.weighing.reference.vehicleNoReference.current.focus()}>
                    <Weighing preState={thisState}/>
                </Tab>
                <Tab eventKey="webcam" title="WebCam">
                    <WebCam preState={thisState}/>
                </Tab>
                <Tab eventKey="report" title="Report" onEntered={() => {
                }}>
                    <Report preState={thisState}/>
                </Tab>
                <Tab
                    eventKey="configuration"
                    title="Configuration"
                    onEntered={() => {
                        fetch(thisState.INITIAL_URL + "/getAllMaterial")
                            .then(response => {
                                if (response.status === 200) {
                                    return response.json();
                                } else throw Error(response.statusText);
                            })
                            .then(result => {
                                thisState.configuration.material.list = result;
                                thisState.setMyState(thisState);
                            })
                            .catch(() => {
                            });
                        fetch(thisState.INITIAL_URL + "/getAllDrivers")
                            .then(response => {
                                if (response.status === 200) {
                                    return response.json();
                                } else throw Error(response.statusText);
                            })
                            .then(result => {
                                thisState.configuration.drivers.list = result;
                                thisState.setMyState(thisState);
                            })
                            .catch(() => {
                            });
                        fetch(thisState.INITIAL_URL + "/getAllTareWeight")
                            .then(response => {
                                if (response.status === 200) {
                                    return response.json();
                                } else throw Error(response.statusText);
                            })
                            .then(result => {
                                thisState.configuration.tareWeight.list = result;
                                thisState.setMyState(thisState);
                            })
                            .catch(() => {
                            });
                    }}
                >
                    <Configuration preState={thisState} />
                </Tab>
                <Tab
                    eventKey="settings"
                    title="Settings"
                    onEntered={() => {
                        fetch(thisState.INITIAL_URL + "/getAllSettings")
                            .then(response => {
                                if (response.status === 200) {
                                    return response.json();
                                } else throw Error(response.statusText);
                            })
                            .then(result => {
                                thisState.setting.value = result;
                                thisState.setMyState(thisState);
                            })
                            .catch(() => {
                            });
                    }}
                >
                    <Settings preState={thisState} />
                </Tab>
            </Tabs>
        </Tab.Container >
    );
};

export default NavBar;
