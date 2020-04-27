import React from 'react';
// Import React Bootstrap Compopnents
import { Container, Row, Col, Form, FormControl, Table, Badge } from 'react-bootstrap';
//Import Chart Components
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//Import Accordion
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
//Import Progress Bar
import ProgressBar from 'react-bootstrap/ProgressBar'

// Import CSS
import './ComponentTwo.css';


// Import Images
import closeIcon from '../img/closeitem.png';
import researchIcon from '../img/research.svg';
import chartIcon from '../img/chart.svg';
import propicOne from '../img/profilepic.jpg';
import icoOne from '../img/icon-one.svg';

//Set Chart Values
const percentageOne = 74;


class ComponentTwo extends React.Component {  
    render() {
      return (
        <div className="page-content">
          <Container fluid>
            {/* Page Header */}
            <Row className="page-header">
              <h1>Page Title</h1>
              <div className="serch-field">
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <div className="close-imgss">
                  <img src={closeIcon} alt="Close Icon"/>
                </div>
              </div>
            </Row>

            {/* Page Body */}
            <Row className="page-body">
              {/* Page Body Left */}
                <Col sm="2">
                  <Col sm="12" className="left-bg">
                    <div className="grey-bg">
                      <div>
                        <img src={icoOne} alt="Edit Icon" className="comp-two-edit" />
                      </div>
                      <div className="research-sec">
                        <img src={researchIcon} alt="Edit Icon" className="comp-research" />
                        <h1>Page Title</h1>
                      </div>
                      <Row className="research-text">
                        <Col sm="5">
                          <h5>ABCD</h5>
                        </Col>
                        <Col sm="7">
                          <img src={chartIcon} alt="Chart Icon" /> <span>287 Views</span>
                        </Col>
                      </Row>                      
                    </div>
                    <div className="chart-score-sec row">
                      <Col>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ladauntium, totam rem aperiam, eaque.</p>
                      </Col>
                      <Col className="chart-sec">
                        <Row>
                          <CircularProgressbar value={percentageOne} text={`${percentageOne}%`} />
                        </Row>
                        <Row className="chart-text">
                          <p>Chart Score</p>
                        </Row>
                      </Col>
                      <Col>
                        <ul className="pro-pics">
                          <li>
                            <a><img src={propicOne} className="pro-pic" alt="Close Icon" /></a>
                          </li>
                          <li>
                            <a><img src={propicOne} className="pro-pic" alt="Close Icon" /></a>
                          </li>
                          <li>
                            <a><img src={propicOne} className="pro-pic" alt="Close Icon" /></a>
                          </li>
                          <li>
                            <a>+12</a>
                          </li>
                        </ul>
                      </Col>
                    </div>
                    <Col className="terms">
                      <h3>Terms of Uses</h3>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ladauntium, totam rem aperiam, eaque.</p>
                    </Col>
                  </Col>
                </Col>

                {/* Page Body Right */}
                <Col sm="10" className="right-sets">
                  <Col className="tab-headers mb-20">
                    <Row className="dd">
                      <Col sm="2">Table Header 1</Col>
                      <Col sm="3">Table Header 2</Col>
                      <Col sm="4">Table Header 3</Col>
                      <Col sm="3">Table Header 4</Col>
                    </Row>
                  </Col>
                  <Col>
                    <Accordion>
                      {/* Accordion 1st Item */}
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  <Row>
                                    <Col sm="2">Column Text</Col>
                                    <Col sm="3">Column Text</Col>
                                    <Col sm="4">Column Text</Col>
                                    <Col sm="3">
                                      <Row className="accordion-sec">
                                        <Col sm="7">
                                          <ProgressBar now={76}></ProgressBar>
                                        </Col>
                                        <Col sm="3">
                                          <span>76%</span>
                                        </Col>
                                        <Col sm="3"></Col>
                                      </Row>                                      
                                    </Col>
                                  </Row>
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                          <Table className="accordion-table">
                            <thead>
                              <tr>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>Chart Score</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={24}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>24%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={58}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>58%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={76}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>76%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={17}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>17%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={49}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>49%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          </AccordionItemPanel>
                      </AccordionItem>
                      
                      {/* Accordion 2nd Item */}
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  <Row>
                                    <Col sm="2">Column Text</Col>
                                    <Col sm="3">Column Text</Col>
                                    <Col sm="4">Column Text</Col>
                                    <Col sm="3">
                                      <Row className="accordion-sec">
                                        <Col sm="7">
                                          <ProgressBar now={76}></ProgressBar>
                                        </Col>
                                        <Col sm="3">
                                          <span>76%</span>
                                        </Col>
                                        <Col sm="3"></Col>
                                      </Row>                                      
                                    </Col>
                                  </Row>
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                          <Table className="accordion-table">
                            <thead>
                              <tr>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>Chart Score</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={24}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>24%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={58}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>58%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={76}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>76%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={17}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>17%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={49}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>49%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          </AccordionItemPanel>
                      </AccordionItem>
                      
                      {/* Accordion 3rd Item */}
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  <Row>
                                    <Col sm="2">Column Text</Col>
                                    <Col sm="3">Column Text</Col>
                                    <Col sm="4">Column Text</Col>
                                    <Col sm="3">
                                      <Row className="accordion-sec">
                                        <Col sm="7">
                                          <ProgressBar now={76}></ProgressBar>
                                        </Col>
                                        <Col sm="3">
                                          <span>76%</span>
                                        </Col>
                                        <Col sm="3"></Col>
                                      </Row>                                      
                                    </Col>
                                  </Row>
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                          <Table className="accordion-table">
                            <thead>
                              <tr>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>Chart Score</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={24}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>24%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={58}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>58%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={76}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>76%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={17}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>17%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={49}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>49%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          </AccordionItemPanel>
                      </AccordionItem>

                      {/* Accordion 4th Item */}
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  <Row>
                                    <Col sm="2">Column Text</Col>
                                    <Col sm="3">Column Text</Col>
                                    <Col sm="4">Column Text</Col>
                                    <Col sm="3">
                                      <Row className="accordion-sec">
                                        <Col sm="7">
                                          <ProgressBar now={76}></ProgressBar>
                                        </Col>
                                        <Col sm="3">
                                          <span>76%</span>
                                        </Col>
                                        <Col sm="3"></Col>
                                      </Row>                                      
                                    </Col>
                                  </Row>
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                          <Table className="accordion-table">
                            <thead>
                              <tr>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>InnerTableTitle</th>
                                <th>Chart Score</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={24}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>24%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={58}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>58%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={76}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>76%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={17}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>17%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                              <tr>
                                <td>Row Text</td>
                                <td>Placeholder Text</td>
                                <td>Placeholder Text</td>
                                <td>Row Text <Badge variant="secondary">T</Badge></td>
                                <td>
                                  <Row className="accordion-sec">
                                    <Col sm="7">
                                      <ProgressBar now={49}></ProgressBar>
                                    </Col>
                                    <Col sm="3">
                                      <span>49%</span>
                                    </Col>
                                    <Col sm="3"></Col>
                                  </Row>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </Col>                  
                </Col>
            </Row>                      
          </Container>          
        </div>
      );
    }
  }
  export { ComponentTwo };