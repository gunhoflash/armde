import React from 'react';
import { ArmdeProps } from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
export interface ArmdeViewerProps extends ArmdeProps, React.HTMLAttributes<HTMLDivElement> {
    connection: ArmdeConnection;
}
declare const ArmdeViewer: React.FC<ArmdeViewerProps>;
export default ArmdeViewer;
