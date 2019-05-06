import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'


const DishDetail = (props) => {
    const dish = props.dish
    if (dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;
