import React from 'react';
import ArmdeConnection from './ArmdeConnection';
export interface ArmdeEditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    connection: ArmdeConnection;
    hotkeyEnabled?: boolean;
}
declare const ArmdeEditor: React.FC<ArmdeEditorProps>;
export default ArmdeEditor;
