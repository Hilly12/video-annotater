import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Button} from "reactstrap";
import VideoPlayer from "./VideoPlayer";

function Metadata(props) {
  return (
    <div className="center">
      <Button tag="a" color="info" size="large" href="/">
        Back
      </Button>
      <div className="info">
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default function Video(props) {
  return (
    <Switch>
      <Route exact path="/" render={() => <VideoPlayer {...props} />}/>
      <Route exact path="/info" render={() => <Metadata {...props} />}/>
    </Switch>
  )
}