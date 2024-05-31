/**
 * 设置字体大小
 * @案例
 */
import FontSizeUtil, { DEFAULT_FONT_SIZE } from '../common/database/FontSizeUtil';
import CommonConstants from '../common/constants/CommonConstants';

@Entry
@Component
struct SettingFontSize {
  @State changeFontSize: number = DEFAULT_FONT_SIZE;

  onPageShow() {
    FontSizeUtil.getChangeFontSize().then((value: number) => {
      this.changeFontSize = value;
    });
  }

  build() {
    Column() {
      Scroll() {
        Column() {
          Text(`当前字体大小${this.changeFontSize}`)
            .fontColor(Color.Blue)
            .fontSize(this.changeFontSize)
            .margin({ bottom: 30 })
          Slider({
            value: this.changeFontSize,
            min: CommonConstants.SET_SLIDER_MIN,
            max: CommonConstants.SET_SLIDER_MAX,
            step: CommonConstants.SET_SLIDER_STEP,
            style: SliderStyle.InSet
          })
            .width('68%')
            .onChange(async (value: number) => {
              this.changeFontSize = value;
              FontSizeUtil.saveChangeFontSize(this.changeFontSize);
            })
        }
      }
      .width('100%')
      .height('100%')
    }
  }
}