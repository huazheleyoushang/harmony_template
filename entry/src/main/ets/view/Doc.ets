import router from '@ohos.router';
import SettingItemComponent from './SettingItemComponent';
import TitleBarComponent from './TitleBarComponent';
import HomeViewModel from '../viewmodel/HomeViewModel';
import CommonConstants from '../common/constants/CommonConstants';
import StyleConstants from '../common/constants/StyleConstants';
import SettingData from '../viewmodel/SettingData';
import Logger from '../common/utils/Logger';

const TAG = '[Doc]';

@Entry
@Component
export default struct Doc {
  private settingArr = HomeViewModel.initSettingData();
  @Consume changeFontSize: number;

  build() {
    Column() {
      TitleBarComponent({ isBack: false, title: $r('app.string.home_doc') })
      // 第一栏
      Row() {
        SettingItemComponent({
          setting: this.settingArr[CommonConstants.DISPLAY_INDEX],
          changeFontSize: this.changeFontSize,
          itemClick: () => {
           // TODO:
          }
        })
      }
      .blockBackground(StyleConstants.BLOCK_TOP_MARGIN_FIRST_PERCENT)
      // 第二栏
      Row() {
        this.SettingItems()
      }
      .blockBackground(StyleConstants.BLOCK_TOP_MARGIN_SECOND_PERCENT)
    }
    .backgroundColor($r('sys.color.ohos_id_color_sub_background'))
    .width(StyleConstants.FULL_WIDTH)
    .height(StyleConstants.FULL_HEIGHT)
  }

  @Builder SettingItems() {
    List() {
      ForEach(this.settingArr,
        (item: SettingData, index?: number) => {
          ListItem() {
            SettingItemComponent({ setting: item, changeFontSize: this.changeFontSize, itemClick: () => {
              Logger.info(TAG, JSON.stringify(item))
              if (index === 5) {
                router.pushUrl({
                  url: 'template/SettingFontSize'
                }).catch((error: Error) => {
                  Logger.info(TAG, 'HomePage push error' + JSON.stringify(error));
                });
              } else if (index === 6) {
                router.pushUrl({
                  url: 'template/Bluetooth'
                })
              }
            } })
          }
        }, (item: SettingData) => JSON.stringify(item))
    }
    .divider({
      strokeWidth: $r('app.float.setting_item_divider_width'),
      color: '#0d182431',
      startMargin: $r('app.float.setting_item_divider_start_margin'),
      endMargin: StyleConstants.DIVIDER_END_MARGIN_PERCENT
    })
  }
}

@Extend(Row) function blockBackground (marginTop: string) {
  .backgroundColor(Color.White)
  .borderRadius(24)
  .margin({ top: marginTop })
  .width(StyleConstants.BLOCK_WIDTH_PERCENT)
  .padding({ top: 4, bottom: 4 })
}