import React from 'react';

import Aux from '../../hoc/Aux1';
import classes from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <div className={classes.shape}>App to be updated soon!!!</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;