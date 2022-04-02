import React from 'react';
import { ArmdeProps } from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
export interface ArmdeEditorProps extends ArmdeProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    connection: ArmdeConnection;
}
declare const ArmdeEditor: React.FC<ArmdeEditorProps>;
export default ArmdeEditor;
