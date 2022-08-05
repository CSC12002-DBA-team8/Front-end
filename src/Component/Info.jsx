import React, { Component,useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Binding from './Binding';
import { connect } from "react-redux";
import './styles.css';
import './button.css'

const Name = "Nha Trang";

function mapStateToProps(state) {
    return { listTour: state.InfoReducer.listTour };
}


class Info extends Component {
    render() {
        
        return (
            <div>
                <section className="py-5">
                    <a href="/Info/Signup" className="btn btn-hover btn-lg fixed-bottombtn color-1 active" role="button" aria-pressed="true">
                        <div className="text-center my-2">
                            Đăng ký tour</div>
                    </a>

                    <div className="container my-5">
                        <Row className="g-4">

                            <h3>{Name}</h3>
                            <p>MoTa</p>
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <Card>
                                    <div class="row">
                                        <div class="col-6 col-md-4">
                                            <Card.Img variant="top" className="align-center" /><Binding />
                                        </div>
                                        <div class="col-12 col-md-8">
                                            <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                <Card.Text>
                                                    This is a longer card with supporting text below as a natural
                                                    lead-in to additional content. This content is a little bit
                                                    longer.
                                                </Card.Text>
                                            </Card.Body>
                                        </div>

                                    </div>
                                </Card>
                            ))
                            }


                        </Row >
                    </div>

                </section>
                {/* Bootstrap core JS*/}
                {/* Core theme JS*/}
            </div>


        )
    }
}

export default connect(mapStateToProps, null)(Info);