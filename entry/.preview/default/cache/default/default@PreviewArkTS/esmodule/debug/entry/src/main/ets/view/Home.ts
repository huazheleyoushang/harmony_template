if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Home_Params {
    swiperController?: SwiperController;
    changeFontSize?: number;
    changeFontSizeTitle?: number;
}
import CommonConstants from "@bundle:com.example.component/entry/ets/common/constants/CommonConstants";
import mainViewModel from "@bundle:com.example.component/entry/ets/viewmodel/MainViewModel";
import type ItemData from '../viewmodel/ItemData';
export default class Home extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.swiperController = new SwiperController();
        this.__changeFontSize = this.initializeConsume("changeFontSize", "changeFontSize");
        this.__changeFontSizeTitle = new ObservedPropertySimplePU(this.changeFontSize + 4, this, "changeFontSizeTitle");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Home_Params) {
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
        }
        if (params.changeFontSizeTitle !== undefined) {
            this.changeFontSizeTitle = params.changeFontSizeTitle;
        }
    }
    updateStateVars(params: Home_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
        this.__changeFontSizeTitle.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__changeFontSize.aboutToBeDeleted();
        this.__changeFontSizeTitle.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private swiperController: SwiperController;
    private __changeFontSize: ObservedPropertyAbstractPU<number>;
    get changeFontSize() {
        return this.__changeFontSize.get();
    }
    set changeFontSize(newValue: number) {
        this.__changeFontSize.set(newValue);
    }
    private __changeFontSizeTitle: ObservedPropertySimplePU<number>;
    get changeFontSizeTitle() {
        return this.__changeFontSizeTitle.get();
    }
    set changeFontSizeTitle(newValue: number) {
        this.__changeFontSizeTitle.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/view/Home.ets(16:5)");
            Scroll.scrollBar(BarState.Off);
            Scroll.height(CommonConstants.FULL_PARENT);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: CommonConstants.COMMON_SPACE });
            Column.debugLine("entry/src/main/ets/view/Home.ets(17:7)");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/Home.ets(18:9)");
            Column.width(CommonConstants.FULL_PARENT);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777322, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/Home.ets(19:11)");
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize({ "id": 16777272, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777264, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Text.padding({ left: { "id": 16777265, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create(this.swiperController);
            Swiper.debugLine("entry/src/main/ets/view/Home.ets(28:9)");
            Swiper.margin({ top: { "id": 16777242, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Swiper.autoPlay(true);
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const img = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(img);
                    Image.debugLine("entry/src/main/ets/view/Home.ets(30:13)");
                    Image.borderRadius({ "id": 16777241, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getSwiperImages(), forEachItemGenFunction, (img: Resource) => JSON.stringify(img.id), false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/view/Home.ets(36:9)");
            Grid.columnsTemplate('1fr 1fr 1fr 1fr');
            Grid.rowsTemplate('1fr 1fr');
            Grid.columnsGap({ "id": 16777228, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777232, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.padding({ top: { "id": 16777231, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottom: { "id": 16777231, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Grid.height({ "id": 16777229, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.backgroundColor(Color.White);
            Grid.borderRadius({ "id": 16777227, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("entry/src/main/ets/view/Home.ets(38:13)");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("entry/src/main/ets/view/Home.ets(39:15)");
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(item.img);
                            Image.debugLine("entry/src/main/ets/view/Home.ets(40:17)");
                            Image.width({ "id": 16777235, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Image.height({ "id": 16777235, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.title);
                            Text.debugLine("entry/src/main/ets/view/Home.ets(43:17)");
                            Text.fontSize(this.changeFontSize);
                            Text.margin({ top: { "id": 16777234, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                        }, Text);
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getFirstGridData(), forEachItemGenFunction, (item: ItemData) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777313, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/Home.ets(59:9)");
            Text.fontSize(this.changeFontSizeTitle);
            Text.fontWeight(FontWeight.Medium);
            Text.width(CommonConstants.FULL_PARENT);
            Text.margin({ top: { "id": 16777243, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/view/Home.ets(65:9)");
            Grid.width(CommonConstants.FULL_PARENT);
            Grid.height({ "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.columnsTemplate('1fr 1fr');
            Grid.rowsTemplate('1fr 1fr');
            Grid.columnsGap({ "id": 16777228, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777232, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Grid.margin({ bottom: { "id": 16777280, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const secondItem = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.padding({ top: { "id": 16777238, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, left: { "id": 16777238, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                        GridItem.borderRadius({ "id": 16777226, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        GridItem.align(Alignment.TopStart);
                        GridItem.backgroundImage(secondItem.img);
                        GridItem.backgroundImageSize(ImageSize.Cover);
                        GridItem.width(CommonConstants.FULL_PARENT);
                        GridItem.height(CommonConstants.FULL_PARENT);
                        GridItem.debugLine("entry/src/main/ets/view/Home.ets(67:13)");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("entry/src/main/ets/view/Home.ets(68:15)");
                            Column.alignItems(HorizontalAlign.Start);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(secondItem.title);
                            Text.debugLine("entry/src/main/ets/view/Home.ets(69:17)");
                            Text.fontSize(this.changeFontSizeTitle);
                            Text.fontWeight(FontWeight.Medium);
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(secondItem.others);
                            Text.debugLine("entry/src/main/ets/view/Home.ets(72:17)");
                            Text.margin({ top: { "id": 16777237, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            Text.fontSize(this.changeFontSize);
                            Text.fontColor({ "id": 16777364, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        }, Text);
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getSecondGridData(), forEachItemGenFunction, (secondItem: ItemData) => JSON.stringify(secondItem), false, false);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
