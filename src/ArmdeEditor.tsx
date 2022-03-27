import classNames from 'classnames';
import React from 'react';
import { ArmdeProps } from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
import styles from './style/ArmdeEditor.module.scss';

export interface ArmdeEditorProps extends ArmdeProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  connection: ArmdeConnection;
}

export default class Editor extends React.Component<ArmdeEditorProps> {
  connection: ArmdeConnection;

  constructor (props: ArmdeEditorProps) {
    super(props);

    if (!props.connection) {
      throw new Error(`It seems ArmdeEditor was be used standalone without a 'connection' property.`);
    }

    this.connection = props.connection;
  }

  onChangeTextareaValue (e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.connection.markdownValue = e.target.value;
  }

  render () {
    return (
      <textarea
        {...{...this.props, connection: undefined, noStyle: undefined}}
        className={classNames(this.props.className, {
          [styles.editor]: !this.props.noStyle,
        })}
        onChange={this.onChangeTextareaValue.bind(this)}
      />
    );
  }
}
