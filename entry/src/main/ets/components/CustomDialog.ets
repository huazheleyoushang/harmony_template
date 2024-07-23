/*
 * @title 标题
 * @description 自定义弹窗组件
 * @author Asren
 * @message 文案描述
 * */


@Extend(Column)
function styleColumn() {
  .padding({ top: 16 })
  .width(280)
  .borderRadius(24)
  .backgroundColor("#fff")
}

@Extend(Button)
function styleButton(color: string) {
  .fontSize(18)
  .width('50%')
  .height('100%')
  .backgroundColor(0xffffff)
  .fontColor(color)
}

interface DialogInfo {
  title: string
  message?: string
  isCancel?: boolean
}

@CustomDialog
export struct CustomDialogComponent {
  @Prop dialogInfo: DialogInfo
  controller: CustomDialogController
  cancel: () => void = () => {}
  confirm: () => void = () => {}
  build() {
    Column() {
      Text(this.dialogInfo.title)
        .fontSize(20)
        .margin({ top: 16, bottom: 16 })
      if(this.dialogInfo.message) {
        Row() {
          Text(this.dialogInfo.message)
        }
        .margin({ bottom: 24 })
      }
      Divider().strokeWidth(1).color('#F1F3F5')
      Row() {
        if (this.dialogInfo.isCancel) {
          Button({stateEffect: false}) {
            Text('取消')
          }
          .onClick(() => {
            this.controller.close()
            this.cancel()
          })
          .styleButton('#333')
          Divider().vertical(true).height(30).color('#E5E5E5')
        }
        Button({stateEffect: false}){
          Text('确认')
        }
        .styleButton('#D1AF81')
        .onClick(() => {
          this.controller.close()
          this.confirm()
        })
      }
      .height(55)
    }
   .styleColumn()
  }
}
