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
          regexFilter: '^https://www\\.youtube\\.com/shorts/(.*)$',
          resourceTypes: ['main_frame']
        }
      }
    ]
  });
});