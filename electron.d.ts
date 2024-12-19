declare module "electron" {
  // 定义 ClipboardType 类型，用于表示剪贴板的类型，可选值为 'selection' 或 'clipboard'
  type ClipboardType = 'selection' | 'clipboard';

  // 定义 clipboard 模块，包含与剪贴板相关的方法
  module clipboard {
    /**
     * 获取可用的剪贴板格式
     * @param type - 剪贴板类型，可选
     * @returns void
     */
    function availableFormats(type?: ClipboardType): void;

    /**
     * 清除剪贴板内容
     * @param type - 剪贴板类型，可选
     * @returns void
     */
    function clear(type?: ClipboardType): void;

    /**
     * 检查指定格式是否存在于剪贴板中
     * @param fmt - 要检查的格式
     * @param type - 剪贴板类型，可选
     * @returns boolean - 如果存在则返回 true，否则返回 false
     */
    function has(fmt: string, type?: ClipboardType): boolean;

    /**
     * 从剪贴板读取指定格式的数据
     * @param fmt - 要读取的格式
     * @returns string - 读取到的数据
     */
    function read(fmt: string): string;

    /**
     * 从剪贴板读取书签
     * @returns { title: string, url: string } - 书签的标题和 URL
     */
    function readBookmark(): {
      title: string;
      url: string;
    };

    /**
     * 从剪贴板读取指定格式的缓冲区数据
     * @param fmt - 要读取的格式
     * @returns Uint8Array - 读取到的缓冲区数据
     */
    function readBuffer(fmt: string): Uint8Array;

    /**
     * 从剪贴板读取 HTML 格式的数据
     * @param type - 剪贴板类型，可选
     * @returns string - 读取到的 HTML 数据
     */
    function readHTML(type?: ClipboardType): string;

    /**
     * 从剪贴板读取图像数据
     * @param type - 剪贴板类型，可选
     * @returns BrowserWindow.NativeImage - 读取到的图像数据
     */
    function readImage(type?: ClipboardType): BrowserWindow.NativeImage;

    /**
     * 从剪贴板读取 RTF 格式的数据
     * @param type - 剪贴板类型，可选
     * @returns string - 读取到的 RTF 数据
     */
    function readRTF(type?: ClipboardType): string;

    /**
     * 从剪贴板读取文本数据
     * @param type - 剪贴板类型，可选
     * @returns string - 读取到的文本数据
     */
    function readText(type?: ClipboardType): string;

    /**
     * 向剪贴板写入数据
     * @param data - 要写入的数据，包含文本、HTML、图像、RTF 或书签
     * @param type - 剪贴板类型，可选
     * @returns void
     */
    function write(data: {
      text?: string;
      html?: string;
      image?: BrowserWindow.NativeImage;
      rtf?: string;
      bookmark?: string;
    }, type?: ClipboardType): void;

    /**
     * 向剪贴板写入书签
     * @param title - 书签的标题
     * @param url - 书签的 URL
     * @param type - 剪贴板类型，可选
     * @returns void
     */
    function writeBookmark(title: string, url: string, type?: ClipboardType): void;

    /**
     * 向剪贴板写入指定格式的缓冲区数据
     * @param fmt - 要写入的格式
     * @param buffer - 要写入的缓冲区数据
     * @param type - 剪贴板类型，可选
     * @returns void
     */
    function writeBuffer(fmt: string, buffer: Uint8Array, type?: ClipboardType): void;

    /**
     * 向剪贴板写入 HTML 格式的数据
     * @param markup - 要写入的 HTML 标记
     * @param type - 剪贴板类型，可选
     * @returns void
     */
    function writeHTML(markup: string, type?: ClipboardType): void;

    /**
     * 向剪贴板写入图像数据
     * @param img - 要写入的图像数据
     * @param type - 剪贴板类型，可选
     * @returns void
     */
    function writeImage(img: BrowserWindow.NativeImage, type?: ClipboardType): void;

    /**
     * 向剪贴板写入 RTF 格式的数据
     * @param text - 要写入的 RTF 文本
     * @param type - 剪贴板类型，可选
     * @returns void
     */
    function writeRTF(text: string, type?: ClipboardType): void;

    /**
     * 向剪贴板写入文本数据
     * @param text - 要写入的文本数据
     * @param type - 剪贴板类型，可选
     * @returns void
     */
    function writeText(text: string, type?: ClipboardType): void;
  }

  // 定义 UIpcSendEventInit 接口，包含发送者 ID
  interface UIpcSendEventInit {
    senderId: number;
  }

  // 定义 UIpcSendEventListener 类型，用于表示 IPC 发送事件的监听器
  type UIpcSendEventListener<T extends any[]> = (event: UIpcSendEventInit, ...args: T) => void;

  // 定义 ipcRenderer 模块，包含与 IPC 渲染器相关的方法
  module ipcRenderer {
    /**
     * 监听 IPC 通道上的事件
     * @param channel - 要监听的通道
     * @param listener - 事件监听器
     * @returns void
     */
    function on<T extends any[] = any[]>(channel: string, listener: UIpcSendEventListener<T>): void;

    /**
     * 监听 IPC 通道上的事件，仅执行一次
     * @param channel - 要监听的通道
     * @param listener - 事件监听器
     * @returns void
     */
    function once<T extends any[] = any[]>(channel: string, listener: UIpcSendEventListener<T>): void;

    /**
     * 停止监听 IPC 通道上的事件
     * @param channel - 要停止监听的通道
     * @param listener - 事件监听器
     * @returns void
     */
    function off<T extends any[] = any[]>(channel: string, listener: UIpcSendEventListener<T>): void;

    /**
     * 向指定 ID 的窗口发送 IPC 消息
     * @param id - 目标窗口的 ID
     * @param channel - 要发送的通道
     * @param args - 要发送的参数
     * @returns void
     */
    function sendTo<T extends any[] = any[]>(id: number, channel: string, ...args: T): void;
  }

  // 定义 contextBridge 模块，用于在主进程和渲染进程之间进行安全的上下文桥接
  module contextBridge {
  }

  // 定义 webFrame 模块，包含与 Web 框架相关的方法
  module webFrame {
  }

  // 定义 shell 模块，包含与系统 shell 相关的方法
  module shell {
  }

  // 定义 nativeImage 模块，包含与原生图像相关的方法
  module nativeImage {
    // 定义 NativeImage 类型，等同于 BrowserWindow.NativeImage
    type NativeImage = BrowserWindow.NativeImage;

    /**
     * 创建一个空的原生图像
     * @returns NativeImage - 创建的空图像
     */
    function createEmpty(): NativeImage;

    /**
     * 从文件路径创建一个原生图像
     * @param path - 图像文件的路径
     * @returns NativeImage - 创建的图像
     */
    function createFromPath(path: string): NativeImage;

    /**
     * 从位图缓冲区创建一个原生图像
     * @param buffer - 位图缓冲区数据
     * @param options - 创建图像的选项，包括宽度、高度和缩放因子
     * @returns NativeImage - 创建的图像
     */
    function createFromBitmap(buffer: Uint8Array, options: {
      width: number;
      height: number;
      scaleFator?: number;
    }): NativeImage;

    /**
     * 从缓冲区创建一个原生图像
     * @param buffer - 包含图像数据的 Uint8Array
     * @param options - 可选的图像参数，包括宽度、高度和缩放因子
     * @returns 创建的原生图像
     */
    function createFromBuffer(buffer: Uint8Array, options?: {
      width?: number;
      height?: number;
      scaleFactor?: number;
    }): NativeImage;

    /**
     * 从数据 URL 创建一个原生图像
     * @param dataURL - 包含图像数据的 data URL
     * @returns 创建的原生图像
     */
    function createFromDataURL(dataURL: string): NativeImage;

  }
}