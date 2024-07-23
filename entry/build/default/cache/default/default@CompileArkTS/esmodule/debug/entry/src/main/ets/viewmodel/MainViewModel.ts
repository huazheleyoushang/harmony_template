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
            { "id": 16777399, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777400, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777401, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777402, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
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
            new ItemData({ "id": 16777261, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777419, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777427, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777256, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777421, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777281, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777432, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777434, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777392, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777398, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777267, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777428, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777254, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777435, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777253, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777247, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777424, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777252, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777245, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777391, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777250, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777246, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777403, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777251, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777276, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777425, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777279, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777274, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777393, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777275, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777420, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777273, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777388, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777278, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777433, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777277, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777426, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return settingListData;
    }
}
export default new MainViewModel();
