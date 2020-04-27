import React from 'react';
// Import React Bootstrap Compopnents
import { Container, Row } from 'react-bootstrap';
// Import CSS
import './Footer.css';

// Import Images
import footerLogo from '../../img/footerlogo.png';

class Footer extends React.Component {
    render() {
      return (
        <div className="footer">
          <Container fluid className="footer-set">
            <Row className="footer-align">
              <p>Powered by COLOGO &copy;	2020 Copyrights Reserved</p>
              <p><img src={footerLogo} alt="Logo" /></p>
            </Row>
          </Container>
        </div>
        
      );
    }
  }
  export { Footer };