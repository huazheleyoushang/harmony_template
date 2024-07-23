import SettingData from "@bundle:com.example.component/entry/ets/viewmodel/SettingData";
/**
 * Home view model, providing page display data.
 */
export class HomeViewModel {
    settingArr: Array<SettingData> = [];
    initSettingData(): Array<SettingData> {
        if (this.settingArr.length === 0) {
            this.settingArr = new Array();
            let settingData = new SettingData();
            settingData.settingName = { "id": 16777406, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777417, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777411, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777423, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777405, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777414, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777409, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777421, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777407, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777420, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777408, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777416, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777358, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777435, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
        }
        return this.settingArr;
    }
}
export default new HomeViewModel();
