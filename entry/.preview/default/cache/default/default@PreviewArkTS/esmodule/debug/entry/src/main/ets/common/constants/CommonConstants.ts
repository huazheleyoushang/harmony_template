/**
 * 通用静态常量
 */
export default class CommonConstants {
    // 小字号
    static readonly SET_SIZE_SMALL: number = 10;
    // 正常字号
    static readonly SET_SIZE_NORMAL: number = 12;
    // 大字号
    static readonly SET_SIZE_LARGE: number = 16;
    // 超大字号
    static readonly SET_SIZE_EXTRA_LARGE: number = 20;
    static readonly SET_SLIDER_MIN: number = 10;
    static readonly SET_SLIDER_MAX: number = 20;
    static readonly SET_SLIDER_STEP: number = 2;
    // 默认定位 0
    static readonly DISPLAY_INDEX: number = 0;
    /**
     * The setting list voice index.
     */
    static readonly VOICE_INDEX: number = 1;
    /**
     * The setting list slice start index.
     */
    static readonly START_INDEX: number = 2;
    /**
     * The setting list slice font index.
     */
    static readonly SET_FONT_INDEX: number = 3;
    /**
     * The setting list slice end index.
     */
    static readonly END_INDEX: number = 6;
    /**
     * Input length of the account.
     */
    static readonly INPUT_ACCOUNT_LENGTH = 11;
    /**
     *  Input length of the password.
     */
    static readonly INPUT_PASSWORD_LENGTH = 8;
    /**
     *  Left padding of the input box
     */
    static readonly INPUT_PADDING_LEFT = 0;
    /**
     * Delay time of simulated login
     */
    static readonly LOGIN_DELAY_TIME = 2000;
    /**
     * Common Spacing of Components
     */
    static readonly COMMON_SPACE = 12;
    /**
     * Title text of the home page
     */
    static readonly HOME_TITLE = '首页';
    /**
     * Title text of the doc page
     */
    static readonly DOC_TITLE = '文档';
    /**
     * Title text of the setting page
     */
    static readonly MINE_TITLE = '我的';
    /**
     * Spacing of other login methods
     */
    static readonly LOGIN_METHODS_SPACE = 44;
    /**
     * The width or height of the component is spread across the parent component.
     */
    static readonly FULL_PARENT = '100%';
    /**
     * The width of button
     */
    static readonly BUTTON_WIDTH = '90%';
    /**
     * The width of setting list
     */
    static readonly SET_LIST_WIDTH = '45%';
    /**
     * Home tab index
     */
    static readonly HOME_TAB_INDEX = 0;
    /**
     * Mine tab index
     */
    static readonly DOC_TAB_INDEX = 1;
    /**
     * Mine tab index
     */
    static readonly MINE_TAB_INDEX = 2;
}
