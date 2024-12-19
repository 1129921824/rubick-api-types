declare module BrowserWindow {
  /**
   * 定义 Web 偏好设置接口
   */
  interface WebPreferences {
    /**
     * 是否启用开发者工具
     */
    devTools?: boolean;
    /**
     * 预加载脚本的路径
     */
    preload?: string;
    /**
     * 窗口的缩放因子
     */
    zoomFactor: number;
    /**
     * 允许添加其他任意属性
     */
    [key: string]: any;
  }

  /**
   * 定义初始化选项接口
   */
  interface InitOptions {
    /**
     * 窗口的宽度
     */
    width?: number;
    /**
     * 窗口的高度
     */
    height?: number;
    /**
     * 窗口的 Web 偏好设置
     */
    webPreferences: WebPreferences;
    /**
     * 是否显示窗口
     */
    show?: boolean;
    /**
     * 窗口的标题
     */
    title?: string;
    /**
     * 窗口的 x 坐标
     */
    x?: number;
    /**
     * 窗口的 y 坐标
     */
    y?: number;
    /**
     * 是否居中显示窗口
     */
    center?: boolean;
    /**
     * 是否可调整窗口大小
     */
    resizable?: boolean;
    /**
     * 是否全屏显示窗口
     */
    fullscreen?: boolean;
    /**
     * 是否可全屏显示窗口
     */
    fullscreenable?: boolean;
    /**
     * 是否跳过任务栏
     */
    skipTaskbar?: true;
    /**
     * 是否可关闭窗口
     */
    closable?: boolean;
    /**
     * 是否有边框
     */
    frame?: boolean;
    /**
     * 是否始终在最顶层
     */
    alwayOnTop?: boolean;
    /**
     * 允许添加其他任意属性
     */
    [key: string]: any;
  }

  /**
   * 定义 NativeImage 接口
   */
  interface NativeImage {
    /**
     * 将图像转换为 PNG 格式的 Uint8Array
     * @param options - 可选参数，包含 scaleFactor 属性
     * @returns 转换后的 PNG 数据
     */
    toPng: (options?: { scaleFactor?: number }) => Uint8Array;
    /**
     * 将图像转换为 JPEG 格式的 Uint8Array
     * @param options - 可选参数，包含 quality 属性
     * @returns 转换后的 JPEG 数据
     */
    toJPEG: (options?: { quality?: number }) => Uint8Array;
    /**
     * 检查图像是否为空
     * @returns 如果图像为空，则返回 true，否则返回 false
     */
    isEmpty: () => boolean;
    /**
     * 允许添加其他任意属性
     */
    [key: string]: any;
  }

  /**
   * 定义 PrinterSync 接口
   */
  interface PrinterSync {
    /**
     * 打印机的描述
     */
    description: string;
    /**
     * 打印机的显示名称
     */
    displayName: string;
    /**
     * 是否为默认打印机
     */
    isDefault: boolean;
    /**
     * 打印机的状态
     */
    status: number;
    /**
     * 打印机的其他选项
     */
    options?: {
      /**
       * 打印机位置
       */
      'printer-location'?: string;
      /**
       * 打印机型号
       */
      'printer-make-and-model'?: string;
      /**
       * 系统驱动信息
       */
      'system_driverinfo'?: string;
    };
  }

  /**
   * 定义 WebRTCIPHandlingPolicy 类型
   */
  type WebRTCIPHandlingPolicy =
      | 'default'
      | 'default_public_interface_only'
      | 'default_public_and_private_interfaces'
      | 'disable_non_proxied_udp';

  /**
   * 定义 WebContents 接口
   */
  interface WebContents {
    /**
     * Web 内容的 ID
     */
    id: number;
    /**
     * 捕获页面并返回 NativeImage
     * @returns 捕获的页面图像
     */
    capturePage: () => Promise<NativeImage>;
    /**
     * 关闭开发者工具
     */
    closeDevTools: () => void;
    /**
     * 复制选中的内容
     */
    copy: () => void;
    /**
     * 复制指定坐标处的图像
     * @param x - x 坐标
     * @param y - y 坐标
     */
    copyImageAt: (x: number, y: number) => void;
    /**
     * 剪切选中的内容
     */
    cut: () => void;
    /**
     * @deprecated
     */
    decrementCapturerCount: () => any;
    /**
     * 删除选中的内容
     */
    delete: () => void;
    /**
     * 禁用设备模拟
     */
    disableDeviceEmulation: () => void;
    /**
     * 启用设备模拟
     */
    enableDeviceEmulation: () => void;
    /**
     * 执行 JavaScript 代码并返回结果
     * @param code - 要执行的 JavaScript 代码
     * @param userGesture - 是否是用户手势
     * @returns 执行结果
     */
    executeJavaScript: <T>(code: string, userGesture?: boolean) => Promise<T>;
    /**
     * 在页面中查找文本
     * @param text - 要查找的文本
     * @param options - 查找选项
     * @returns 查找结果
     */
    findInPage: (text: string, options?: {
      forward?: boolean;
      findNext?: boolean;
      matchCase?: boolean;
    }) => number;
    /**
     * 使窗口获得焦点
     */
    focus: () => void;
    /**
     * 获取后台节流状态
     * @returns 后台节流状态
     */
    getBackgroundThrottling: () => boolean;
    /**
     * 获取帧率
     * @returns 帧率
     */
    getFrameRate: () => number;
    /**
     * 获取操作系统进程 ID
     * @returns 进程 ID
     */
    getOSProcessId: () => number;
    /**
     * 获取打印机列表
     * @returns 打印机列表
     */
    getPrinters: () => PrinterSync[];
    /**
     * 获取进程 ID
     * @returns 进程 ID
     */
    getProcessId: () => number;
    /**
     * 获取用户代理字符串
     * @returns 用户代理字符串
     */
    getUserAgent: () => string;
    /**
     * 获取 WebRTC IP 处理策略
     * @returns WebRTC IP 处理策略
     */
    getWebRTCIPHandlingPolicy: () => WebRTCIPHandlingPolicy;
    /**
     * 获取缩放因子
     * @returns 缩放因子
     */
    getZoomFactor: () => number;
    /**
     * @deprecated
     */
    incrementCapturerCount: () => any;
    /**
     * 插入 CSS 样式
     * @param css - 要插入的 CSS 样式
     * @param options - 插入选项
     * @returns 插入结果
     */
    insertCSS: (css: string, options?: {
      /**
       * @default 'author'
       */
      cssOrigin?: 'user' | 'author';
    }) => Promise<string>;
    /**
     * 插入文本
     * @param text - 要插入的文本
     * @returns 插入结果
     */
    insertText: (text: string) => Promise<void>;
    /**
     * 使页面无效
     */
    invalidate: () => void;
    /**
     * 检查音频是否静音
     * @returns 如果音频静音，则返回 true，否则返回 false
     */
    isAudioMuted: () => boolean;

    /**
     * 检查当前页面是否正在被捕获
     * @returns 如果页面正在被捕获，则返回 true，否则返回 false
     */
    isBeingCaptured: () => boolean;

    /**
     * 检查当前页面是否崩溃
     * @returns 如果页面崩溃，则返回 true，否则返回 false
     */
    isCrashed: () => boolean;

    /**
     * 检查当前页面是否正在播放音频
     * @returns 如果页面正在播放音频，则返回 true，否则返回 false
     */
    isCurrentlyAudible: () => boolean;

    /**
     * 检查当前页面是否已被销毁
     * @returns 如果页面已被销毁，则返回 true，否则返回 false
     */
    isDestroyed: () => boolean;

    /**
     * 检查开发者工具是否获得焦点
     * @returns 如果开发者工具获得焦点，则返回 true，否则返回 false
     */
    isDevToolsFocused: () => boolean;

    /**
     * 检查开发者工具是否已打开
     * @returns 如果开发者工具已打开，则返回 true，否则返回 false
     */
    isDevToolsOpened: () => boolean;

    /**
     * 检查当前页面是否获得焦点
     * @returns 如果页面获得焦点，则返回 true，否则返回 false
     */
    isFocused: () => boolean;

    /**
     * 检查当前页面是否正在加载
     * @returns 如果页面正在加载，则返回 true，否则返回 false
     */
    isLoading: () => boolean;

    /**
     * 检查当前页面的主框架是否正在加载
     * @returns 如果主框架正在加载，则返回 true，否则返回 false
     */
    isLoadingMainFrame: () => boolean;

    /**
     * 检查当前页面是否处于离屏状态
     * @returns 如果页面处于离屏状态，则返回 true，否则返回 false
     */
    isOffscreen: () => boolean;

    /**
     * 开始绘制页面
     * @returns 无返回值
     */
    isPainting: () => void;

    /**
     * 检查当前页面是否正在等待响应
     * @returns 如果页面正在等待响应，则返回 true，否则返回 false
     */
    isWaitingForResponse: () => boolean;

    /**
     * 打开开发者工具
     * @param options - 开发者工具的选项，包括模式、是否激活、标题等
     * @returns 无返回值
     */
    openDevTools: (options?: {
      mode: 'left' | 'right' | 'bottom' | 'undocked' | 'detach';
      activate?: boolean;
      title?: string;
    }) => void;

    /**
     * 粘贴内容到页面
     * @returns 无返回值
     */
    paste: () => void;

    /**
     * 粘贴内容并匹配样式
     * @returns 无返回值
     */
    pasteAndMatchStyle: () => void;

    /**
     * 打印页面
     * @param options - 打印选项
     * @param callback - 打印回调函数，用于处理打印结果
     * @returns 无返回值
     */
    print: (options?: Record<string, any>, callback?: (success: boolean, errorType?: string) => void) => void;

    /**
     * 将页面打印为 PDF
     * @param options - 打印为 PDF 的选项
     * @returns 包含 PDF 数据的 Promise
     */
    printToPDF: (options: Record<string, any>) => Promise<Uint8Array>;

    /**
     * 重做操作
     * @returns 无返回值
     */
    redo: () => void;

    /**
     * 移除插入的 CSS 样式
     * @param key - 要移除的 CSS 样式的键
     * @returns 移除结果的 Promise
     */
    removeInsertedCSS: (key: string) => Promise<void>;

    /**
     * 替换页面中的文本
     * @param text - 要替换的文本
     * @returns 无返回值
     */
    replace: (text: string) => void;

    /**
     * 替换页面中的拼写错误
     * @param text - 要替换的拼写错误文本
     * @returns 无返回值
     */
    replaceMisspelling: (text: string) => void;

    /**
     * 保存页面
     * @param fullPath - 保存的完整路径
     * @param saveType - 保存类型，包括仅 HTML、完整 HTML、MHTML
     * @returns 保存结果的 Promise
     */
    savePage: (fullPath: string, saveType: 'HTMLOnly' | 'HTMLComplete' | 'MHTML') => Promise<void>;

    /**
     * 全选页面内容
     * @returns 无返回值
     */
    selectAll: () => void;

    /**
     * 发送输入事件到页面
     * @param e - 要发送的输入事件
     * @returns 无返回值
     */
    sendInputEvent: (e: any) => void;

    /**
     * 设置页面音频是否静音
     * @param muted - 是否静音
     * @returns 无返回值
     */
    setAudioMuted: (muted: boolean) => void;

    /**
     * 设置页面的后台节流状态
     * @param allowed - 是否允许后台节流
     * @returns 无返回值
     */
    setBackgroundThrottling: (allowed: boolean) => void;

    /**
     * 设置页面的帧率
     * @param fps - 帧率
     * @returns 无返回值
     */
    setFrameRate: (fps: number) => void;

    /**
     * 设置页面是否忽略菜单快捷键
     * @param ignore - 是否忽略
     * @returns 无返回值
     */
    setIgnoreMenuShortcuts: (ignore: boolean) => void;

    /**
     * 设置页面的用户代理字符串
     * @param userAgent - 用户代理字符串
     * @returns 无返回值
     */
    setUserAgent: (userAgent: string) => void;

    /**
     * 设置页面的 WebRTC IP 处理策略
     * @param policy - WebRTC IP 处理策略
     * @returns 无返回值
     */
    setWebRTCIPHandlingPolicy: (policy: WebRTCIPHandlingPolicy) => void;

    /**
     * 设置页面的缩放因子
     * @param factor - 缩放因子
     * @returns 无返回值
     */
    setZoomFactor: (factor: number) => void;

    /**
     * 开始绘制页面
     * @returns 无返回值
     */
    startPainting: () => void;

    /**
     * 停止在页面中查找文本
     * @param action - 停止查找的动作，包括清除选择、保持选择、激活选择
     * @returns 无返回值
     */
    stopFindInPage: (action: 'clearSelection' | 'keepSelection' | 'activateSelection') => void;

    /**
     * 停止绘制页面
     * @returns 无返回值
     */
    stopPainting: () => void;

    /**
     * 拍摄页面的堆快照
     * @param filePath - 快照文件的路径
     * @returns 拍摄结果的 Promise
     */
    takeHeapSnapshot: (filePath: string) => Promise<void>;

    /**
     * 切换开发者工具的显示状态
     * @returns 无返回值
     */
    toggleDevTools: () => void;

    /**
     * 撤销操作
     * @returns 无返回值
     */
    undo: () => void;

    /**
     * 取消选择页面内容
     * @returns 无返回值
     */
    unselect: () => void;

    /**
     * 允许添加其他任意属性
     */
    [key: string]: any;
  }

  /**
   * 表示一个矩形的接口。
   *
   * @interface Rectangle
   * @property {number} x - 矩形左上角的 x 坐标。
   * @property {number} y - 矩形左上角的 y 坐标。
   * @property {number} width - 矩形的宽度。
   * @property {number} height - 矩形的高度。
   */
  interface Rectangle {
    /**
     * 矩形左上角的 x 坐标。
     */
    x: number;

    /**
     * 矩形左上角的 y 坐标。
     */
    y: number;

    /**
     * 矩形的宽度。
     */
    width: number;

    /**
     * 矩形的高度。
     */
    height: number;
  }


  /**
   * 表示一个窗口实例的接口。
   *
   * @interface WindowInstance
   * @property {number} id - 窗口实例的唯一标识符。
   * @property {WebContents} webContents - 窗口实例的 Web 内容。
   * @property {() => void} show - 显示窗口实例的方法。
   * @property {() => void} hide - 隐藏窗口实例的方法。
   * @property {() => void} destory - 销毁窗口实例的方法。
   * @property {() => void} close - 关闭窗口实例的方法。
   * @property {() => boolean} isFocused - 检查窗口实例是否获得焦点的方法。
   * @property {() => boolean} isDestroyed - 检查窗口实例是否已被销毁的方法。
   * @property {(resizable: boolean) => void} setResizable - 设置窗口实例是否可调整大小的方法。
   * @property {(width: number, height: number) => void} setSize - 设置窗口实例大小的方法。
   * @property {() => [width: number, height: number]} getSize - 获取窗口实例大小的方法。
   * @property {() => boolean} isVisible - 检查窗口实例是否可见的方法。
   * @property {() => void} maximize - 最大化窗口实例的方法。
   * @property {() => void} unmaximize - 取消最大化窗口实例的方法。
   * @property {() => boolean} isMaximized - 检查窗口实例是否已最大化的方法。
   * @property {() => void} minimize - 最小化窗口实例的方法。
   * @property {() => void} restore - 恢复窗口实例到正常状态的方法。
   * @property {() => boolean} isMinimized - 检查窗口实例是否已最小化的方法。
   * @property {(flag: boolean) => void} setFullScreen - 设置窗口实例是否全屏的方法。
   * @property {() => boolean} isFullScreen - 检查窗口实例是否全屏的方法。
   * @property {() => boolean} isNormal - 检查窗口实例是否处于正常状态的方法。
   * @property {(aspectiRotio: number) => void} setAspectRatio - 设置窗口实例宽高比的方法。
   * @property {(backgroundColor: string) => void} setBackgroundColor - 设置窗口实例背景颜色的方法。
   * @property {() => Rectangle} getBounds - 获取窗口实例边界的方法。
   * @property {() => string} getBackgroundColor - 获取窗口实例背景颜色的方法。
   * @property {(bounds: Rectangle) => void} setContentBounds - 设置窗口实例内容边界的方法。
   * @property {() => Rectangle} getContentBounds - 获取窗口实例内容边界的方法。
   * @property {() => Rectangle} getNormalBounds - 获取窗口实例正常边界的方法。
   * @property {(enable: boolean) => void} setEnabled - 设置窗口实例是否启用的方法。
   * @property {() => boolean} isEnabled - 检查窗口实例是否启用的方法。
   * @property {(width: number, height: number) => void} setContentSize - 设置窗口实例内容大小的方法。
   * @property {() => [width: number, height: number]} getContentSize - 获取窗口实例内容大小的方法。
   * @property {(width: number, height: number) => void} setMinimumSize - 设置窗口实例最小大小的方法。
   * @property {() => [width: number, height: number]} getMinimumSize - 获取窗口实例最小大小的方法。
   * @property {(width: number, height: number) => void} setMaximumSize - 设置窗口实例最大大小的方法。
   * @property {() => [width: number, height: number]} getMaximumSize - 获取窗口实例最大大小的方法。
   * @property {() => boolean} isResizable - 检查窗口实例是否可调整大小的方法。
   * @property {(fullscreenable: boolean) => void} setFullScreenable - 设置窗口实例是否可全屏的方法。
   * @property {() => boolean} isFullScreenable - 检查窗口实例是否可全屏的方法。
   * @property {(closable: boolean) => void} setClosable - 设置窗口实例是否可关闭的方法。
   * @property {() => boolean} isClosable - 检查窗口实例是否可关闭的方法。
   * @property {(flag: boolean) => void} setAlwaysOnTop - 设置窗口实例是否始终置顶的方法。
   * @property {() => boolean} isAlwaysOnTop - 检查窗口实例是否始终置顶的方法。
   * @property {() => void} moveTop - 将窗口实例移动到最顶层的方法。
   * @property {(x: number, y: number) => void} setPosition - 设置窗口实例位置的方法。
   * @property {() => [x: number, y: number]} getPosition - 获取窗口实例位置的方法。
   * @property {(title: string) => void} setTitle - 设置窗口实例标题的方法。
   * @property {() => string} getTitle - 获取窗口实例标题的方法。
   * @property {(flag: boolean) => void} flashFrame - 闪烁窗口实例边框的方法。
   * @property {(flag: boolean) => void} setKiosk - 设置窗口实例是否为 kiosk 模式的方法。
   * @property {() => boolean} isKiosk - 检查窗口实例是否为 kiosk 模式的方法。
   * @property {() => void} focusOnWebView - 使窗口实例的 Web 视图获得焦点的方法。
   * @property {() => void} blurWebView - 使窗口实例的 Web 视图失去焦点的方法。
   * @property {(rect?: Rectangle, options?: { stayHidden?: boolean, stayAwake?: boolean }) => Promise<NativeImage>} capturePage - 捕获窗口实例页面的方法。
   * @property {() => void} reload - 重新加载窗口实例的方法。
   * @property {[key: string]: any} [key: string]: any - 允许添加其他任意属性。
   */
  interface WindowInstance {
    /**
     * 窗口实例的唯一标识符。
     */
    id: number;

    /**
     * 窗口实例的 Web 内容。
     */
    webContents: WebContents;

    /**
     * 显示窗口实例的方法。
     */
    show: () => void;

    /**
     * 隐藏窗口实例的方法。
     */
    hide: () => void;

    /**
     * 销毁窗口实例的方法。
     */
    destory: () => void;

    /**
     * 关闭窗口实例的方法。
     */
    close: () => void;

    /**
     * 检查窗口实例是否获得焦点的方法。
     */
    isFocused: () => boolean;

    /**
     * 检查窗口实例是否已被销毁的方法。
     */
    isDestroyed: () => boolean;

    /**
     * 设置窗口实例是否可调整大小的方法。
     */
    setResizable: (resizable: boolean) => void;

    /**
     * 设置窗口实例大小的方法。
     */
    setSize: (width: number, height: number) => void;

    /**
     * 获取窗口实例大小的方法。
     */
    getSize: () => [width: number, height: number];

    /**
     * 检查窗口实例是否可见的方法。
     */
    isVisible: () => boolean;

    /**
     * 最大化窗口实例的方法。
     */
    maximize: () => void;

    /**
     * 取消最大化窗口实例的方法。
     */
    unmaximize: () => void;

    /**
     * 检查窗口实例是否已最大化的方法。
     */
    isMaximized: () => boolean;

    /**
     * 最小化窗口实例的方法。
     */
    minimize: () => void;

    /**
     * 恢复窗口实例到正常状态的方法。
     */
    restore: () => void;

    /**
     * 检查窗口实例是否已最小化的方法。
     */
    isMinimized: () => boolean;

    /**
     * 设置窗口实例是否全屏的方法。
     */
    setFullScreen: (flag: boolean) => void;

    /**
     * 检查窗口实例是否全屏的方法。
     */
    isFullScreen: () => boolean;

    /**
     * 检查窗口实例是否处于正常状态的方法。
     */
    isNormal: () => boolean;

    /**
     * 设置窗口的宽高比
     * @param aspectiRotio - 宽高比，例如 16:9 的宽高比可以表示为 16/9
     */
    setAspectRatio: (aspectiRotio: number) => void;

    /**
     * 设置窗口的背景颜色
     * @param backgroundColor - 背景颜色，例如 '#ffffff' 表示白色
     */
    setBackgroundColor: (backgroundColor: string) => void;

    /**
     * 获取窗口的边界矩形
     * @returns Rectangle - 窗口的边界矩形
     */
    getBounds: () => Rectangle;

    /**
     * 获取窗口的背景颜色
     * @returns string - 窗口的背景颜色
     */
    getBackgroundColor: () => string;

    /**
     * 设置窗口内容的边界矩形
     * @param bounds - 内容的边界矩形
     */
    setContentBounds: (bounds: Rectangle) => void;

    /**
     * 获取窗口内容的边界矩形
     * @returns Rectangle - 窗口内容的边界矩形
     */
    getContentBounds: () => Rectangle;

    /**
     * 获取窗口的正常边界矩形
     * @returns Rectangle - 窗口的正常边界矩形
     */
    getNormalBounds: () => Rectangle;

    /**
     * 设置窗口是否启用
     * @param enable - 是否启用窗口
     */
    setEnabled: (enable: boolean) => void;

    /**
     * 检查窗口是否启用
     * @returns boolean - 如果窗口启用则返回 true，否则返回 false
     */
    isEnabled: () => boolean;

    /**
     * 设置窗口内容的大小
     * @param width - 内容的宽度
     * @param height - 内容的高度
     */
    setContentSize: (width: number, height: number) => void;

    /**
     * 获取窗口内容的大小
     * @returns [width: number, height: number] - 窗口内容的大小
     */
    getContentSize: () => [width: number, height: number];

    /**
     * 设置窗口的最小大小
     * @param width - 最小宽度
     * @param height - 最小高度
     */
    setMinimumSize: (width: number, height: number) => void;

    /**
     * 获取窗口的最小大小
     * @returns [width: number, height: number] - 窗口的最小大小
     */
    getMinimumSize: () => [width: number, height: number];

    /**
     * 设置窗口的最大大小
     * @param width - 最大宽度
     * @param height - 最大高度
     */
    setMaximumSize: (width: number, height: number) => void;

    /**
     * 获取窗口的最大大小
     * @returns [width: number, height: number] - 窗口的最大大小
     */
    getMaximumSize: () => [width: number, height: number];

    /**
     * 检查窗口是否可调整大小
     * @returns boolean - 如果窗口可调整大小则返回 true，否则返回 false
     */
    isResizable: () => boolean;

    /**
     * 设置窗口是否可全屏
     * @param fullscreenable - 是否可全屏
     */
    setFullScreenable: (fullscreenable: boolean) => void;

    /**
     * 检查窗口是否可全屏
     * @returns boolean - 如果窗口可全屏则返回 true，否则返回 false
     */
    isFullScreenable: () => boolean;

    /**
     * 设置窗口是否可关闭
     * @param closable - 是否可关闭
     */
    setClosable: (closable: boolean) => void;

    /**
     * 检查窗口是否可关闭
     * @returns boolean - 如果窗口可关闭则返回 true，否则返回 false
     */
    isClosable: () => boolean;

    /**
     * 设置窗口是否始终置顶
     * @param flag - 是否始终置顶
     */
    setAlwaysOnTop: (flag: boolean) => void;

    /**
     * 检查窗口是否始终置顶
     * @returns boolean - 如果窗口始终置顶则返回 true，否则返回 false
     */
    isAlwaysOnTop: () => boolean;

    /**
     * 将窗口移动到最顶层
     */
    moveTop: () => void;

    /**
     * 设置窗口的位置
     * @param x - 窗口的 x 坐标
     * @param y - 窗口的 y 坐标
     */
    setPosition: (x: number, y: number) => void;

    /**
     * 获取窗口的位置
     * @returns [x: number, y: number] - 窗口的位置
     */
    getPosition: () => [x: number, y: number];

    /**
     * 设置窗口的标题
     * @param title - 窗口的标题
     */
    setTitle: (title: string) => void;

    /**
     * 获取窗口的标题
     * @returns string - 窗口的标题
     */
    getTitle: () => string;

    /**
     * 闪烁窗口的边框
     * @param flag - 是否闪烁边框
     */
    flashFrame: (flag: boolean) => void;

    /**
     * 设置窗口是否为 kiosk 模式
     * @param flag - 是否为 kiosk 模式
     */
    setKiosk: (flag: boolean) => void;

    /**
     * 检查窗口是否为 kiosk 模式
     * @returns boolean - 如果窗口为 kiosk 模式则返回 true，否则返回 false
     */
    isKiosk: () => boolean;

    /**
     * 使窗口的 Web 视图获得焦点
     */
    focusOnWebView: () => void;

    /**
     * 使窗口的 Web 视图失去焦点
     */
    blurWebView: () => void;

    /**
     * 捕获窗口页面的图像
     * @param rect - 要捕获的矩形区域
     * @param options - 捕获选项
     * @returns Promise<NativeImage> - 捕获的图像
     */
    capturePage: (rect?: Rectangle, options?: {
      stayHidden?: boolean;
      stayAwake?: boolean;
    }) => Promise<NativeImage>;

    /**
     * 重新加载窗口
     */
    reload: () => void;

    /**
     * 允许添加其他任意属性
     */
    [key: string]: any;

  }
}

