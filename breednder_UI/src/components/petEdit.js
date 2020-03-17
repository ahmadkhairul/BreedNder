import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import Data from "./data";
import "font-awesome/css/font-awesome.min.css";
import "./components.css";

function PetEdit() {
	return (
		<Fragment>
			<Col md="4">
				<Card border="secondary">
					<Card.Header>Pet Detail Edit</Card.Header>
					<Card.Body>
						<Form>
							<Form.Group>
								{Data.map((postData, index) => {
									return (
										<div className="box" key={index}>
											<img src={postData.pics} alt="" />
											<div className="text">
												<label for="up-tsf">
													<i
														className={
															postData.status
														}
													></i>
												</label>
												<Form.Control
													type="file"
													id="up-tsf"
												/>
											</div>
										</div>
									);
								})}
							</Form.Group>
							<Form.Group>
								<Form.Control
									type="text"
									value="Sibleck"
									placeholder="Pet Name"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Control as="select">
									<option>Racoon</option>
									<option>Cat</option>
									<option>Bear</option>
									<option>Komodo</option>
								</Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Control as="select">
									<option>Male</option>
									<option>Female</option>
								</Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Control as="select">
									<option>Adult</option>
									<option>Teenager</option>
									<option>Child</option>
								</Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Control
									as="textarea"
									rows="6"
									placeholder="About Pet"
								>
									The raccoon, sometimes spelled racoon, also
									known as the common raccoon, North American
									raccoon, northern raccoon, or coon, is a
									medium-sized mammal native to North America.
								</Form.Control>
							</Form.Group>
						</Form>
						<Row>
							<Col md="12" style={{ textAlign: "center" }}>
								<Link to="/PetProfile">
									<Button>Save</Button>
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

export default PetEdit;
