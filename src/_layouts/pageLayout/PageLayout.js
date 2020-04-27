import React from 'react';
// Import Component
import { Header, Footer } from '../../_components';

//Import CSS
import './PageLayout.css';

class PageLayout extends React.Component {
    render() {
        return (
            <div className="page-layout">
                <div className="container-wrapper" id="page-layout">
                    <Header />
                    {this.props.children}               
                    <Footer />
                </div>
            </div>
        )
    }
}
export { PageLayout };