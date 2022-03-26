import React from 'react';
import ArmdeConnection from './ArmdeConnection';
import ArmdeEditor, { ArmdeEditorProps } from './ArmdeEditor';
import ArmdeViewer, { ArmdeViewerProps } from './ArmdeViewer';

export interface ArmdeProps {
  noStyle?: boolean;
  editorProps?: ArmdeEditorProps;
  viewerProps?: ArmdeViewerProps;
}

export type ArmdeWrapperProps = ArmdeProps

export default class ArmdeWrapper extends React.Component<ArmdeWrapperProps> {
  connection = new ArmdeConnection();

  constructor (props: ArmdeWrapperProps) {
    super(props);
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
