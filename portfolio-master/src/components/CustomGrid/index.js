
import React, {Fragment} from 'react';
import { Grid, Cell } from 'react-mdl';

const CustomGrid = (props) => (
    <>
        {Object.keys(props.grids).map(key =>
            <div key={key}>
                <h2>{key}</h2>
                <Grid>
                    {props.grids[key].map(grid => (
                        <Fragment key={grid.name}>
                            <Cell col={3}>
                                <h6>{grid.year}</h6>
                            </Cell>
                            <Cell col={9}>
                                <h6>{grid.name}</h6>
                                <p>{grid.description}</p>
                            </Cell>
                        </Fragment>
                    ))}
                </Grid>
            </div>
        )}
    </>
);

export default CustomGrid;
