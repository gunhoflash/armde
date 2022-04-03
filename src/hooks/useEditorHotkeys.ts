import {useHotkeys} from "react-hotkeys-hook";
import {Shortcut} from "../config/shortcut";

const useEditorHotkeys = () => {
  const ref = useHotkeys(Object.values(Shortcut).join(', '), (_, handler) => {
    if (!ref.current?.contains(document.activeElement)) return;

    // TODO: Do seomething with {handler.key}, {ref.current.selectionStart}, and {ref.current.selectionEnd}.
    console.log(handler.key, ref.current.selectionStart, ref.current.selectionEnd);
  }, {
    enableOnTags: ['TEXTAREA'],
  }) as React.MutableRefObject<HTMLTextAreaElement>;

  return ref;
};

export default useEditorHotkeys;
