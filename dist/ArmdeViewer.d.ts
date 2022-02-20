import React from 'react';
import { ArmdeProps } from './ArmdeWrapper';
import ArmdeConnection from './ArmdeConnection';
export interface ArmdeViewerProps extends ArmdeProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    connection?: ArmdeConnection;
}
interface ArmdeViewerState {
    connection: ArmdeConnection;
}
export default class Viewer extends React.Component<ArmdeViewerProps, ArmdeViewerState> {
    state: {
        connection: ArmdeConnection;
    };
    constructor(props: ArmdeViewerProps);
    render(): JSX.Element;
}
export {};
