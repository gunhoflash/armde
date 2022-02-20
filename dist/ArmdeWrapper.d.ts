import React from 'react';
import ArmdeConnection from './ArmdeConnection';
export interface ArmdeProps {
    noStyle?: boolean;
}
export declare type ArmdeWrapperProps = ArmdeProps;
export default class ArmdeWrapper extends React.Component<ArmdeWrapperProps> {
    connection: ArmdeConnection;
    constructor(props: ArmdeWrapperProps);
    render(): JSX.Element;
}
