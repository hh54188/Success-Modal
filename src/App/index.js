import React from "react";
import SuccessModal from "../SuccessModal";

import { Button, Icon } from "antd";
const { Group: ButtonGroup } = Button;

import style from "./index.less";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "loading"
    };
  }
  changeStatus = status => {
    this.setState({
      status
    });
  };
  render() {
    const { status } = this.state;
    return (
      <div>
        <SuccessModal status={status} />
        <ButtonGroup className={style.buttonGroup}>
          <Button
            type={status === "loading" ? "primary" : "basic"}
            onClick={this.changeStatus.bind(this, "loading")}
          >
            Loading
          </Button>
          <Button
            type={status === "success" ? "primary" : "basic"}
            onClick={this.changeStatus.bind(this, "success")}
          >
            Success
          </Button>
          <Button
            type={status === "error" ? "primary" : "basic"}
            onClick={this.changeStatus.bind(this, "error")}
          >
            Error
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
