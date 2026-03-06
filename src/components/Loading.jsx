import React from "react";

export default function Loading(props) {
  if (!props.show) {
    return null;
  }
  return <span>加载中...</span>;
}
