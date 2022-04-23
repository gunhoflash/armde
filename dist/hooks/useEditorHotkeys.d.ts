/// <reference types="react" />
declare type UseEditorHotkeys = (setter: (v: string) => void, enabled: boolean) => React.MutableRefObject<HTMLTextAreaElement>;
declare const useEditorHotkeys: UseEditorHotkeys;
export default useEditorHotkeys;
