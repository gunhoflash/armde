import classNames from 'classnames';
import { marked } from 'marked';
import React from 'react';
import { ArmdeProps } from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
import styles from './style/ArmdeViewer.module.scss';

export interface ArmdeViewerProps extends ArmdeProps, React.HTMLAttributes<HTMLDivElement> {}

interface ArmdeViewerState {
  connection: ArmdeConnection;
}

export default class Viewer extends React.Component<ArmdeViewerProps, ArmdeViewerState> {
  state = {
    connection: this.props.connection || new ArmdeConnection(),
  };

  constructor (props: ArmdeViewerProps) {
    super(props);

    this.state.connection.onChange = () => {
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
        dangerouslySetInnerHTML={{ __html: marked.parse(this.state.connection.markdownValue || '') }}
      />
    );
  }
}
