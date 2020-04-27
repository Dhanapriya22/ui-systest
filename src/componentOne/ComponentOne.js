import React from 'react';
import { Link } from 'react-router-dom';
// Import React Bootstrap Compopnents
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
//Import Material UI Components
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//Import Chart Components
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Import CSS
import './ComponentOne.css';


// Import Images
import plusIcon from '../img/plusicon.svg';
import closeIcon from '../img/closeitem.png';
import arrowIcon from '../img/arrow.svg';
import researchIcon from '../img/research.svg';
import chartIcon from '../img/chart.svg';
import editIcon from '../img/edit.svg';
import propicOne from '../img/profilepic.jpg';
import icoOne from '../img/icon-one.svg';
import icoTwo from '../img/icon-two.svg';
import icoThree from '../img/icon-three.svg';

//Set Label Values
const labelValue = <label className="label-text">
    <span>Item A</span>
    <span className="first-text">(150)</span>
</label>
//Set Chart Values
const percentageOne = 74;
const percentageTwo = 51;
const percentageThree = 19;
const percentageFour = 70;


class ComponentOne extends React.Component {
  // Constructor Initialization
  constructor(props) {
		super(props);
		this.state = {
      itemOne: true, itemTwo: true, itemThree: true, itemFour: true, clearAll: true, checked: false,
		};
  }
  
    render() {
      const {itemOne, itemTwo, itemThree, itemFour, clearAll, checked} = this.state;
      return (
        <div className="page-content">
          <Container fluid>
            {/* Page Header */}
            <Row className="page-header">
              <h1>Page Title</h1>
              <Link className="img-circle" to="/component">
                <img src={plusIcon} alt="Plus Icon" />
              </Link>
            </Row>

            {/* Page Body */}
            <Row className="page-body">
              {/* Page Body Left */}
                <Col sm="2">
                  <Col sm="12" className="left-bg">
                    <div>
                      <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      </Form>
                    </div>
                    {clearAll=== true &&
                      <Row className="item-view">
                        {itemOne=== true &&
                          <Col sm={6}>
                            <Col sm={12}>
                              Item A1 <img src={closeIcon} alt="Close Icon" onClick={() => this.setState({itemOne: !itemOne})}/>
                            </Col>
                          </Col>
                        }
                        {itemTwo=== true &&
                          <Col sm={6}>
                            <Col sm={12}>
                              Item A1 <img src={closeIcon} alt="Close Icon" onClick={() => this.setState({itemTwo: !itemTwo})}/>
                            </Col>
                          </Col>
                        }
                        {itemThree=== true &&
                          <Col sm={6}>
                            <Col sm={12}>
                              Item A1 <img src={closeIcon} alt="Close Icon" onClick={() => this.setState({itemThree: !itemThree})}/></Col>
                          </Col>
                        }
                        {itemFour=== true &&
                          <Col sm={6}>
                            <Col sm={12}>
                              Item A1 <img src={closeIcon} alt="Close Icon" onClick={() => this.setState({itemFour: !itemFour})}/></Col>
                          </Col>
                        }
                      </Row>
                    }
                    <Row className="clear-all-sec">
                      <a className="clear-all" onClick={() => this.setState({clearAll: false})}>Clear All</a>
                    </Row>                   
                    <Row className="first-list">
                      <ul>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                      </ul>
                    </Row>
                    <Row>
                      <div className="filter-item">
                        <h1>Filter Items</h1>
                        <img src={arrowIcon} alt="Arrow Icon" />
                      </div>
                      <Row className="first-list">
                      <ul className="sec-list">
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox name="checkedC" />} label={labelValue} />
                        </li>
                      </ul>
                    </Row>
                    </Row>
                  </Col>
                </Col>

                {/* Page Body Right */}
                <Col sm="10" className="right-sets">
                  {/* 1st Set */}
                  <Col sm="12" className="right-bg">
                    <div id="triangle-up"></div>
                    <Row>
                      <Col sm="1">
                        <Col sm="12"className="right-image np">
                          <img src={researchIcon} alt="Close Icon" />
                        </Col>
                      </Col>
                      <Col sm="10" className="pl">
                        <Row className="item-details">
                          <Col sm="3">
                            <h2>Item Title</h2>
                          </Col>
                          <Col sm="8">
                            <img src={chartIcon} alt="Chart Icon" /> <span>287 Views</span>
                          </Col>
                          <Col sm="1">
                            <img src={editIcon} alt="Edit Icon" className="edit-icon" />
                          </Col>
                        </Row>
                        <Row className="item-texts">
                          <h5>Subtitle : ABCD</h5>
                          <p>Description : Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ladauntium, totam rem aperiam, eaque.</p>
                        </Row>
                        <Row>
                          <Col sm="8">
                            <ul className="tags-list">
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>+10 more Dataset</a>
                              </li>
                            </ul>
                          </Col>
                          <Col sm="4">
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
                        </Row>
                      </Col>
                      <Col sm="1" className="chart-sec">
                        <Row>
                          <CircularProgressbar value={percentageOne} text={`${percentageOne}%`} />
                        </Row>
                        <Row className="chart-text">
                          <p>Chart Score</p>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  {/* 2nd Set */}
                  <Col sm="12" className="right-bg">
                    <Row>
                      <Col sm="1">
                        <Col sm="12"className="right-image np">
                          <img src={researchIcon} alt="Close Icon" />
                        </Col>
                      </Col>
                      <Col sm="10" className="pl">
                        <Row className="item-details">
                          <Col sm="3">
                            <h2>Item Title</h2>
                          </Col>
                          <Col sm="8">
                            <img src={chartIcon} alt="Chart Icon" /> <span>287 Views</span>
                          </Col>
                          <Col sm="1">
                            <img src={icoOne} alt="Edit Icon" className="edit-icon" />
                          </Col>
                        </Row>
                        <Row className="item-texts">
                          <h5>Subtitle : ABCD</h5>
                          <p>Description : Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ladauntium, totam rem aperiam, eaque.</p>
                        </Row>
                        <Row>
                          <Col sm="8">
                            <ul className="tags-list">
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>+10 more Dataset</a>
                              </li>
                            </ul>
                          </Col>
                          <Col sm="4">
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
                        </Row>
                      </Col>
                      <Col sm="1" className="chart-sec">
                        <Row>
                          <CircularProgressbar value={percentageTwo} text={`${percentageTwo}%`} />
                        </Row>
                        <Row className="chart-text">
                          <p>Chart Score</p>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  {/* 3rd Set */}
                  <Col sm="12" className="right-bg">
                    <Row>
                      <Col sm="1">
                        <Col sm="12"className="right-image np">
                          <img src={researchIcon} alt="Close Icon" />
                        </Col>
                      </Col>
                      <Col sm="10" className="pl">
                        <Row className="item-details">
                          <Col sm="3">
                            <h2>Item Title</h2>
                          </Col>
                          <Col sm="8">
                            <img src={chartIcon} alt="Chart Icon" /> <span>287 Views</span>
                          </Col>
                          <Col sm="1">
                            <img src={icoTwo} alt="Edit Icon" className="edit-icon" />
                          </Col>
                        </Row>
                        <Row className="item-texts">
                          <h5>Subtitle : ABCD</h5>
                          <p>Description : Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ladauntium, totam rem aperiam, eaque.</p>
                        </Row>
                        <Row>
                          <Col sm="8">
                            <ul className="tags-list">
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>+10 more Dataset</a>
                              </li>
                            </ul>
                          </Col>
                          <Col sm="4">
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
                        </Row>
                      </Col>
                      <Col sm="1" className="chart-sec">
                        <Row>
                          <CircularProgressbar value={percentageThree} text={`${percentageThree}%`} />
                        </Row>
                        <Row className="chart-text">
                          <p>Chart Score</p>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  {/* 4th Set */}
                  <Col sm="12" className="right-bg">
                    <Row>
                      <Col sm="1">
                        <Col sm="12"className="right-image np">
                          <img src={researchIcon} alt="Close Icon" />
                        </Col>
                      </Col>
                      <Col sm="10" className="pl">
                        <Row className="item-details">
                          <Col sm="3">
                            <h2>Item Title</h2>
                          </Col>
                          <Col sm="8">
                            <img src={chartIcon} alt="Chart Icon" /> <span>287 Views</span>
                          </Col>
                          <Col sm="1">
                            <img src={icoThree} alt="Edit Icon" className="edit-icon" />
                          </Col>
                        </Row>
                        <Row className="item-texts">
                          <h5>Subtitle : ABCD</h5>
                          <p>Description : Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ladauntium, totam rem aperiam, eaque.</p>
                        </Row>
                        <Row>
                          <Col sm="8">
                            <ul className="tags-list">
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>Tags</a>
                              </li>
                              <li>
                                <a>+10 more Dataset</a>
                              </li>
                            </ul>
                          </Col>
                          <Col sm="4">
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
                        </Row>
                      </Col>
                      <Col sm="1" className="chart-sec">
                        <Row>
                          <CircularProgressbar value={percentageFour} text={`${percentageFour}%`} />
                        </Row>
                        <Row className="chart-text">
                          <p>Chart Score</p>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Col>
            </Row>

                      
          </Container>          
        </div>
      );
    }
  }
  export { ComponentOne };