import { useEffect, useRef } from 'react';
import { useBlocker } from 'react-router-dom';
import { Modal } from 'antd';

export function usePrompt(when, options = {}) {
  const {
    title = '确认离开',
    content = '有未保存的内容，确定要离开吗？',
    okText = '确定离开',
    cancelText = '继续编辑',
  } = options;

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    return when && currentLocation.pathname !== nextLocation.pathname;
  });

  // 用 ref 防止重复弹窗
  const isModalOpenRef = useRef(false);

  useEffect(() => {
    if (blocker.state === 'blocked' && !isModalOpenRef.current) {
      isModalOpenRef.current = true;

      Modal.confirm({
        title,
        content,
        okText,
        cancelText,
        okButtonProps: { danger: true },
        onOk: () => {
          isModalOpenRef.current = false;
          blocker.proceed?.();
        },
        onCancel: () => {
          isModalOpenRef.current = false;
          blocker.reset?.();
        },
        afterClose: () => {
          isModalOpenRef.current = false;
        },
      });
    }
  }, [blocker, title, content, okText, cancelText]);
}