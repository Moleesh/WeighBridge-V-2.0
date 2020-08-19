import React from "react";
import {Card, Col, Form, Row} from "react-bootstrap";

import ColumnOne from "./invoice/columnOne";
import ColumnTwo from "./invoice/columnTwo";
import ColumnThree from "./invoice/columnThree";
import Bottom from "./invoice/bottom";
import Toggle from "react-bootstrap-toggle";

import InvoiceNo from "./invoice/invoiceNo"

const Invoice = props => {
    let thisState = props.preState;
    return (
        <Form
            className="py-2"
            onKeyDown={event => {
                if (event.keyCode === 9) {
                    event.preventDefault();
                }
            }}
        >
            <Row style={{height: 200}}>
                <Form.Group as={Row}>
                    <Col sm="1"/>
                    <Col sm="2" className="mt-4">
                        <Form.Label column sm="3">Dummy</Form.Label>
                        <Col>
                            <Toggle
                                onClick={() => {
                                    if (!thisState.invoice.dummy) {
                                        fetch(thisState.INITIAL_URL + "/setting/getNextDummyInvoiceNoByProfile?profile=" + thisState.PROFILE)
                                            .then(response => {
                                                if (response.status === 200) {
                                                    return response.json();
                                                } else throw Error(response.statusText);
                                            })
                                            .then(result => {
                                                return result;
                                            })
                                            .catch(() => {
                                                return -1;
                                            })
                                            .then(result => {
                                                thisState.invoice.dummy = false;
                                                thisState.invoices.dummyInvoiceNo = result;
                                                if (result === -1) {
                                                    thisState.invoice.invoiceNo = -1;
                                                    thisState.invoices.disable.saveDisabled = true;
                                                    thisState.SETTING_DISABLED = true;
                                                } else {
                                                    thisState.invoices.dummySelectorDialog = true;
                                                }
                                                thisState
                                                    .setMyState(thisState)
                                                    .then(() => {
                                                            if (thisState.invoices.dummySelectorDialog) {
                                                                thisState.invoices.reference.referenceSlipNoReference.current.focus()
                                                            }
                                                        }
                                                    );
                                            });
                                    } else {
                                        fetch(thisState.INITIAL_URL + "/setting/getNextInvoiceNoByProfile?profile=" + thisState.PROFILE)
                                            .then(response => {
                                                if (response.status === 200) {
                                                    return response.json();
                                                } else throw Error(response.statusText);
                                            })
                                            .then(result => {
                                                return result;
                                            })
                                            .catch(() => {
                                                return -1;
                                            })
                                            .then(result => {
                                                thisState.invoice.dummy = false;
                                                thisState.invoice.invoiceNo = result;
                                                if (result === -1) {
                                                    thisState.invoices.disable.saveDisabled = true;
                                                    thisState.SETTING_DISABLED = true;
                                                }
                                                thisState
                                                    .setMyState(thisState)
                                                    .then(() =>
                                                        thisState.invoices.reference.referenceSlipNoReference.current.focus()
                                                    );
                                            });
                                    }
                                }}
                                on="ON"
                                off="OFF"
                                size="lg"
                                offstyle="danger"
                                active={thisState.invoice.dummy}
                                recalculateOnResize={true}
                                disabled={thisState.invoices.disable.selector}
                            />
                        </Col>
                    </Col>
                </Form.Group>
                <InvoiceNo preState={thisState}/>
                <Col sm="2" className="mt-5">
                    <Form.Group as={Row}>
                        <Col sm="1"/>
                        <Form.Check
                            type="radio"
                            name="GST-Selector"
                            label="CGST/SGST"
                            checked={!thisState.invoices.igstSelector}
                            onClick={() => {
                                thisState.invoices.igstSelector = false;
                                thisState.invoices.reference.referenceSlipNoReference.current.focus();
                                thisState.setMyState(thisState);
                                thisState.calculateInvoiceAmount(thisState);
                            }}
                            onChange={() => {
                            }}
                            disabled={thisState.invoices.disable.selector}
                        />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-0">
                        <Col sm="1"/>
                        <Form.Check
                            type="radio"
                            name="GST-Selector"
                            label="IGST"
                            checked={thisState.invoices.igstSelector}
                            onClick={() => {
                                thisState.invoices.igstSelector = true;
                                thisState.invoices.reference.referenceSlipNoReference.current.focus();
                                thisState.setMyState(thisState);
                                thisState.calculateInvoiceAmount(thisState);
                            }}
                            onChange={() => {
                            }}
                            disabled={thisState.invoices.disable.selector}
                        />
                    </Form.Group>
                </Col>
                <Col sm="5">
                    <Row className="justify-content-center bold mt-3">
                        <Card
                            className="text-center w-100 display-2 "
                            style={{
                                color: "red",
                                fontFamily: "sans-serif"
                            }}
                        >
                            <Card.Header>{thisState.invoice.total === "" ? 0 : thisState.invoice.total}</Card.Header>
                        </Card>
                    </Row>
                </Col>
            </Row>
            <Row>
                <ColumnOne preState={thisState}/>
                <ColumnTwo preState={thisState}/>
                <ColumnThree preState={thisState}/>
            </Row>
            <Row>
                <Col sm="6">
                    <Bottom preState={thisState}/>
                </Col>
                <Col sm="6"/>
            </Row>
        </Form>
    );
};

export default Invoice;
