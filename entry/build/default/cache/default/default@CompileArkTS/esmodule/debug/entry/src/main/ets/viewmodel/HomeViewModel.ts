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
            settingData.settingName = { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777407, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777239, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777412, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777406, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777237, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777411, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777408, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777410, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777437, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777438, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.settingArr.push(settingData);
        }
        return this.settingArr;
    }
}
export default new HomeViewModel();
