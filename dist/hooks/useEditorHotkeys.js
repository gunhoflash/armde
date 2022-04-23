import { useHotkeys } from "react-hotkeys-hook";
import { Shortcut } from "../config/shortcut";
var useEditorHotkeys = function (setter, enabled) {
    var ref = useHotkeys(Object.values(Shortcut).join(', '), function (_, handler) {
        var textarea = ref.current;
        if (!(textarea === null || textarea === void 0 ? void 0 : textarea.contains(document.activeElement)))
            return;
        var cursor = textarea.selectionStart;
        var text = textarea.value;
        var indexOfNewLineBeforeCursor = text.substring(0, cursor).lastIndexOf('\n');
        var indexOfNewLineAfterCursor = ((text.indexOf('\n', cursor) + 1) || (text.length + 1)) - 1;
        var text1 = text.slice(0, indexOfNewLineBeforeCursor + 1);
        var text2 = text.slice(indexOfNewLineBeforeCursor + 1, indexOfNewLineAfterCursor);
        var text3 = text.slice(indexOfNewLineAfterCursor);
        var newText2 = (function (text) {
            switch (handler.key) {
                case Shortcut.heading1: return toggleHeading1(text);
                case Shortcut.heading2: return toggleHeading2(text);
                case Shortcut.heading3: return toggleHeading3(text);
                case Shortcut.heading4: return toggleHeading4(text);
                case Shortcut.heading5: return toggleHeading5(text);
                case Shortcut.heading6: return toggleHeading6(text);
                case Shortcut.paragraph: return setParagraph(text);
                default: return text;
            }
        })(text2);
        var newText = "".concat(text1).concat(newText2).concat(text3);
        textarea.value = newText;
        setter(newText);
        textarea.setSelectionRange(newText.length - text3.length, newText.length - text3.length);
    }, {
        enableOnTags: enabled ? ['TEXTAREA'] : [],
    });
    return ref;
};
var isHeading1 = function (text) { return /^(\s{0,3})#\s/.test(text); };
var isHeading2 = function (text) { return /^(\s{0,3})##\s/.test(text); };
var isHeading3 = function (text) { return /^(\s{0,3})###\s/.test(text); };
var isHeading4 = function (text) { return /^(\s{0,3})####\s/.test(text); };
var isHeading5 = function (text) { return /^(\s{0,3})#####\s/.test(text); };
var isHeading6 = function (text) { return /^(\s{0,3})######\s/.test(text); };
var clearHeading = function (text) { return text.replace(/^(\s{0,3})(#{1,6}\s)/, ''); };
var clearAnything = function (text) { return [
    clearHeading
].reduce(function (text, fn) { return fn(text); }, text); };
var toggleHeading1 = function (text) { return isHeading1(text) ? clearHeading(text) : "# ".concat(clearAnything(text)); };
var toggleHeading2 = function (text) { return isHeading2(text) ? clearHeading(text) : "## ".concat(clearAnything(text)); };
var toggleHeading3 = function (text) { return isHeading3(text) ? clearHeading(text) : "### ".concat(clearAnything(text)); };
var toggleHeading4 = function (text) { return isHeading4(text) ? clearHeading(text) : "#### ".concat(clearAnything(text)); };
var toggleHeading5 = function (text) { return isHeading5(text) ? clearHeading(text) : "##### ".concat(clearAnything(text)); };
var toggleHeading6 = function (text) { return isHeading6(text) ? clearHeading(text) : "###### ".concat(clearAnything(text)); };
var setParagraph = function (text) { return clearAnything(text); };
export default useEditorHotkeys;
