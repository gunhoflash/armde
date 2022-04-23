import React from 'react';
import { ArmdePropsWithConnection } from './ArmdeWrapper';
export interface ArmdeViewerProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const ArmdeViewer: React.FC<ArmdePropsWithConnection<ArmdeViewerProps>>;
export default ArmdeViewer;
