import React from 'react';
import ArmdeConnection from './ArmdeConnection';
import { ArmdeEditorProps } from './ArmdeEditor';
import { ArmdeViewerProps } from './ArmdeViewer';
export declare type ArmdePropsWithConnection<T> = T & {
    connection: ArmdeConnection;
};
export interface ArmdeWrapperProps {
    connection?: ArmdeConnection;
    editorProps?: ArmdeEditorProps;
    viewerProps?: ArmdeViewerProps;
}
declare const ArmdeWrapper: React.FC<ArmdeWrapperProps>;
export default ArmdeWrapper;
