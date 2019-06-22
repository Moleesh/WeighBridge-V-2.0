import React from "react";
import { Row, Col, Tab, Nav, Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faWrench } from '@fortawesome/free-solid-svg-icons'


import GeneralSettings from "./settings/generalSettings";
import PrinterSettings from "./settings/printerSettings";
import IndicatorSettings from "./settings/indicatorSettings";
import DisplaySettings from "./settings/displaySettings";
import AdminSettings from "./settings/adminSettings";

const Settings = props => {
  let thisState = props.preState;
  return (
    <Tab.Container defaultActiveKey="generalSettings">
      <Row>
        <Col sm="2" className="pt-5">
          <Nav variant="pills" className="flex-column">
            <h5 className="font-weight-bold pb-3">Settings</h5>
            <Nav.Item>
              <Nav.Link eventKey="generalSettings">General Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="printerSettings">Printer Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="indicatorSettings">
                Indicator Settings
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="displaySettings">Display Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="adminSettings">Admin Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm="10" className="pt-2">
          <Tab.Content>
            <Tab.Pane eventKey="generalSettings">
              <GeneralSettings preState={thisState} key="generalSettings" />
            </Tab.Pane>
            <Tab.Pane eventKey="printerSettings">
              <PrinterSettings preState={thisState} key="printerSettings" />
            </Tab.Pane>
            <Tab.Pane eventKey="indicatorSettings">
              <IndicatorSettings preState={thisState} key="indicatorSettings" />
            </Tab.Pane>
            <Tab.Pane eventKey="displaySettings">
              <DisplaySettings preState={thisState} key="displaySettings" />
            </Tab.Pane>
            <Tab.Pane eventKey="adminSettings">
              <AdminSettings preState={thisState} key="adminSettings" />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      <Row></Row>
      <div className="footer-copyright text-center py-3 ">
        <footer>
          <Button variant="success" size="lg" className="mr-3" onClick={() => {
            fetch(thisState.INITIAL_URL + "/saveAllSettings", {
              method: "PUT",
              body: JSON.stringify(thisState.setting.value),
              headers: { "content-type": "application/json" }
            })
              .then(response => {
                if (response.status === 200) {
                  thisState.alerts.push({
                    id: new Date().getTime(),
                    type: "success",
                    headline: "Setting Updated",
                    message: "Setting Updated successfully."
                  });
                  thisState.setMyState(thisState);
                } else throw Error(response.statusText);
              })
              .catch(error => {
                thisState.alerts.push({
                  id: new Date().getTime(),
                  type: "danger",
                  headline: "Setting Updated",
                  message: "Setting Updated Failed."
                });
                thisState.setMyState(thisState);
              });
          }}>
            <FontAwesomeIcon icon={faWrench} className="mr-3" />
            UPDATE
          </Button>
          <Button variant="info" size="lg" onClick={() => {
            fetch(thisState.INITIAL_URL + "/getAllSettings")
              .then(response => {
                if (response.status === 200) {
                  return response.json();
                } else throw Error(response.statusText);
              })
              .then(result => {
                thisState.setting.value = result;
                thisState.alerts.push({
                  id: new Date().getTime(),
                  type: "success",
                  headline: "Setting Refresh",
                  message: "Setting Refresh Successfully."
                });
                thisState.setMyState(thisState);
              })
              .catch(error => { });
          }}>
            <FontAwesomeIcon icon={faSync} spin className="mr-3" />
            Refresh
          </Button>
        </footer>
      </div>
    </Tab.Container>
  );
};

export default Settings;
