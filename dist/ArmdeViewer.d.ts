import React from 'react';
import ArmdeConnection from './ArmdeConnection';
export interface ArmdeViewerProps extends React.HTMLAttributes<HTMLDivElement> {
    connection: ArmdeConnection;
}
declare const ArmdeViewer: React.FC<ArmdeViewerProps>;
export default ArmdeViewer;
