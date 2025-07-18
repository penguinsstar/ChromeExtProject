(() => {
    // Store original views text so it can be restored later
    const originalTexts = new WeakMap();
  
    // Create the toggle button and apply initial styles
    const btn = document.createElement('button');
    Object.assign(btn.style, {
      position: 'fixed',
      top: '60px',
      right: '10px',
      zIndex: 10000,
      padding: '10px 12px',
      background: '#381919e0',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    });
  
    // Tracks whether the titles are currently shown
    let titleShown = false;
  
    // Update button text based on toggle state
    const updateButtonText = () => {
      btn.textContent = titleShown ? 'Hide Title' : 'Show Title';
    };
  
    // Apply highlight styles to the views span when showing title
    const applySpanStyles = (span) => {
      Object.assign(span.style, {
        backgroundColor: '#381919e0',
        padding: '2px 4px',
        borderRadius: '6px',
        display: 'inline-block',
      });
    };
  
    // Reset styles on the views span to default when hiding title
    const resetSpanStyles = (span) => {
      span.style.backgroundColor = '';
      span.style.padding = '';
      span.style.borderRadius = '';
      span.style.display = '';
    };
  
    // Toggle button click handler
    btn.onclick = () => {
      // Iterate through each relevant element on the page
      document.querySelectorAll('a.shortsLockupViewModelHostEndpoint').forEach(el => {
        const h3 = el.querySelector('h3.shortsLockupViewModelHostMetadataTitle');
        const span = el.querySelector('.shortsLockupViewModelHostMetadataSubhead span');
  
        // Skip if required elements are missing
        if (!h3 || !span) return;
  
        // Save the original views text if not already saved
        if (!originalTexts.has(span)) {
          originalTexts.set(span, span.textContent);
        }
  
        if (!titleShown) {
          // Extract aria-label and remove views count text
          let label = h3.getAttribute('aria-label') || '';
          label = label.replace(/,.*?\bviews\b.*/i, '').trim();
  
          // Replace views text with extracted label and style it
          span.textContent = label;
          applySpanStyles(span);
        } else {
          // Restore original views text and reset styles
          span.textContent = originalTexts.get(span);
          resetSpanStyles(span);
        }
      });
  
      // Toggle state and update button label
      titleShown = !titleShown;
      updateButtonText();
    };
  
    // Initialize button label and add button to page
    updateButtonText();
    document.body.appendChild(btn);
  })();