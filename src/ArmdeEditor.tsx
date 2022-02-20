import classNames from 'classnames';
import React from 'react';
import { ArmdeProps } from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
import styles from './style/ArmdeEditor.module.scss';

export interface ArmdeEditorProps extends ArmdeProps, React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  connection: ArmdeConnection;
}

interface ArmdeEditorState {
  connection: ArmdeConnection;
}

export default class Editor extends React.Component<ArmdeEditorProps, ArmdeEditorState> {
  state = {
    connection: this.props.connection || new ArmdeConnection(),
  };

  constructor (props: ArmdeEditorProps) {
    super(props);
  }

  onChangeTextareaValue (e: React.ChangeEvent<HTMLTextAreaElement>) {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.connection.markdownValue = e.target.value;
  }

  render () {
    return (
      <textarea
        {...this.props}
        className={classNames(this.props.className || '', {
          [styles.editor]: !this.props.noStyle,
        })}
        onChange={this.onChangeTextareaValue.bind(this)}
      />
    );
  }
}
