import {marked} from 'marked';
import React from 'react';
import ArmdeConnection from './ArmdeConnection';

export interface ArmdeViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  connection: ArmdeConnection;
}

const ArmdeViewer: React.FC<ArmdeViewerProps> = (props: ArmdeViewerProps) => {
  const connection: ArmdeConnection = props.connection;
  const [parsedHtml, setParsedHtml] = React.useState('');

  if (!props.connection) {
    throw new Error(`It seems ArmdeViewer was be used standalone without a 'connection' property.`);
  }

  connection.onChange = (markdownValue) => {
    setParsedHtml(marked(markdownValue) || '');
  };

  return (
    <div
      {...{...props, connection: undefined}}
      dangerouslySetInnerHTML={{__html: parsedHtml}}
    />
  );
};

export default ArmdeViewer;
