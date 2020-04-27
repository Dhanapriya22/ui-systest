import React from 'react';
import { Route } from 'react-router-dom';
//Import Layouts
import { PageLayout } from '../_layouts';

//Admin Layout
export const PageLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <PageLayout>
                <Component {...matchProps} />
            </PageLayout>
        )} />
    )
};