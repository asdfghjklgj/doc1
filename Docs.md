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

驱动下载链接：[https://www.wch.cn/download/file?id=65](https://www.wch.cn/download/file?id=65) 来源：沁恒

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



