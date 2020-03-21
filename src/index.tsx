import React from 'react';
import styles from './rc.less';

const defaultProps: any = {
  radius: 16 as number,
  width: 3 as number,
  color: '#444' as string,
  circleBox: 'content-box' as 'content-box' | 'border-box',
};

export default (props: typeof defaultProps) => {
  const { radius, width, color, circleBox } = Object.assign({}, defaultProps, props);
  const realRadius = circleBox === 'border-box' ? radius - width : radius + width;
  const px = (num: number) => `${num}px`;
  const style = {
    master: {
      width: px(realRadius),
      height: px(realRadius),
    },
    child: {
      border: `${px(width)} solid ${color}`,
      width: px(realRadius),
      height: px(realRadius),
    },
  };
  return (
    <div className={styles.circle} style={style.master}>
      <i style={style.child} />
    </div>
  );
};
