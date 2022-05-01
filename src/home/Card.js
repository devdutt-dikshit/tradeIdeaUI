import { Card, Button } from "react-bootstrap"
import React from "react";
// import { BsFillBellFill } from "react-icons/bs";
const IdeaCard = props => {
    return (
        <>
            <Card style={{ width: '18rem', height: '18rem' }}>
                <Card.Header>
                    <div className="avatar">
                        <Card.Img variant="bottom" src="https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg" />
                    </div>
                    <Card.Text className="mt-1">Harsh Vardhan Singh</Card.Text>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Bitcoin Will go up</Card.Title>

                    <Card.Subtitle>
                        Some quick example text.
                    </Card.Subtitle>
                    <Card.Text>Harsh Vardhan Singh</Card.Text>
                    <Card.Text>Harsh Vardhan Singh</Card.Text>
                    <Card.Text>Harsh Vardhan Singh</Card.Text>
                    <Button variant="primary" className="pull-right">Join this idea</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default IdeaCard;