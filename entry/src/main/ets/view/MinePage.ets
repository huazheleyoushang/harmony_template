import { CustomDialogComponent } from '../components/CustomDialog'

interface UserInfo {
  username: string,
  userNo: string
}
interface ModuleList {
  src: string | Resource
  moduleName: string
  id: number
}

const color_one: [string,number] = ['#FFF8EA', 0.3]
const color_two: [string,number] = ["#FFFFFF", 0.8]

@Preview
@Component
@Entry
struct MinePage {
  title: string = '浙江娃哈哈企业股份有限公司';
  dialogController: CustomDialogController = new CustomDialogController({
    builder: CustomDialogComponent({
      cancel: this.onCancel,
      confirm: this.onAccept,
      dialogInfo: {
        title: '确定退出登录？',
        isCancel: true,
      },
    }),
    customStyle: true,
    alignment: DialogAlignment.Center,  // 可设置dialog的对齐方式，设定显示在底部或中间等，默认为底部显示
  })
  onCancel() {
    console.info('Callback when the first button is clicked')
  }
  onAccept() {
    console.info('Callback when the second button is clicked')
  }

  userInfo: UserInfo = {
    username: '张哈哈哈',
    userNo: '0001'
  };
  totalAsset: string = '29,521.90'
  @State moduleList: ModuleList[] = [
    {
      src: $r('app.media.icon_1'),
      moduleName: '企业贷款',
      id: 1,
    },
    {
      src: $r('app.media.icon_1'),
      moduleName: '企业存款',
      id: 2,
    },
    {
      src: $r('app.media.icon_1'),
      moduleName: '安全中心',
      id: 3,
    },
    {
      src: $r('app.media.icon_1'),
      moduleName: '操作日志查询',
      id: 4,
    },
    {
      src: $r('app.media.icon_1'),
      moduleName: '授权模式管理',
      id: 5,
    }
  ]

  build() {
    Column() {
      // MUTitleBar({ title: '我的' })
      Column(){
        Text(this.title)
          .fontSize(18)
          .fontColor('#333')
          .textAlign(TextAlign.Center)
          .fontWeight(500)
          .padding({ top: 18, bottom: 18})
          .margin({ bottom: 18})
        // 用户信息
        Flex({
          justifyContent: FlexAlign.SpaceBetween,
          alignItems: ItemAlign.End
        }) {
          Row() {
            Image($r('app.media.app_icon'))
              .width(42)
              .height(42)
              .borderRadius(20)
              .margin({ right: 15 })
            Column(){
              Text(this.userInfo.userNo)
                .fontSize(16)
                .fontColor('#333')
                .width('100%')
                .textAlign(TextAlign.Start)
                .margin({ bottom: 8})
              Text(this.userInfo.username)
                .fontSize(16)
                .fontColor('#333')
                .width('100%')
                .textAlign(TextAlign.Start)
            }
            .width(100)
            .justifyContent(FlexAlign.Start)
          }
          Text('上次登录2024-07-10').fontSize(12).fontColor('#666').fontFamily('SourceHanSansCN-Regular')
        }
        .width(345)
      }
      .width('100%')
      .height(210)
      .backgroundImage($r('app.media.banner'), ImageRepeat.NoRepeat)
      .backgroundImageSize({ width: '100%', height: 210 })
      // 资产总览
      Column() {
        Text('资产总览')
          .fontSize(16)
          .fontColor('#fff')
          .fontWeight(500)
          .width(345)
          .height(60)
          .padding({ top: 10, left: 15 })
          .backgroundImage($r('app.media.nav'), ImageRepeat.NoRepeat)
          .backgroundImageSize({ width: 345, height: 60 })
        Image($r('app.media.icon_right'))
          .width(24)
          .height(24)
          .position({x: 300, y: 20})
          .onClick(() => {
          //   TODO:
          })
        Column() {
          Text('总资产(元)').textAlign(TextAlign.Start).width('100%')
          Text(this.totalAsset)
            .fontSize(24)
            .fontColor('#121736')
            .fontWeight(700)
            .margin({top: 10})
            .textAlign(TextAlign.Start).width('100%')
          Flex({
            justifyContent: FlexAlign.Center,
            alignItems: ItemAlign.Center
          }) {
            Text('单笔转账').styleItem().borderRadius({ bottomLeft: 8 })
            Divider().vertical(true).height(22).color('#DFDFDF')
            Text('交易明细').styleItem()
            Divider().vertical(true).height(22).color('#DFDFDF')
            Text('指令处理').styleItem().borderRadius({ bottomRight: 8 })
          }
          .margin({top: 10, left: -15})
        }
        .width(334)
        .height(125)
        .backgroundColor('#fff')
        .borderRadius(8)
        .padding({ top: 20, left: 15 })
      }
      .width(345)
      .height(192)
      .borderRadius(8)
      .margin({top: -50})
      .linearGradient({
        angle: 90,
        colors: [['#D1AF81', 0.9], ['EBC491', 0.6]]
      })
      Flex({
        justifyContent: FlexAlign.Start,
        alignItems: ItemAlign.Center,
        wrap: FlexWrap.Wrap
      }) {
        ForEach(this.moduleList, (item: ModuleList, index: number) => {
          Column() {
            Image(item.src)
              .width(40)
              .height(40)
            Text(item.moduleName)
              .fontSize(13)
              .fontColor('#666')
              .margin({top: 10})
          }
          .width(80)
          .margin({bottom: 20})
          .onClick(() => {
            console.log("index", index, "item", JSON.stringify(item))
            switch (index) {
              case 1:
                break;
            }
          })
        })
      }
      .margin({top: 25})
      .padding({ left: 14, right: 14 })
      Image($r('app.media.btn'))
        .width(260)
        .margin({top: 130})
        .onClick(() => {
          //  TODO:
          this.dialogController.open()
        })
    }.justifyContent(FlexAlign.Center).width('100%').height('100%')
  }
}

@Extend(Text)
function styleItem() {
  .width('33.33%')
  .height(40)
  .fontSize(14)
  .fontColor('#D1AF81')
  .fontWeight(700)
  .textAlign(TextAlign.Center)
  .linearGradient({
    direction: GradientDirection.Bottom,
    repeating: false,
    colors: [color_one, color_two]
  })
}