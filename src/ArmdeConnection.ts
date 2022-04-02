export interface ArmdeConnectionParams {
  onChange: (value: string) => void;
}

const noop = () => {};

export default class ArmdeConnection {
  _markdownValue: string;
  onChange: (value: string) => void;

  constructor (params?: Partial<ArmdeConnectionParams>) {
    this.onChange = params?.onChange || noop;
    this._markdownValue = this.markdownValue = '';
  }

  set markdownValue (value: string) {
    this._markdownValue = value;
    this.onChange(value);
  }

  get markdownValue () {
    return this._markdownValue;
  }
}
