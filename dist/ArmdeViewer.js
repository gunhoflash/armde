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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import classNames from 'classnames';
import { marked } from 'marked';
import React from 'react';
import ArmdeConnection from './ArmdeConnection';
import styles from './style/ArmdeViewer.module.scss';
var Viewer = /** @class */ (function (_super) {
    __extends(Viewer, _super);
    function Viewer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            connection: _this.props.connection || new ArmdeConnection(),
        };
        _this.state.connection.onChange = function () {
            _this.forceUpdate();
        };
        return _this;
    }
    Viewer.prototype.render = function () {
        var _a;
        return (React.createElement("div", __assign({}, this.props, { className: classNames(this.props.className || '', (_a = {},
                _a[styles.viewer] = !this.props.noStyle,
                _a)), dangerouslySetInnerHTML: { __html: marked.parse(this.state.connection.markdownValue || '') } })));
    };
    return Viewer;
}(React.Component));
export default Viewer;
