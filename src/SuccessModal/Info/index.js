import React from "react";
import { Button, Icon } from "antd";
import style from "./index.less";
import { ANIM_STATUS } from "../constants";

import posed from "react-pose";

const AnimDiv = posed.div({
  [ANIM_STATUS.HIDDEN]: {
    bottom: 0,
    visiblity: "hidden",
    transition: { duration: 300, ease: "easeIn" }
  },
  [ANIM_STATUS.VISIBLE]: {
    bottom: -121,
    visiblity: "visible",
    transition: { duration: 300, ease: "easeIn" }
  }
});

export const Info = ({ title = "", action = null, visible }) => {
  return (
    <AnimDiv
      pose={visible ? ANIM_STATUS.VISIBLE : ANIM_STATUS.HIDDEN}
      className={style.info}
    >
      <p className={style.title}>{title}</p>
      {action || (
        <Button type="primary">
          <span>确认</span>
        </Button>
      )}
    </AnimDiv>
  );
};

export const SuccessInfo = ({ visible }) => (
  <Info
    visible={visible}
    title="创建成功"
    action={<Button type="primary">继续创建</Button>}
  />
);
export const ErrorInfo = ({ visible }) => (
  <Info
    visible={visible}
    title="创建失败"
    action={<Button type="primary">查看错误</Button>}
  />
);
