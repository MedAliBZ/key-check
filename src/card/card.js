import React from 'react'
import './card.css'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CardDark({header,body}) {
    return (
        <Card
            bg="info"
            text='white'
            style={{ width: '15rem',margin:'0 2%' }}
            className="mb-2"
        >
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Title>{body}</Card.Title>
            </Card.Body>
        </Card>
    )
}
