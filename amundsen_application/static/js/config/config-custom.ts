// This file should be used to add new config variables or overwrite defaults from config-default.ts

import { AppConfigCustom, BadgeStyle } from './config-types';

const configCustom: AppConfigCustom = {
  badges: {
    'pii': {
        style: BadgeStyle.INFO,
        displayName: 'PII',
    },
  },
  browse: {
    curatedTags: [],
    showAllTags: true,
  },
  google: {
    enabled: false,
    key: 'default-key',
    sampleRate: 100,
  },
  mailClientFeatures: {
    feedbackEnabled: false,
    notificationsEnabled: false,
  },
  indexDashboards: {
    enabled: false,
  },
  indexUsers: {
    enabled: false,
  },
  userIdLabel: 'email address',
  issueTracking: {
    enabled: false,
  },
};

export default configCustom;
