chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
      {        
        id: 1,
        priority: 1,
        action: {
          type: 'redirect',
          redirect: {
            regexSubstitution: 'https://www.youtube.com/watch?v=\\1',
          }
        },
        condition: {
          regexFilter: 'https://www\\.youtube\\.com/shorts/(.*)$',
          resourceTypes: ['main_frame']
        }
      }
    ]
  });
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.reload(details.tabId);
}, { url: [
    { urlMatches: 'https://www\\.youtube\\.com/shorts/(.*)$' },
    { urlMatches: 'https://www\\.youtube\\.com/feed/subscriptions/shorts' }
  ] 
});