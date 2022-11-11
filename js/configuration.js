/**
 * @doc configuration.js
 * @desc  docsify配置文件
 * @author 2783779285@qq.com
 * @date 2022-10-11
 */

window.$docsify = {
  name: '',
  repo: '',
  loadSidebar: false,
  coverpage: false,
  loadNavbar: true,
  search: 'auto', // 默认值
  search: [
    '/',            // => /README.md
    '/guide',       // => /guide.md
    '/get-started', // => /get-started.md
    '/zh-cn/',      // => /zh-cn/README.md
  ],

  // 完整配置参数
  search: {
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
    paths: [], // or 'auto'
    placeholder: 'Type to search',

    // 支持本地化
    placeholder: {
      '/zh-cn/': '搜索',
      '/': '请输入搜索内容'
    },

    noData: 'No Results!',

    // 支持本地化
    noData: {
      '/zh-cn/': '找不到结果',
      '/': 'No Results'
    },

    // 搜索标题的最大层级, 1 - 6
    depth: 2,

    hideOtherSidebarContent: false, // 是否隐藏其他侧边栏内容

    // 避免搜索索引冲突
    // 同一域下的多个网站之间
    namespace: 'website-1',

    // 使用不同的索引作为路径前缀（namespaces）
    // 注意：仅适用于 paths: 'auto' 模式
    //
    // 初始化索引时，我们从侧边栏查找第一个路径
    // 如果它与列表中的前缀匹配，我们将切换到相应的索引
    pathNamespaces: ['/zh-cn', '/ru-ru', '/ru-ru/v1'],

    // 您可以提供一个正则表达式来匹配前缀。在这种情况下，
    // 匹配到的字符串将被用来识别索引
    pathNamespaces: /^(\/(zh-cn|ru-ru))?(\/(v1|v2))?/
  },
  plugins: [
    /*来必力评论*/
    // function (hook, vm) {
    //   comments(hook, vm);
    // },
  ],


  // 文档化选项卡
  tabs: {
    persist: true,      // 确定在页面刷新/重新访问后是否还原选项卡选择
    sync: true,      // 确定选项卡选择是否将在具有匹配标签的选项卡之间同步
    theme: 'classic', // 主题
    tabComments: true,      // 确定是否可以使用选项卡注释定义选项卡集中的选项卡
    tabHeadings: true       // 确定是否可以使用标题 + 粗体标记来定义选项卡集中的选项卡
  },



}