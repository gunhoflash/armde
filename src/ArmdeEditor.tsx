import classNames from 'classnames';
import React from 'react';
import {ArmdeProps} from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
import useEditorHotkeys from './hooks/useEditorHotkeys';
import styles from './style/ArmdeEditor.module.scss';

export interface ArmdeEditorProps extends ArmdeProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  connection: ArmdeConnection;
}

const ArmdeEditor: React.FC<ArmdeEditorProps> = (props: ArmdeEditorProps) => {
  const connection: ArmdeConnection = props.connection;

  const setMarkdownValue = (value: string) => {
    connection.markdownValue = value;
  };

  const onChangeTextareaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownValue(e.target.value);
  };

  const textareaRef = useEditorHotkeys(setMarkdownValue);

  if (!props.connection) {
    throw new Error(`It seems ArmdeEditor was be used standalone without a 'connection' property.`);
  }

  return (
    <textarea
      ref={textareaRef}
      {...{...props, connection: undefined, noStyle: undefined}}
      className={classNames(props.className, {
        [styles.editor]: !props.noStyle,
      })}
      onChange={onChangeTextareaValue.bind(this)}
    />
  );
};

export default ArmdeEditor;
