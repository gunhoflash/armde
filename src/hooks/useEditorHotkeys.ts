import {useHotkeys} from "react-hotkeys-hook";
import {Shortcut} from "../config/shortcut";

type UseEditorHotkeys = (
  setter: (v: string) => void,
) => React.MutableRefObject<HTMLTextAreaElement>;

const useEditorHotkeys: UseEditorHotkeys = setter => {
  const ref = useHotkeys(Object.values(Shortcut).join(', '), (_, handler) => {
    const textarea = ref.current;
    if (!textarea?.contains(document.activeElement)) return;

    const cursor = textarea.selectionStart;

    // find index of \n before cursor
    const text = textarea.value;
    const indexOfNewLineBeforeCursor = text.substring(0, cursor).lastIndexOf('\n');
    const indexOfNewLineAfterCursor = ((text.indexOf('\n', cursor) + 1) || (text.length + 1)) - 1;

    // split text
    const text1 = text.slice(0, indexOfNewLineBeforeCursor + 1);
    const text2 = text.slice(indexOfNewLineBeforeCursor + 1, indexOfNewLineAfterCursor);
    const text3 = text.slice(indexOfNewLineAfterCursor);

    // apply mutation
    const newText2 = (text => {
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

    // set new text
    const newText = `${text1}${newText2}${text3}`;
    textarea.value = newText;
    setter(newText);

    // revert cursor
    textarea.setSelectionRange(newText.length - text3.length, newText.length - text3.length);
  }, {
    enableOnTags: ['TEXTAREA'],
  }) as React.MutableRefObject<HTMLTextAreaElement>;

  return ref;
};

// is*
// const isHeading = (text: string) => /^(\s{0,3})(#{1,6})\s/.test(text);
const isHeading1 = (text: string) => /^(\s{0,3})#\s/.test(text);
const isHeading2 = (text: string) => /^(\s{0,3})##\s/.test(text);
const isHeading3 = (text: string) => /^(\s{0,3})###\s/.test(text);
const isHeading4 = (text: string) => /^(\s{0,3})####\s/.test(text);
const isHeading5 = (text: string) => /^(\s{0,3})#####\s/.test(text);
const isHeading6 = (text: string) => /^(\s{0,3})######\s/.test(text);
// const isSomethting = (text: string) => [
//   isHeading
// ].some(fn => fn(text));
// const isParagraph = (text: string) => !isSomethting(text);

// clear*
const clearHeading = (text: string) => text.replace(/^(\s{0,3})(#{1,6}\s)/, '');
const clearAnything = (text: string) => [
  clearHeading
].reduce((text, fn) => fn(text), text);

// toggle* ans set*
const toggleHeading1 = (text: string) => isHeading1(text) ? clearHeading(text) : `# ${clearAnything(text)}`;
const toggleHeading2 = (text: string) => isHeading2(text) ? clearHeading(text) : `## ${clearAnything(text)}`;
const toggleHeading3 = (text: string) => isHeading3(text) ? clearHeading(text) : `### ${clearAnything(text)}`;
const toggleHeading4 = (text: string) => isHeading4(text) ? clearHeading(text) : `#### ${clearAnything(text)}`;
const toggleHeading5 = (text: string) => isHeading5(text) ? clearHeading(text) : `##### ${clearAnything(text)}`;
const toggleHeading6 = (text: string) => isHeading6(text) ? clearHeading(text) : `###### ${clearAnything(text)}`;
const setParagraph = (text: string) => clearAnything(text);

export default useEditorHotkeys;
