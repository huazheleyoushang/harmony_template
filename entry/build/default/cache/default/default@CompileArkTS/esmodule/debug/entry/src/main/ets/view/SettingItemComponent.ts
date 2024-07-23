if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SettingItemComponent_Params {
    setting?: SettingData;
    changeFontSize?: number;
    itemClick?: Function;
}
import SettingData from "@bundle:com.example.component/entry/ets/viewmodel/SettingData";
import StyleConstants from "@bundle:com.example.component/entry/ets/common/constants/StyleConstants";
export default class SettingItemComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setting = new SettingData();
        this.__changeFontSize = new SynchedPropertySimpleOneWayPU(params.changeFontSize, this, "changeFontSize");
        this.itemClick = () => {
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SettingItemComponent_Params) {
        if (params.setting !== undefined) {
            this.setting = params.setting;
        }
        if (params.changeFontSize === undefined) {
            this.__changeFontSize.set(0);
        }
        if (params.itemClick !== undefined) {
            this.itemClick = params.itemClick;
        }
    }
    updateStateVars(params: SettingItemComponent_Params) {
        this.__changeFontSize.reset(params.changeFontSize);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__changeFontSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private setting: SettingData;
    private __changeFontSize: SynchedPropertySimpleOneWayPU<number>;
    get changeFontSize() {
        return this.__changeFontSize.get();
    }
    set changeFontSize(newValue: number) {
        this.__changeFontSize.set(newValue);
    }
    private itemClick: Function;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 16777363, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Row.onClick(() => {
                this.itemClick();
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.setting.settingImage);
            Image.height({ "id": 16777364, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.width({ "id": 16777364, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.margin({ left: { "id": 16777359, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, right: { "id": 16777360, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.setting.settingName);
            Text.fontSize(this.changeFontSize + StyleConstants.UNIT_FP);
            Text.fontColor({ "id": 16777299, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
