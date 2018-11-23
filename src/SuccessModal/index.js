import React from "react";
import { Modal, Button, Icon } from "antd";
import classNames from "classnames";
import posed from "react-pose";

import "antd/dist/antd.less";

import style from "./index.less";

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

export default class SuccessModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "loading"
    };
    setInterval(() => {
      this.setState({
        status: "success"
      });
    }, 1000 * 1);
  }
  render() {
    return (
      <div>
        <Modal
          className={classNames(style.SuccessModal)}
          closable={false}
          visible
          footer={null}
        >
          <div className={classNames(style.IconArea)}>
            {/* <Icon className={style.Icon} type="check-circle" /> */}
            {/* <AnimationLoader /> */}
            {/* <SuccessIconAnimation /> */}
            <div
              className={classNames(style[this.state.status], style.color)}
            />
            {/* <div className={style.TextArea}>
              <p className={style.Title}>创建成功</p>
              <Button type="primary">
                <span>前往报表</span>
                <Icon type="arrow-right" />
              </Button>
            </div> */}
          </div>
        </Modal>
      </div>
    );
  }
}
