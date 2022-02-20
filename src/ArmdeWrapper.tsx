import React from 'react';
import ArmdeEditor from './ArmdeEditor';
import ArmdeViewer from './ArmdeViewer';
import ArmdeConnection from './ArmdeConnection';

export interface ArmdeProps {
  noStyle?: boolean;
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
        <ArmdeEditor connection={this.connection} noStyle={this.props.noStyle} />
        <ArmdeViewer connection={this.connection} noStyle={this.props.noStyle} />
      </>
    );
  }
}
