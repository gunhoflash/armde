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
import { marked } from 'marked';
import React from 'react';
var ArmdeViewer = function (props) {
    var connection = props.connection;
    var _a = React.useState(''), parsedHtml = _a[0], setParsedHtml = _a[1];
    if (!props.connection) {
        throw new Error("It seems ArmdeViewer was be used standalone without a 'connection' property.");
    }
    connection.onChange = function (markdownValue) {
        setParsedHtml(marked(markdownValue) || '');
    };
    return (React.createElement("div", __assign({}, __assign(__assign({}, props), { connection: undefined }), { dangerouslySetInnerHTML: { __html: parsedHtml } })));
};
export default ArmdeViewer;
