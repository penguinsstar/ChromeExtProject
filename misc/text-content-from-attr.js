(function textContentFromAttr(selector, attrName = '') {
    const elements = document.querySelectorAll(selector);
    for (const el of elements) {
        const attr = el.getAttribute(attrName);
        if (attr !== null) el.textContent = attr;
    }

    // Optional: Watch DOM for dynamically loaded content
    const observer = new MutationObserver(() => {
        const newElements = document.querySelectorAll(selector);
        for (const el of newElements) {
            const attr = el.getAttribute(attrName);
            if (attr !== null) el.textContent = attr;
        }
    });

    observer.observe(document, { childList: true, subtree: true });
})(
    '{{1}}', // selector
    '{{2}}'  // attribute
);
