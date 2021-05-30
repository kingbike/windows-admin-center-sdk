
import { Config } from './common/config';

function gulpConfig(): Config {
    return {
        resjson: {
            resourceName: 'ContosoIncManageFooWorks',
            localeOffset: 0,
            localePath: 'loc'
        },
        powershell: {
            name: 'contoso-inc.manage-foo-works',
            guid: 'e188b167-2fdc-4e7d-8d7b-cbba39aac573',
            list: [
                'src',
                'node_modules/@microsoft/windows-admin-center-sdk'
            ],
            enablePester: false,
            skipCim: true
        },
        test: {
            skip: true
        }
    };
}

exports.gulpConfig = gulpConfig;
