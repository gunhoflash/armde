import classNames from 'classnames';
import React from 'react';
import {ArmdeProps} from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
import styles from './style/ArmdeEditor.module.scss';

export interface ArmdeEditorProps extends ArmdeProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  connection: ArmdeConnection;
}

const ArmdeEditor: React.FC<ArmdeEditorProps> = (props: ArmdeEditorProps) => {
  const connection: ArmdeConnection = props.connection;

  if (!props.connection) {
    throw new Error(`It seems ArmdeEditor was be used standalone without a 'connection' property.`);
  }

  const onChangeTextareaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    connection.markdownValue = e.target.value;
  };

  return (
    <textarea
      {...{...props, connection: undefined, noStyle: undefined}}
      className={classNames(props.className, {
        [styles.editor]: !props.noStyle,
      })}
      onChange={onChangeTextareaValue.bind(this)}
    />
  );
};

export default ArmdeEditor;
