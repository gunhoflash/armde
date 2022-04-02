import React from 'react';
import ArmdeConnection from './ArmdeConnection';
import ArmdeEditor, {ArmdeEditorProps} from './ArmdeEditor';
import ArmdeViewer, {ArmdeViewerProps} from './ArmdeViewer';

export interface ArmdeProps {
  noStyle?: boolean;
}

export interface ArmdeWrapperProps extends ArmdeProps {
  connection?: ArmdeConnection;
  editorProps?: ArmdeEditorProps;
  viewerProps?: ArmdeViewerProps;
}

const ArmdeWrapper: React.FC<ArmdeWrapperProps> = (props: ArmdeWrapperProps) => {
  const connection = props.connection || new ArmdeConnection();

  return (
    <>
      <ArmdeEditor {...props.editorProps} connection={connection} noStyle={props.noStyle} />
      <ArmdeViewer {...props.viewerProps} connection={connection} noStyle={props.noStyle} />
    </>
  );
};

export default ArmdeWrapper;
