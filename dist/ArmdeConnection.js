var noop = function () { };
var ArmdeConnection = (function () {
    function ArmdeConnection(params) {
        this.onChange = (params === null || params === void 0 ? void 0 : params.onChange) || noop;
        this._markdownValue = this.markdownValue = '';
    }
    Object.defineProperty(ArmdeConnection.prototype, "markdownValue", {
        get: function () {
            return this._markdownValue;
        },
        set: function (value) {
            this._markdownValue = value;
            this.onChange(value);
        },
        enumerable: false,
        configurable: true
    });
    return ArmdeConnection;
}());
export default ArmdeConnection;
