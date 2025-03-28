async function syncVideoQualityPreference() {
    try {
        const result = await browser.storage.local.get('settings');
        const settings = result.settings as ExtensionSettings;
        
        if (settings?.videoQuality) {
            localStorage.setItem('yds-quality-enabled', JSON.stringify(settings.videoQuality.enabled));
            localStorage.setItem('yds-quality-value', settings.videoQuality.value);
            videoQualityLog(`Synced video quality preference from extension storage: ${settings.videoQuality.value}`);
        }
    } catch (error) {
        videoQualityErrorLog('Error syncing video quality preference:', error);
    }
}

// Call this function during initialization
async function handleVideoQuality() {   
    //videoQualityLog('Initializing video quality management');
    await syncVideoQualityPreference(); // Sync quality preference
    const script = document.createElement('script');
    script.src = browser.runtime.getURL('dist/content/scripts/VideoQualityScript.js');
    document.documentElement.appendChild(script);
}

// Function to handle video quality selection
browser.runtime.onMessage.addListener((message: unknown) => {
    if (typeof message === 'object' && message !== null &&
        'feature' in message && message.feature === 'videoQuality' &&
        'quality' in message && typeof message.quality === 'string' &&
        'enabled' in message && typeof message.enabled === 'boolean') {
        
        // Store preference
        videoQualityLog(`Setting video quality preference to: ${message.quality}, enabled: ${message.enabled}`);
        localStorage.setItem('yds-quality-enabled', JSON.stringify(message.enabled));
        localStorage.setItem('yds-quality-value', message.quality);
        
        // Reapply quality if a video is currently playing
        handleVideoQuality();
    }
    return true;
});