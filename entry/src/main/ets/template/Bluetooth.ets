/**
 * 蓝牙调试
 */
import { access } from '@kit.ConnectivityKit';
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
import { CustomDialogComponent } from '../components/CustomDialog'

@Entry
@Component
export default struct Bluetooth {
  status: number = 0
  btStateMessage: string = ""

  dialogController: CustomDialogController = new CustomDialogController({
    builder: CustomDialogComponent({
      cancel: this.onCancel,
      confirm: this.onAccept,
    }),
    alignment: DialogAlignment.Default,  // 可设置dialog的对齐方式，设定显示在底部或中间等，默认为底部显示
  })
  onCancel() {
    console.info('Callback when the first button is clicked')
  }
  onAccept() {
    console.info('Callback when the second button is clicked')
  }

  build() {
    Column() {
      Row({ space: 5 }) {
        Text("Bluetooth").width(80)
        Text(this.status === 0 ? "关" : "开")
      }.margin({ bottom: 10 })
      Row() {
        Text(`btStateMessage:${this.btStateMessage}`)
      }.margin({ bottom: 10 })
      Row() {
        Button({ type: ButtonType.Normal }) {
          Text("自定义弹窗")
        }.onClick(() => {
          this.dialogController.open()
        })
        .borderRadius(6).backgroundColor(0x317aff).width(120).height(36).fontColor(Color.White)
      }.margin({ bottom: 20 })
      Row() {
        Button({ type: ButtonType.Normal }) {
          Text("检测蓝牙状态")
        }.onClick(() => {
          const status = access.getState()
          this.status = status
          console.log('-=-=-', status)
        })
        .borderRadius(6).backgroundColor(0x317aff).width(120).height(36).fontColor(Color.White)
      }
      .margin({ bottom: 20 })
      Row() {
        Button({ type: ButtonType.Normal }) {
          Text("打开/关闭蓝牙")
        }.onClick(() => {
          try{
            this.status === 0 ? access.enableBluetooth() : access.disableBluetooth()
          } catch (err) {
            console.log('err', (err as BusinessError).message)
          }

          access.on('stateChange', (data) => {
            switch (data) {
              case 0:
                this.btStateMessage += 'STATE_OFF';
                break;
              case 1:
                this.btStateMessage += 'STATE_TURNING_ON';
                break;
              case 2:
                this.btStateMessage += 'STATE_ON';
                break;
              case 3:
                this.btStateMessage += 'STATE_TURNING_OFF';
                break;
              case 4:
                this.btStateMessage += 'STATE_BLE_TURNING_ON';
                break;
              case 5:
                this.btStateMessage += 'STATE_BLE_ON';
                break;
              case 6:
                this.btStateMessage += 'STATE_BLE_TURNING_OFF';
                break;
              default:
                this.btStateMessage += 'unknown status';
                break;
            }
            if (this.btStateMessage == 'STATE_ON') {
              access.off('stateChange');
            }
            console.info('bluetooth' + this.btStateMessage);
          })
        })
        .borderRadius(6).backgroundColor(0x317aff).width(120).height(36).fontColor(Color.White)
      }
    }
    .width('100%').height('100%').padding({ top: 10 })
  }
}