import React from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

const RFCard = (props) => (
    <Card shadow={5} style={props.card.style}>
        <CardTitle style={props.card.cardTitle.style}>
            {props.card.cardTitle.body}</CardTitle>
        <CardText>
            {props.card.cardText.body}
        </CardText>
        <CardActions border>
            {props.card.acctionButtons.map(action => (
                <Button colored>{action}</Button>
            ))}
        </CardActions>
        <CardMenu style={props.card.cardMenu.style}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
);

export default RFCard;