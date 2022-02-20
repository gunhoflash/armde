var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import ArmdeEditor from './ArmdeEditor';
import ArmdeViewer from './ArmdeViewer';
import ArmdeConnection from './ArmdeConnection';
var ArmdeWrapper = /** @class */ (function (_super) {
    __extends(ArmdeWrapper, _super);
    function ArmdeWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.connection = new ArmdeConnection();
        return _this;
    }
    ArmdeWrapper.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(ArmdeEditor, { connection: this.connection, noStyle: this.props.noStyle }),
            React.createElement(ArmdeViewer, { connection: this.connection, noStyle: this.props.noStyle })));
    };
    return ArmdeWrapper;
}(React.Component));
export default ArmdeWrapper;
