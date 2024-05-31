import dataPreferences from "@ohos:data.preferences";
import { GlobalContext } from "@bundle:com.example.component/entry/ets/common/utils/GlobalContext";
import Logger from "@bundle:com.example.component/entry/ets/common/utils/Logger";
const TAG = '[FontSize]';
const PREFERENCES_NAME = 'customPreferences';
const KEY_APP_FONT_SIZE = 'appFontSize';
export const DEFAULT_FONT_SIZE = 12;
export class FontSizeUtil {
    createFontPreferences(context: Context) {
        let fontPreferences: Function = (() => {
            let preferences: Promise<dataPreferences.Preferences> = dataPreferences.getPreferences(context, PREFERENCES_NAME);
            return preferences;
        });
        GlobalContext.getContext().setObject('getFontPreferences', fontPreferences);
    }
    saveDefaultFontSize(fontSize: number) {
        let getFontPreferences: Function = GlobalContext.getContext().getObject('getFontPreferences') as Function;
        getFontPreferences().then((preferences: dataPreferences.Preferences) => {
            preferences.has(KEY_APP_FONT_SIZE).then(async (isExist: boolean) => {
                Logger.info(TAG, 'preferences has changeFontSize is ' + isExist);
                if (!isExist) {
                    await preferences.put(KEY_APP_FONT_SIZE, fontSize);
                    preferences.flush();
                }
            }).catch((err: Error) => {
                Logger.error(TAG, 'Has the value failed with err: ' + err);
            });
        }).catch((err: Error) => {
            Logger.error(TAG, 'Get the preferences failed, err: ' + err);
        });
    }
    saveChangeFontSize(fontSize: number) {
        console.log(TAG + '设置', fontSize);
        let getFontPreferences: Function = GlobalContext.getContext().getObject('getFontPreferences') as Function;
        getFontPreferences().then(async (preferences: dataPreferences.Preferences) => {
            await preferences.put(KEY_APP_FONT_SIZE, fontSize);
            preferences.flush();
        }).catch((err: Error) => {
            Logger.error('failed, err: ' + err);
        });
    }
    async getChangeFontSize() {
        let fontSize: number = 0;
        let getFontPreferences: Function = GlobalContext.getContext().getObject('getFontPreferences') as Function;
        fontSize = await (await getFontPreferences()).get(KEY_APP_FONT_SIZE, fontSize);
        return fontSize;
    }
}
export default new FontSizeUtil();
