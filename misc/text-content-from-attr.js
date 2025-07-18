textContentFromAttr = function(selector, attrName) {
    const update = () => {
        const elements = document.querySelectorAll(selector);
        for (const el of elements) {
            const val = el.getAttribute(attrName);
            if (val !== null) el.textContent = val;
        }
    };

    update();

    const observer = new MutationObserver(update);
    observer.observe(document, { childList: true, subtree: true });
};
