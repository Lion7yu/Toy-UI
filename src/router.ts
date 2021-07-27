import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/Switch/SwitchDemo.vue";
import ButtonDemo from "./components/Button/ButtonDemo.vue";
import DialogDemo from "./components/Dialog/DialogDemo.vue";
import TabsDemo from "./components/Tabs/TabsDemo.vue";
import InputDemo from "./components/Input/InputDemo.vue";
import GridDemo from "./components/Grid/GridDemo.vue"
import LayoutDemo from "./components/Layout/LayoutDemo.vue"
import ToastDemo from "./components/Toast/ToastDemo.vue"
import PopoverDemo from "./components/Popover/PopoverDemo.vue"
import CollapseDemo from "./components/Collapse/CollapseDemo.vue"
import CheckboxDemo from "./components/Checkbox/CheckboxDemo.vue"
import SelectorDemo from "./components/Selector/SelectorDemo.vue"


import { h } from 'vue';
import Markdown from './components/Markdown/Markdown.vue';
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'
const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "input",component: InputDemo},
        { path: "grid",component: GridDemo},
        { path: "layout",component: LayoutDemo},
        { path: "toast",component: ToastDemo},
        { path: "popover",component: PopoverDemo},
        { path: "collapse",component: CollapseDemo},
        { path: "selector",component: SelectorDemo},
        { path: "checkbox",component: CheckboxDemo},
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});
