import classNames from 'classnames';
import {marked} from 'marked';
import React from 'react';
import {ArmdeProps} from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
import styles from './style/ArmdeViewer.module.scss';

export interface ArmdeViewerProps extends ArmdeProps, React.HTMLAttributes<HTMLDivElement> {
  connection: ArmdeConnection;
}

const ArmdeViewer: React.FC<ArmdeViewerProps> = (props: ArmdeViewerProps) => {
  const connection: ArmdeConnection = props.connection;
  const [parsedHtml, setParsedHtml] = React.useState('');

  if (!props.connection) {
    throw new Error(`It seems ArmdeViewer was be used standalone without a 'connection' property.`);
  }

  connection.onChange = (markdownValue) => {
    setParsedHtml(marked(markdownValue) || '');
  };

  return (
    <div
      {...{...props, connection: undefined, noStyle: undefined}}
      className={classNames(props.className, {
        [styles.viewer]: !props.noStyle,
      })}
      dangerouslySetInnerHTML={{__html: parsedHtml}}
    />
  );
};

export default ArmdeViewer;
