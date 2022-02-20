import React from 'react';
import { ArmdeProps } from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
export interface ArmdeEditorProps extends ArmdeProps, React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    connection: ArmdeConnection;
}
interface ArmdeEditorState {
    connection: ArmdeConnection;
}
export default class Editor extends React.Component<ArmdeEditorProps, ArmdeEditorState> {
    state: {
        connection: ArmdeConnection;
    };
    constructor(props: ArmdeEditorProps);
    onChangeTextareaValue(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    render(): JSX.Element;
}
export {};
