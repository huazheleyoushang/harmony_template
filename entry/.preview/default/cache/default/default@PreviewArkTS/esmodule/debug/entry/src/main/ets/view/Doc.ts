if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Doc_Params {
    settingArr?;
    changeFontSize?: number;
}
import router from "@ohos:router";
import SettingItemComponent from "@bundle:com.example.component/entry/ets/view/SettingItemComponent";
import TitleBarComponent from "@bundle:com.example.component/entry/ets/view/TitleBarComponent";
import HomeViewModel from "@bundle:com.example.component/entry/ets/viewmodel/HomeViewModel";
import CommonConstants from "@bundle:com.example.component/entry/ets/common/constants/CommonConstants";
import StyleConstants from "@bundle:com.example.component/entry/ets/common/constants/StyleConstants";
import type SettingData from '../viewmodel/SettingData';
import Logger from "@bundle:com.example.component/entry/ets/common/utils/Logger";
const TAG = '[Doc]';
export default class Doc extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.settingArr = HomeViewModel.initSettingData();
        this.__changeFontSize = this.initializeConsume("changeFontSize", "changeFontSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Doc_Params) {
        if (params.settingArr !== undefined) {
            this.settingArr = params.settingArr;
        }
    }
    updateStateVars(params: Doc_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__changeFontSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private settingArr;
    private __changeFontSize: ObservedPropertyAbstractPU<number>;
    get changeFontSize() {
        return this.__changeFontSize.get();
    }
    set changeFontSize(newValue: number) {
        this.__changeFontSize.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/Doc.ets(19:5)");
            Column.backgroundColor({ "id": 125829132, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.width(StyleConstants.FULL_WIDTH);
            Column.height(StyleConstants.FULL_HEIGHT);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TitleBarComponent(this, { isBack: false, title: { "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/Doc.ets", line: 20 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isBack: false,
                            title: { "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TitleBarComponent" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/Doc.ets(22:7)");
            __Row__blockBackground(StyleConstants.BLOCK_TOP_MARGIN_FIRST_PERCENT);
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingItemComponent(this, {
                        setting: this.settingArr[CommonConstants.DISPLAY_INDEX],
                        changeFontSize: this.changeFontSize,
                        itemClick: () => { }
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/Doc.ets", line: 23 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            setting: this.settingArr[CommonConstants.DISPLAY_INDEX],
                            changeFontSize: this.changeFontSize,
                            itemClick: () => { }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        changeFontSize: this.changeFontSize
                    });
                }
            }, { name: "SettingItemComponent" });
        }
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/Doc.ets(31:7)");
            __Row__blockBackground(StyleConstants.BLOCK_TOP_MARGIN_SECOND_PERCENT);
        }, Row);
        this.SettingItems.bind(this)();
        Row.pop();
        Column.pop();
    }
    SettingItems(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("entry/src/main/ets/view/Doc.ets(42:5)");
            List.divider({
                strokeWidth: { "id": 16777427, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                color: '#0d182431',
                startMargin: { "id": 16777426, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                endMargin: StyleConstants.DIVIDER_END_MARGIN_PERCENT
            });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("entry/src/main/ets/view/Doc.ets(45:11)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new SettingItemComponent(this, { setting: item, changeFontSize: this.changeFontSize, itemClick: () => {
                                            if (index === CommonConstants.SET_FONT_INDEX) {
                                                router.pushUrl({
                                                    url: 'template/SettingFontSize'
                                                }).catch((error: Error) => {
                                                    Logger.info(TAG, 'HomePage push error' + JSON.stringify(error));
                                                });
                                            }
                                        } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/Doc.ets", line: 46 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            setting: item,
                                            changeFontSize: this.changeFontSize,
                                            itemClick: () => {
                                                if (index === CommonConstants.SET_FONT_INDEX) {
                                                    router.pushUrl({
                                                        url: 'template/SettingFontSize'
                                                    }).catch((error: Error) => {
                                                        Logger.info(TAG, 'HomePage push error' + JSON.stringify(error));
                                                    });
                                                }
                                            }
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        changeFontSize: this.changeFontSize
                                    });
                                }
                            }, { name: "SettingItemComponent" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.settingArr.slice(CommonConstants.START_INDEX, CommonConstants.END_INDEX), forEachItemGenFunction, (item: SettingData) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Doc";
    }
}
function __Row__blockBackground(marginTop: string): void {
    Row.backgroundColor(Color.White);
    Row.borderRadius(24);
    Row.margin({ top: marginTop });
    Row.width(StyleConstants.BLOCK_WIDTH_PERCENT);
    Row.padding({ top: 4, bottom: 4 });
}
registerNamedRoute(() => new Doc(undefined, {}), "", { bundleName: "com.example.component", moduleName: "entry", pagePath: "view/Doc", integratedHsp: "false" });
