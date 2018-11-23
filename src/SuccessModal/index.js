import React from "react";
import { Modal, Button, Icon } from "antd";
import classNames from "classnames";

import LoadingIcon from "./LoadingIcon";
import SuccessIconAnimation from "./SuccessIconAnimation";

import { SuccessInfo, ErrorInfo } from "./Info";
import { STATUS } from "./constants";

import "antd/dist/antd.less";

import style from "./index.less";

export default class SuccessModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { status } = this.props;
    return (
      <div>
        <Modal
          className={classNames(style.SuccessModal)}
          closable={false}
          visible
          footer={null}
        >
          <div className={classNames(style.container)}>
            <div className={classNames(style[status], style.color)}>
              {status === STATUS.LOADING && <LoadingIcon />}
              {status === STATUS.SUCCESS && <SuccessIconAnimation />}
              {status === STATUS.ERROR && (
                <Icon type="close-circle" className={style.icon} />
              )}
            </div>
            <SuccessInfo visible={status === STATUS.SUCCESS} />
            <ErrorInfo visible={status === STATUS.ERROR} />
          </div>
        </Modal>
      </div>
    );
  }
}
