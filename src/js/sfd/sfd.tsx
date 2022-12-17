import options from './utils/options'
import DSIcon from './components/ds-icon'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { init } from './hooks/useAnalytics'
import '../../css/styles.scss'
import { getSettings } from './hooks/useChromeStorage'

init()

chrome.storage.sync.get(constants.storageKey, function (value: DSStorageSettings) {
    const settings = getSettings(value)
    
    $(options.trackTitle).each((_, element) => {
        const iconDS = document.createElement("span");

        const parent = $(element).parent();
        const attachedTo = parent.is("a") ? parent : $(element);
        attachedTo.after(iconDS);

        const root = createRoot(iconDS)
        root.render(<DSIcon settings={settings} />)
    });
});