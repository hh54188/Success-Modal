import React from "react";
import { Modal, Button, Icon } from "antd";
import classNames from "classnames";
import posed from "react-pose";

import "antd/dist/antd.less";

import style from "./index.less";

export default class SuccessModal extends React.Component {
  constructor(props) {
    super(props);
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
          <div className={classNames(style.IconArea, style.loading)}>
            {/* <Icon className={style.Icon} type="check-circle" /> */}
            {/* <AnimationLoader /> */}
            {/* <SuccessIconAnimation /> */}
          </div>
          {/* <div className={style.TextArea}>
            <p className={style.Title}>创建成功</p>
            <p className={style.Description}>成功描述</p>
            <Button type="primary">
              <span>前往报表</span>
              <Icon type="arrow-right" />
            </Button>
          </div> */}
        </Modal>
      </div>
    );
  }
}
