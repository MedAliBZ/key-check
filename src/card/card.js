import React from 'react'
import './card.css'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CardDark({header,bodycard}) {
    const copy = () =>{
        navigator.clipboard.writeText(`${header}=="${bodycard}"`)
    }

    return (
        <Card
            bg="info"
            text='white'
            style={{ width: '15rem',margin:'0 2%' }}
            className="mb-2"
            onClick={copy}
        >
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Title>{bodycard}</Card.Title>
                <span style={{fontSize:'14px'}}>(Click to copy)</span>
            </Card.Body>
        </Card>
    )
}
