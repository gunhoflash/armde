import React from 'react';
import { ArmdePropsWithConnection } from './ArmdeWrapper';
export interface ArmdeEditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    hotkeyEnabled?: boolean;
}
declare const ArmdeEditor: React.FC<ArmdePropsWithConnection<ArmdeEditorProps>>;
export default ArmdeEditor;
