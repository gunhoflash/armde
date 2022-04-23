import React from 'react';
import ArmdeConnection from './ArmdeConnection';
export interface ArmdeEditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    connection: ArmdeConnection;
}
declare const ArmdeEditor: React.FC<ArmdeEditorProps>;
export default ArmdeEditor;
