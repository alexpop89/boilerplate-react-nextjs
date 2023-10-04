import {useCallback, useState} from 'react';

/**
 *  const [copyToClipboard, isCopied] = useCopyToClipboard();
 *  <button onClick={() => copyToClipboard('Hello, world!')}>
 *      Copy Text
 *  </button>
 */
const useCopyToClipboard = (): [(text: string) => void, boolean] => {
    const [isCopied, setCopied] = useState(false);

    const copy: (text: string) => void = useCallback((text) => {
        if (typeof navigator.clipboard.writeText !== 'function') {
            setCopied(false);
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
        }).catch(() => {
            setCopied(false);
        });

    }, []);

    return [copy, isCopied];
};

export default useCopyToClipboard;