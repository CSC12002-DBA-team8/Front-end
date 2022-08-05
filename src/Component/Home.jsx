import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import Binding from "./Binding";
import "./styles.css";

const mapStateToProps = (state) => {
  return { listTour: state.TourReducer.listTour };
};


const onLinkClick = () => {

  this.props.history.push({
    pathname: "/Info",
    state: { maTour: "NT1" },
  });
};

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="py-5">
          <div className="container my-5">
            <Row xs={1} md={2} className="g-4">
              {this.props.listTour.map((spTour, _idx) => {
                return (
                  <Col key={_idx}>
                    <Card>
                      <Card.Img variant="top" className="align-center" />
                      <img
                        src={spTour.hinhAnh}
                        alt=""
                        className="img-responsive"
                      />
                      <Card.Body>
                        <Card.Title>{spTour.nameTour}</Card.Title>
                        <Card.Text>{spTour.moTa}</Card.Text>
                      </Card.Body>
                      <div class="card-footer">
                        <a
                          class="btn btn-primary btn-sm"
                          href="/Info"
                          onClick={onLinkClick}
                        >
                          More Info
                        </a>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </section>
      </div>
    );
  }
}
export default connect(mapStateToProps, null)(Home);
