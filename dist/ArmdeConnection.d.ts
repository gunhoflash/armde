export interface ArmdeConnectionParams {
    onChange: (value: string) => void;
}
export default class ArmdeConnection {
    _markdownValue: string;
    onChange: (value: string) => void;
    constructor(params?: Partial<ArmdeConnectionParams>);
    set markdownValue(value: string);
    get markdownValue(): string;
}
