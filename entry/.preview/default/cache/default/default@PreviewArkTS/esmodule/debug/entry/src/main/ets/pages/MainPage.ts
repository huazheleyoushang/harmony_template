if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MainPage_Params {
    currentIndex?: number;
    tabsController?: TabsController;
    changeFontSize?: number;
}
import CommonConstants from "@bundle:com.example.component/entry/ets/common/constants/CommonConstants";
import Home from "@bundle:com.example.component/entry/ets/view/Home";
import Setting from "@bundle:com.example.component/entry/ets/view/Setting";
import Doc from "@bundle:com.example.component/entry/ets/view/Doc";
import FontSizeUtil, { DEFAULT_FONT_SIZE } from "@bundle:com.example.component/entry/ets/common/database/FontSizeUtil";
class MainPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(CommonConstants.HOME_TAB_INDEX, this, "currentIndex");
        this.tabsController = new TabsController();
        this.__changeFontSize = new ObservedPropertySimplePU(DEFAULT_FONT_SIZE, this, "changeFontSize");
        this.addProvidedVar("changeFontSize", this.__changeFontSize, false);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MainPage_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.tabsController !== undefined) {
            this.tabsController = params.tabsController;
        }
        if (params.changeFontSize !== undefined) {
            this.changeFontSize = params.changeFontSize;
        }
    }
    updateStateVars(params: MainPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__changeFontSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private tabsController: TabsController;
    private __changeFontSize: ObservedPropertySimplePU<number>;
    get changeFontSize() {
        return this.__changeFontSize.get();
    }
    set changeFontSize(newValue: number) {
        this.__changeFontSize.set(newValue);
    }
    onPageShow() {
        FontSizeUtil.getChangeFontSize().then((value: number) => {
            this.changeFontSize = value;
        });
    }
    TabBuilder(title: string, index: number, selectedImg: Resource, normalImg: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(24:5)");
            Column.justifyContent(FlexAlign.Center);
            Column.height({ "id": 16777259, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.width(CommonConstants.FULL_PARENT);
            Column.onClick(() => {
                this.currentIndex = index;
                this.tabsController.changeIndex(this.currentIndex);
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentIndex === index ? selectedImg : normalImg);
            Image.debugLine("entry/src/main/ets/pages/MainPage.ets(25:7)");
            Image.width({ "id": 16777261, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777261, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(28:7)");
            Text.margin({ top: { "id": 16777262, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Text.fontSize(this.changeFontSize);
            Text.fontColor(this.currentIndex === index ? { "id": 16777372, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" } : { "id": 16777371, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({
                barPosition: BarPosition.End,
                controller: this.tabsController
            });
            Tabs.debugLine("entry/src/main/ets/pages/MainPage.ets(43:5)");
            Tabs.width(CommonConstants.FULL_PARENT);
            Tabs.backgroundColor(Color.White);
            Tabs.barHeight({ "id": 16777259, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Tabs.barMode(BarMode.Fixed);
            Tabs.onChange((index: number) => {
                this.currentIndex = index;
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Home(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/MainPage.ets", line: 48 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Home" });
                }
            });
            TabContent.padding({ left: { "id": 16777263, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, right: { "id": 16777263, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777370, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, CommonConstants.HOME_TITLE, CommonConstants.HOME_TAB_INDEX, { "id": 16777381, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777219, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/pages/MainPage.ets(47:7)");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            // 文档模块
                            Doc(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/MainPage.ets", line: 57 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Doc" });
                }
            });
            TabContent.padding({ left: { "id": 16777263, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, right: { "id": 16777263, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777370, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, CommonConstants.DOC_TITLE, CommonConstants.DOC_TAB_INDEX, { "id": 16777404, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777401, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/pages/MainPage.ets(55:7)");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Setting(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/MainPage.ets", line: 65 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Setting" });
                }
            });
            TabContent.padding({ left: { "id": 16777263, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, right: { "id": 16777263, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777370, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, CommonConstants.MINE_TITLE, CommonConstants.MINE_TAB_INDEX, { "id": 16777361, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777386, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/pages/MainPage.ets(64:7)");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "MainPage";
    }
}
registerNamedRoute(() => new MainPage(undefined, {}), "", { bundleName: "com.example.component", moduleName: "entry", pagePath: "pages/MainPage", pageFullPath: "entry/src/main/ets/pages/MainPage", integratedHsp: "false" });
