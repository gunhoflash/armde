import classNames from 'classnames';
import { marked } from 'marked';
import React from 'react';
import { ArmdeProps } from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
import styles from './style/ArmdeViewer.module.scss';

export interface ArmdeViewerProps extends ArmdeProps, React.HTMLAttributes<HTMLDivElement> {
  connection: ArmdeConnection;
}

export default class Viewer extends React.Component<ArmdeViewerProps> {
  connection: ArmdeConnection;

  constructor (props: ArmdeViewerProps) {
    super(props);

    if (!props.connection) {
      throw new Error(`It seems ArmdeViewer was be used standalone without a 'connection' property.`);
    }

    this.connection = props.connection;
    this.connection.onChange = () => {
      this.forceUpdate();
    };
  }

  render () {
    return (
      <div
        {...{...this.props, connection: undefined, noStyle: undefined}}
        className={classNames(this.props.className, {
          [styles.viewer]: !this.props.noStyle,
        })}
        dangerouslySetInnerHTML={{ __html: marked.parse(this.connection.markdownValue || '') }}
      />
    );
  }
}
