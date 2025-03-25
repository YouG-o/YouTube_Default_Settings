const LOG_PREFIX = '[YPS]';

const LOG_STYLES = {
    CORE: {
        context: '[Core]',
        color: '#c084fc'  // light purple
    },
    VIDEO_QUALITY: {
        context: '[Main Title]',
        color: '#fcd34d'  // yellow
    },
    VIDEO_SPEED: {
        context: '[Browsing Titles]',
        color: '#fca5a5'  // light red
    }
} as const;

// Error color for all error logs
const ERROR_COLOR = '#F44336';  // Red

function createLogger(category: { context: string; color: string }) {
    return (message: string, ...args: any[]) => {
        console.log(
            `%c${LOG_PREFIX}${category.context} ${message}`,
            `color: ${category.color}`,
            ...args
        );
    };
}

// Create error logger function
function createErrorLogger(category: { context: string; color: string }) {
    return (message: string, ...args: any[]) => {
        console.log(
            `%c${LOG_PREFIX}${category.context} %c${message}`,
            `color: ${category.color}`,  // Keep category color for prefix
            `color: ${ERROR_COLOR}`,     // Red color for error message
            ...args
        );
    };
}

// Create standard loggers
const coreLog = createLogger(LOG_STYLES.CORE);
const coreErrorLog = createErrorLogger(LOG_STYLES.CORE);

const videoQualityLog = createLogger(LOG_STYLES.VIDEO_QUALITY);
const videoQualityErrorLog = createErrorLogger(LOG_STYLES.VIDEO_QUALITY);

const videoSpeedLog = createLogger(LOG_STYLES.VIDEO_SPEED);
const videoSpeedErrorLog = createErrorLogger(LOG_STYLES.VIDEO_SPEED);