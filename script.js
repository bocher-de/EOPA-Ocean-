// Example Google Analytics event tracking
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track when users complete each step
trackEvent('Funnel', 'Step Completed', 'Step 1 - Service Selection');