import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Carousel, Button, Card, Row, Col } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "./components.css";

function PetProfile() {
	return (
		<Fragment>
			<Col md="4">
				<Card border="secondary">
					<Card.Header>Pet Detail</Card.Header>
					<Card.Body>
						<Carousel>
							<Carousel.Item>
								<img src="/7.jpg" alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img src="/7.jpg" alt="Sedond slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img src="/7.jpg" alt="Third slide" />
							</Carousel.Item>
						</Carousel>
						<hr />
						<Row>
							<Col md="6">
								<h3>SIBLECK</h3>
							</Col>
							<Col md="6" style={{ textAlign: "right" }}>
								<p>Racoon</p>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col md="1">
								<i className="fa fa-user fa-1x"></i>
							</Col>
							<Col md="11">
								<b>Breeder : Ahmad Khairul Anwar</b>
							</Col>
							<Col md="1">
								<i className="fa fa-map-marker fa-1x"></i>
							</Col>
							<Col md="11">
								<b>10 Miles from here</b>
							</Col>
							<Col md="1">
								<i className="fa fa-venus-mars fa-1x"></i>
							</Col>
							<Col md="11">
								<b>Male</b>
							</Col>
							<Col md="1">
								<i className="fa fa-phone fa-1x"></i>
							</Col>
							<Col md="11">
								<b>083822658482</b>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col md="12">
								<h3>ABOUT PET</h3>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col md="12">
								<p className="text-justify">
									The raccoon, sometimes spelled racoon, also
									known as the common raccoon, North American
									raccoon, northern raccoon, or coon, is a
									medium-sized mammal native to North America.
								</p>
							</Col>
						</Row>
						<Row>
							<Col md="12" style={{ textAlign: "center" }}>
								<Link to="/PetEdit">
									<Button>Edit</Button>
								</Link>
							</Col>
						</Row>
					</Card.Body>
					<Card.Footer></Card.Footer>
				</Card>
			</Col>
		</Fragment>
	);
}

export default PetProfile;