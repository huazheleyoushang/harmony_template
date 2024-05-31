if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TitleBarComponent_Params {
    isBack?: boolean;
    title?: Resource;
}
import router from "@ohos:router";
import StyleConstants from "@bundle:com.example.component/entry/ets/common/constants/StyleConstants";
export default class TitleBarComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.isBack = true;
        this.title = { "id": 16777434, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TitleBarComponent_Params) {
        if (params.isBack !== undefined) {
            this.isBack = params.isBack;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
    }
    updateStateVars(params: TitleBarComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private isBack: boolean;
    private title: Resource;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/TitleBarComponent.ets(28:5)");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height(StyleConstants.TITLE_BAR_HEIGHT_PERCENT);
            Row.padding({ left: { "id": 16777432, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isBack) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777419, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Image.debugLine("entry/src/main/ets/view/TitleBarComponent.ets(30:9)");
                        Image.height({ "id": 16777431, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Image.width({ "id": 16777431, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Image.margin({ right: { "id": 16777430, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                        Image.onClick(() => {
                            router.back();
                        });
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.debugLine("entry/src/main/ets/view/TitleBarComponent.ets(39:7)");
            Text.fontColor(Color.Black);
            Text.fontSize({ "id": 125829676, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.margin({ left: { "id": 16777433, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
