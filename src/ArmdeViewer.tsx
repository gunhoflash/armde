import {marked} from 'marked';
import React from 'react';
import ArmdeConnection from './ArmdeConnection';
import {ArmdePropsWithConnection} from './ArmdeWrapper';

export interface ArmdeViewerProps extends React.HTMLAttributes<HTMLDivElement> {
}

const ArmdeViewer: React.FC<ArmdePropsWithConnection<ArmdeViewerProps>> = props => {
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
