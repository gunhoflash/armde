import React from 'react';
import ArmdeConnection from './ArmdeConnection';
import ArmdeEditor, { ArmdeEditorProps } from './ArmdeEditor';
import ArmdeViewer, { ArmdeViewerProps } from './ArmdeViewer';

export interface ArmdeProps {
  noStyle?: boolean;
}

export interface ArmdeWrapperProps extends ArmdeProps {
  connection?: ArmdeConnection;
  editorProps?: ArmdeEditorProps;
  viewerProps?: ArmdeViewerProps;
}

export default class ArmdeWrapper extends React.Component<ArmdeWrapperProps> {
  connection: ArmdeConnection;

  constructor (props: ArmdeWrapperProps) {
    super(props);
    this.connection = props.connection || new ArmdeConnection();
  }

  render () {
    return (
      <>
        <ArmdeEditor {...this.props.editorProps} connection={this.connection} noStyle={this.props.noStyle} />
        <ArmdeViewer {...this.props.viewerProps} connection={this.connection} noStyle={this.props.noStyle} />
      </>
    );
  }
}
