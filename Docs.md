# SlimeVR Bmi270 使用手册

本页面提供给需要查阅基本使用方法与问题解决办法的客户阅读

## 1.快速上手

本章提供快速入门手册与基本使用方法

**下载安装服务端**

本产品使用开源的软件结构，SlimeVR Server提供了中文界面与方便的使用方法，相信您可以很快的上手并使用该产品

### 1.1.下载软件

我们在大量的实践中得出，Web Installer的上手难度比单独配置要低很多，故本文只讲解Web Installer的使用方法。

::: tip

*附件 下载地址：[https://github.com/SlimeVR/SlimeVR-Installer/releases/latest/download/slimevr_web_installer.exe](https://github.com/SlimeVR/SlimeVR-Installer/releases/latest/download/slimevr_web_installer.exe)

*因为中国大陆网络问题，安装时可能需要魔法

:::

### 1.2.安装软件

下载后，我们不建议您更改任何选项，直接进行安装，这样会更加降低错误发生的机率。

### 1.3.追踪器配网

首先，我们使用TTL芯片来让您方便地进行调试，更新，以及配网。这需要您下载TTL芯片的驱动，我们会在后面写出链接。

::: tip

驱动下载链接：[https://www.wch.cn/download/file?id=65](https://www.wch.cn/download/file?id=65) 来源：沁恒微电子

:::

 打开您的追踪器电源，将Type-C电缆链接至电脑与追踪器，确保追踪器充电指示灯常亮，蓝色指示灯闪烁。

启动SlimeVR Server

[![pVXm7VK.md.png](https://s21.ax1x.com/2025/10/24/pVXm7VK.md.png)](https://imgchr.com/i/pVXm7VK)

点击图片所示的“向导”按钮

[![pVXmX2d.md.png](https://s21.ax1x.com/2025/10/24/pVXmX2d.md.png)](https://imgchr.com/i/pVXmX2d)

点击“我准备好了”按钮后，您会被要求输入WiFi SSID与密码

[![pVXmLPe.md.png](https://s21.ax1x.com/2025/10/24/pVXmLPe.md.png)](https://imgchr.com/i/pVXmLPe)

输入完毕，确保正确无误后，将自动进入追踪器配网阶段

![微信图片_20251024005920_39_40.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEDt5Bo-mEjDRA05qvy2yHBiry90gLYMQACVBwAAlO70FeyJ3AAAZISWOg2BA.png)



::: tip

您可以在此界面插入多个追踪器同时配网，或待一个追踪器配网完成后，插入下一个追踪器，此时配网程序将自动进行配网，无需重复操作

:::

配网完毕后，点击右上角的"X"按钮

![微信图片_20251024005940_40_40.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEDt5Fo-mGvFt2HQxu7zeN1iQPwhY4-KAACVRwAAlO70FcIs66jgIaqsTYE.png)

选择“跳过设置”

### 1.4.穿戴追踪器

::: warning

我们建议您在使用追踪器前将其朝上置于水平面上进行自动校准，这样可以帮助您提高校准精度。

开机时，请将追踪器朝上放置，倒置时，传感器会进入校准模式。后文会提到校准方法

:::

一般地，我们会赠送跟您一包标签纸，您可以随意将标签纸贴在追踪器上，方便后期穿戴。

我们会赠送给您与追踪器数量相当的绑带，其中，髋部与胸部的绑带是最长的，其次为大腿部，最短的应为大臂与小腿部。

将追踪器卡入绑带扣具

![微信图片_20251024011456_41_40.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEDt5Jo-mKbfmj6A4RRxgSrm65lCcmDowACVhwAAlO70FfBXzTYE6JT-zYE.png)

然后，将追踪器按您贴标签的位置穿戴，按照SlimeVR Server中的“追踪器分配”页，调整穿戴位置

### 1.5.开始佩戴校准

确保穿戴好追踪器，进入SlimeVR Server中的"佩戴校准"页，选择"自动设置佩戴方向"按钮，按提示进行下一步操作。

::: tip

在进行完整校准时，要记得双腿打开与肩同宽，站直身体，双手自然垂下，头目视前方哦~

:::

进入第三步时，需要摆出滑雪姿势，屈膝，上身前倾，双臂弯曲，手与胸口接近

到此，您应该已经可以看到预览图上的骨骼跟随您移动了。如果感觉精度不够或关节发生错位，可以重新进行这一步。

## 2.执行骨骼校准

::: info

SlimeVR追踪器依赖于骨骼长度建立精准的追踪，所以，详细的骨骼数据显得尤为重要。本章节将会帮助你将骨骼精度尽可能地提高，让你获得更好的使用体验。

:::

首先进入SlimeVR Server，点击“身体比例”选项卡。

![QQ20251024-200629.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEDv4Jo-2wXwvT2nNe50tDtCR1kPyE3sgAC-xsAAlO72FegQ8q_0AyiOzYE.png)

头显打开安全边界功能，校准好地面高度后，按照服务端指示进行地面高度与头显距地面高度校准。

 点击"重置身体比例"选项卡。

::: tip

可以选择”手动调整身体比例“选项，进行躯干长度的手动调节。

在条件允许的情况下，手动调整身体比例比自动调节的身体比例会更加精准。

:::

至此，您可以正常使用追踪器。如感觉追踪精度低或出现骨骼错位，驱干穿模等情况，请尝试手动调整身体比例。

## 3.持续校准设置

::: info

持续校准功能可以帮助您在适合校准的情况下自动执行校准。

:::

在SlimeVR Server主界面，单击”设置“选项。

选择”持续校准“项，单击”配置持续校准“来开始准备持续校准的程序。这会要求您做出几个动作

在SlimeVR Server中，提供了详尽的动作姿势指导，请按照软件内的动作姿势示例来做出动作。

## 4.脚滑矫正设置

SlimeVR追踪器使用纯惯性动作捕捉方案（IMU方案），这会造成在缺少脚部追踪器的情况下脚部发生滑移，配置”脚滑矫正“选项可以降低这一情况。

一般地，这一选项是默认开启的。我们建议您将数值改到百分之40，当然，这个数值不是绝对不变的。您可以参考您的实际使用情况灵活的改动这一选项，但请记住，在调整数值后，需要在游戏内重新进行校准哦~

## 5.手势控制设置

SlimeVR追踪器提供便捷的校准手势，不过，我们并不建议您全部开启这一选单内的内容。

我们建议关闭三击完整重置，仅开启双击重置航向轴。这一选项可以涵盖您大多数游玩过程中发生漂移需要校准的情况。

如果发生漂移的情况，仅需轻拍两下胸口部位的追踪器，就可以执行重置航向轴操作。