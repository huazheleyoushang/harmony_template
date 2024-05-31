import ItemData from "@bundle:com.example.component/entry/ets/viewmodel/ItemData";
/**
 * Binds data to components and provides interfaces.
 */
export class MainViewModel {
    /**
     * Get swiper image data.
     *
     * @return {Array<Resource>} swiperImages.
     */
    getSwiperImages(): Array<Resource> {
        let swiperImages: Resource[] = [
            { "id": 16777383, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777398, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777392, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777299, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
        ];
        return swiperImages;
    }
    /**
     * Get data of the first grid.
     *
     * @return {Array<PageResource>} firstGridData.
     */
    getFirstGridData(): Array<ItemData> {
        let firstGridData: ItemData[] = [
            new ItemData({ "id": 16777335, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777360, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777312, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777356, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777330, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777391, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777353, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777397, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777334, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777389, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777311, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777388, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777308, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777222, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777341, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777362, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return firstGridData;
    }
    /**
     * Get data of the second grid.
     *
     * @return {Array<PageResource>} secondGridData.
     */
    getSecondGridData(): Array<ItemData> {
        let secondGridData: ItemData[] = [
            new ItemData({ "id": 16777328, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777384, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777327, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777321, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777387, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777326, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777319, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777399, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777324, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777320, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777390, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777325, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return secondGridData;
    }
    /**
     * Get data of the setting list.
     *
     * @return {Array<PageResource>} settingListData.
     */
    getSettingListData(): Array<ItemData> {
        let settingListData: ItemData[] = [
            new ItemData({ "id": 16777349, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777298, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777352, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777347, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777218, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777348, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777221, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777346, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777393, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777351, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777220, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777350, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777296, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return settingListData;
    }
}
export default new MainViewModel();
