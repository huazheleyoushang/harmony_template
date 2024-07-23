struct preview{build(){Button('确认')
          .onClick(() => {
            this.controller.close()
            this.confirm()
          })
          .fontSize(18)
          .width('50%')
          .height('100%')
          .backgroundColor(0xffffff)
          .fontColor('#D1AF81')}}