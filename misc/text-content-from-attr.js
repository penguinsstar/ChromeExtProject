// Create a map entry in the global scope:
textContentFromAttr = function(selector, attrName) {
    const updateElements = () => {
        const elements = document.querySelectorAll(selector);
        for (const el of elements) {
            const val = el.getAttribute(attrName);
            if (val !== null) el.textContent = val;
        }
    };

    updateElements();

    const observer = new MutationObserver(() => {
        updateElements();
    });

    observer.observe(document, { childList: true, subtree: true });
};
