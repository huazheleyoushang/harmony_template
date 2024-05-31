if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SettingFontSize_Params {
    changeFontSize?: number;
}
import FontSizeUtil, { DEFAULT_FONT_SIZE } from "@bundle:com.example.component/entry/ets/common/database/FontSizeUtil";
import CommonConstants from "@bundle:com.example.component/entry/ets/common/constants/CommonConstants";
class SettingFontSize extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__changeFontSize = new ObservedPropertySimplePU(DEFAULT_FONT_SIZE, this, "changeFontSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SettingFontSize_Params) {
        if (params.changeFontSize !== undefined) {
            this.changeFontSize = params.changeFontSize;
        }
    }
    updateStateVars(params: SettingFontSize_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__changeFontSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.width('100%');
            Scroll.height('100%');
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`当前字体大小${this.changeFontSize}`);
            Text.fontColor(Color.Blue);
            Text.fontSize(this.changeFontSize);
            Text.margin({ bottom: 30 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Slider.create({
                value: this.changeFontSize,
                min: CommonConstants.SET_SLIDER_MIN,
                max: CommonConstants.SET_SLIDER_MAX,
                step: CommonConstants.SET_SLIDER_STEP,
                style: SliderStyle.InSet
            });
            Slider.width('68%');
            Slider.onChange(async (value: number) => {
                this.changeFontSize = value;
                FontSizeUtil.saveChangeFontSize(this.changeFontSize);
            });
        }, Slider);
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SettingFontSize";
    }
}
registerNamedRoute(() => new SettingFontSize(undefined, {}), "", { bundleName: "com.example.component", moduleName: "entry", pagePath: "template/SettingFontSize", integratedHsp: "false" });
