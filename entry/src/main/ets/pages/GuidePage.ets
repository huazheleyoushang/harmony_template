import { router } from '@kit.ArkUI';

const MAIN_PAGE = 'pages/MainPage';

/**
 * 引导页面
 */
@Entry({ routeName: MAIN_PAGE })
@Component
struct GuidePage {
  private swiperController: SwiperController = new SwiperController()
  private data: Array<ResourceStr> = [
    $r('app.media.IMG_01'),
    $r('app.media.IMG_02'),
    $r('app.media.IMG_03'),
    $r('app.media.IMG_04'),
  ];
  @State mIndex: number = 0;

  build() {
    Stack() {
      Swiper(this.swiperController) {
        ForEach(this.data, (item: ResourceStr) => {
          Image(item)
            .width('100%')
            .height('100%')
            .onClick(() => {
              if (this.mIndex == 3) {
                this.jumpToMainPage();
              }
            })
        })
      }
      .autoPlay(false)
      .interval(0)
      .loop(false)
      .itemSpace(0)
      .duration(150)
      .cachedCount(4)
      .indicator(false)
      .curve(Curve.Linear)
      .onChange((index: number) => {
        this.mIndex = index;
      })
    }
  }

  private jumpToMainPage() {
    router.clear();
    router.replaceUrl({
      url: MAIN_PAGE
    })
  }
}
