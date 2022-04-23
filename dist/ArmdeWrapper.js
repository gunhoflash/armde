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
import React from 'react';
import ArmdeConnection from './ArmdeConnection';
import ArmdeEditor from './ArmdeEditor';
import ArmdeViewer from './ArmdeViewer';
var ArmdeWrapper = function (props) {
    var connection = props.connection || new ArmdeConnection();
    return (React.createElement(React.Fragment, null,
        React.createElement(ArmdeEditor, __assign({}, props.editorProps, { connection: connection })),
        React.createElement(ArmdeViewer, __assign({}, props.viewerProps, { connection: connection }))));
};
export default ArmdeWrapper;
