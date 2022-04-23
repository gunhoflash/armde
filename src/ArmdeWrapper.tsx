import React from 'react';
import ArmdeConnection from './ArmdeConnection';
import ArmdeEditor, {ArmdeEditorProps} from './ArmdeEditor';
import ArmdeViewer, {ArmdeViewerProps} from './ArmdeViewer';

export interface ArmdeWrapperProps {
  connection?: ArmdeConnection;
  editorProps?: ArmdeEditorProps;
  viewerProps?: ArmdeViewerProps;
}

const ArmdeWrapper: React.FC<ArmdeWrapperProps> = (props: ArmdeWrapperProps) => {
  const connection = props.connection || new ArmdeConnection();

  return (
    <>
      <ArmdeEditor {...props.editorProps} connection={connection} />
      <ArmdeViewer {...props.viewerProps} connection={connection} />
    </>
  );
};

export default ArmdeWrapper;
