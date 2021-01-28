import './App.css';
import React from "react";
import {
  Col,
  Container,
  Row
} from "reactstrap";
import Video from "./components/Video";
import videos from "./assets/VideoData";

const { elephantsDream, elephantsDreamAligned, rickroll } = videos

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Video Player</h1>
          </Col>
        </Row>
        <Video {...elephantsDreamAligned}/>
      </Container>
    </div>
  )
    ;
}

export default App;
