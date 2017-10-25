import React, { Component } from "react";
import Link from "gatsby-link";
import { LinkContainer } from "react-router-bootstrap";
import {
	Nav,
	Navbar,
	NavItem,
	NavDropdown,
	MenuItem,
	Col,
	Grid,
	Row,
	Button,
	ButtonToolbar,
	Tabs,
	Tab
} from "react-bootstrap";
import Box from "react-layout-components";
import logo from "../img/logo.png";
import placeholder from "../img/placeholder.png";
import home1 from "../img/home-1.png";
import home2 from "../img/home-2.png";
import FontAwesome from "react-fontawesome";
import styles from "../layouts/index.css";

var createReactClass = require("create-react-class");

const indexView = createReactClass({
	getInitialState() {
		return {
			key: 1
		};
	},

	handleSelect(key) {
		this.setState({ key });
	},

	render() {
		return (
			<div>
				<Row>
					<Col xs={12} md={12}>
						<img
							className="imgNoMove site-logo"
							src={logo}
							alt="rice fintech scholars"
						/>
					</Col>
				</Row>
				<Tabs
					activeKey={this.state.key}
					onSelect={this.handleSelect}
					id="tab-navigation"
				>
					<Tab eventKey={1} title="home">
						<Grid id="homeGrid">
							<Row>
								<Col xs={12} md={12}>
									<span id="intro">
										We are <strong>educating students</strong> on the{" "}
										<strong>code</strong> behind disruptive{" "}
										<strong>financial technologies</strong>, pushing them to{" "}
										<strong>think big</strong> and{" "}
										<strong>explore entrepreneurial opportunities</strong> in
										the intersection between tech and finance.
									</span>
									<span id="divider" />
								</Col>
							</Row>
							<Row id="hero1">
								<Col md={8}>
									<img
										className="imgNoMove imgHideMobile"
										src={home1}
										alt="cryptocurrencies"
									/>
								</Col>
								<Col xs={12} sm={6} md={4}>
									<Box id="cardTemplate1">
										<Box id="cardText" wrap="wrap">
											<span id="cardTitle">Our Purpose</span>
											<p id="cardCopy">
												Members will learn how to code in languages most
												frequently used in FinTech applications through a
												structured syllabus over the course of the school year.
												The organization creates a new opportunity not yet
												available at other top research universities. FinTech
												Scholars will look to partner with Rice Alliance,
												OwlSpark, and LILIE.
											</p>
										</Box>
									</Box>
								</Col>
							</Row>
							<Row id="heroDivider" />
							<Row id="hero2">
								<Col xs={12} sm={6} md={4}>
									<Box id="cardTemplate2">
										<Box id="cardText" wrap="wrap">
											<span id="cardTitle">Specialization</span>
											<p id="cardCopy">
												Members will be exposed to various programming languages
												and applications. They are expected to become proficient
												and master one or more skills with a capstone project at
												the end of the school year presented to the rest of the
												organization utilizing their newly-acquired mastery.
											</p>
										</Box>
									</Box>
								</Col>
								<Col md={8}>
									<img
										className="imgNoMove imgHideMobile"
										src={home2}
										alt="cryptocurrencies"
									/>
								</Col>
							</Row>
							<Row id="heroMobile">
								<Col xs={12} sm={6}>
									<Col xs={12} sm={12}>
										<Box id="cardTemplate1">
											<Box id="cardText" wrap="wrap">
												<span id="cardTitle">Our Purpose</span>
												<p id="cardCopy">
													Members will learn how to code in languages most
													frequently used in FinTech applications through a
													structured syllabus over the course of the school
													year. The organization creates a new opportunity not
													yet available at other top research universities.
													FinTech Scholars will look to partner with Rice
													Alliance, OwlSpark, and LILIE.
												</p>
											</Box>
										</Box>
									</Col>
								</Col>
								<Col xs={12} sm={6}>
									<Col xs={12} sm={12}>
										<Box id="cardTemplate1">
											<Box id="cardText" wrap="wrap">
												<span id="cardTitle">Specialization</span>
												<p id="cardCopy">
													Members will be exposed to various programming
													languages and applications. They are expected to
													become proficient and master one or more skills with a
													capstone project at the end of the school year
													presented to the rest of the organization utilizing
													their newly-acquired mastery.
												</p>
											</Box>
										</Box>
									</Col>
								</Col>
							</Row>
							<Row id="rowDivider" />
							<Row>
								<Col xs={12} md={12}>
									<Box id="actions" justifyContent="space-around">
										<div>
											<Button
												id="apply"
												bsSize="large"
												href="https://goo.gl/forms/VbJy6QSk0EkOsg582"
											>
												apply
											</Button>
										</div>
										<div>
											<Button
												id="contact"
												bsSize="large"
												href="mailto:ricefintech@gmail.com"
											>
												contact
											</Button>
										</div>
									</Box>
								</Col>
							</Row>
							<Row className="rowDivider" />
							<Row id="social">
								<Col xs={12} md={12}>
									<Col xs={12} md={12}>
										<Box id="actions" justifyContent="space-around">
											<a href="#">
												<FontAwesome
													className="facebook-square"
													name="facebook-square"
													size="4x"
													style={{ color: "#1D2858" }}
												/>
											</a>
											<a href="#">
												<FontAwesome
													className="twitter-square"
													name="twitter-square"
													size="4x"
													style={{ color: "#1D2858" }}
												/>
											</a>
											<a href="#">
												<FontAwesome
													className="linkedin-square"
													name="linkedin-square"
													size="4x"
													style={{ color: "#1D2858" }}
												/>
											</a>
										</Box>
									</Col>
								</Col>
							</Row>
						</Grid>
					</Tab>
					<Tab eventKey={2} title="about">
						<Grid id="homeGrid">
							<Row>
								<Col xs={12} md={12}>
									<span id="intro">
										Founded in <strong>2017</strong> by a group of Rice
										undergraduate, graduate, and MBA students,{" "}
										<strong>FinTech Scholars</strong> is a{" "}
										<strong>selective organization</strong> which acts to
										facilitate the learning of
										<strong> finance</strong> and <strong>coding</strong> over
										the course of one school year.
									</span>
									<span id="divider-short" />
									<div className="align-right">
										<span id="intro">
											The organization hosts an <strong>annual hackathon</strong>, hosts
											<strong> speakers</strong>, brings in industry professionals to perform
											<strong> workshops</strong> and <strong>connects members</strong> to jobs and internship
											opportunities.
										</span>
									</div>
								</Col>
							</Row>
							<span id="divider"/>
							<div id="textCenter">
								<div id="section-title">
									<span id="section-title-text">Members</span>
								</div>
							</div>
							<div id="members">
								<Row>
									<Col xs={12} sm={4} md={4} id="colBtmMargin">
										<img
										className="imgNoMove"
										src={placeholder}
										alt="member"
										/>
										<div>
											<span id="memberName">Sameer Zafar</span><span id="memberTitle">, CFA</span><br />
											<span id="memberPosition">President</span>
										</div>
									</Col>
									<Col xs={12} sm={4} md={4} id="colBtmMargin">
										<img
										className="imgNoMove"
										src={placeholder}
										alt="member"
										/>
										<div>
											<span id="memberName">Stewart White</span><br />
											<span id="memberPosition">Vice President</span>
										</div>
									</Col>
									<Col xs={12} sm={4} md={4} id="colBtmMargin">
										<img
										className="imgNoMove"
										src={placeholder}
										alt="member"
										/>
										<div>
											<span id="memberName">Robert Dozortsev</span><br />
											<span id="memberPosition">Incoming President 2018</span>
										</div>
									</Col>
								</Row>
								<Row>
									<Col xs={12} sm={4} md={4} id="colBtmMargin">
										<img
										className="imgNoMove"
										src={placeholder}
										alt="member"
										/>
										<div>
											<span id="memberName">Steve Li</span><br />
											<span id="memberPosition">Education</span>
										</div>
									</Col>
									<Col xs={12} sm={4} md={4} id="colBtmMargin">
										<img
										className="imgNoMove"
										src={placeholder}
										alt="member"
										/>
										<div>
											<span id="memberName">Peter Bujosa</span><br />
											<span id="memberPosition">Treasurer</span>
										</div>
									</Col>
									<Col xs={12} sm={4} md={4} id="colBtmMargin">
										<img
										className="imgNoMove"
										src={placeholder}
										alt="member"
										/>
										<div>
											<span id="memberName">Hasnain Ali</span><br />
											<span id="memberPosition">Secretary</span>
										</div>
									</Col>
								</Row>
								<Row>
									<Col xs={12} sm={4} md={4} id="colBtmMargin">
										<img
										className="imgNoMove"
										src={placeholder}
										alt="member"
										/>
										<div>
											<span id="memberName">Will Cleland</span><br />
											<span id="memberPosition">Recruitment</span>
										</div>
									</Col>
									<Col xs={12} sm={4} md={4}>
									</Col>
									<Col xs={12} sm={4} md={4}>
									</Col>
								</Row>
								<span id="divider" />
							</div>
						</Grid>
					</Tab>
					<Tab eventKey={3} title="events">
						<Grid id="homeGrid">
							<Row>
								<Col xs={12} md={12} id="coming-soon">
									<span id="intro-sm">
										Conferences, hackathons, and guest speakers coming soon!
									</span>
								</Col>
							</Row>
						</Grid>
					</Tab>
				</Tabs>
			</div>
		);
	}
});

export default indexView;
