import React from 'react';
import ArmdeConnection from './ArmdeConnection';
import useEditorHotkeys from './hooks/useEditorHotkeys';

export interface ArmdeEditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  connection: ArmdeConnection;
  hotkeyEnabled?: boolean;
}

const ArmdeEditor: React.FC<ArmdeEditorProps> = (props: ArmdeEditorProps) => {
  const connection: ArmdeConnection = props.connection;

  const setMarkdownValue = (value: string) => {
    connection.markdownValue = value;
  };

  const onChangeTextareaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownValue(e.target.value);
  };

  const textareaRef = useEditorHotkeys(setMarkdownValue, !!props.hotkeyEnabled);

  if (!props.connection) {
    throw new Error(`It seems ArmdeEditor was be used standalone without a 'connection' property.`);
  }

  return (
    <textarea
      ref={textareaRef}
      {...{...props, connection: undefined, hotkeyEnabled: undefined}}
      onChange={onChangeTextareaValue.bind(this)}
    />
  );
};

export default ArmdeEditor;
