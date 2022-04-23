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
var _this = this;
import classNames from 'classnames';
import React from 'react';
import useEditorHotkeys from './hooks/useEditorHotkeys';
import styles from './style/ArmdeEditor.module.scss';
var ArmdeEditor = function (props) {
    var _a;
    var connection = props.connection;
    var setMarkdownValue = function (value) {
        connection.markdownValue = value;
    };
    var onChangeTextareaValue = function (e) {
        setMarkdownValue(e.target.value);
    };
    var textareaRef = useEditorHotkeys(setMarkdownValue);
    if (!props.connection) {
        throw new Error("It seems ArmdeEditor was be used standalone without a 'connection' property.");
    }
    return (React.createElement("textarea", __assign({ ref: textareaRef }, __assign(__assign({}, props), { connection: undefined, noStyle: undefined }), { className: classNames(props.className, (_a = {},
            _a[styles.editor] = !props.noStyle,
            _a)), onChange: onChangeTextareaValue.bind(_this) })));
};
export default ArmdeEditor;
