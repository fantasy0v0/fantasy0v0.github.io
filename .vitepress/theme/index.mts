import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== undefined) {
      const before_s_div = document.getElementById("gitalk-page-container") // 获取页面评论组件DOM节点
      if (before_s_div) {
        document.body.removeChild(before_s_div)
      }
      const s_div = document.createElement("div"); // 创建节点
      s_div.setAttribute("id", "gitalk-page-container"); // 设置id
      document.body.appendChild(s_div); // querySelector的节点可自己根据自己想加载的地方设置
      const gitment = new Gitalk({
        id: document.title, // 可选，推荐设置为页面标题，因为会作为标签传给Github issues，且issues标签有长度限制。
        owner: "fantasy0v0", // GitHub repository 所有者
        repo: "fantasy0v0.github.io", // GitHub repository
        clientID: "076cdb78f96e6bef022f", // 自己的clientID
        clientSecret: "c8d22eef35bfed4d265e729a2e5c0a50c6742aa8", // 自己的clientSecret
        admin: ["fantasy0v0"], // GitHub repository 所有者
        labels: ["Gitalk"], // GitHub issue 的标签
        createIssueManually: false, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
      });
      gitment.render("gitalk-page-container");
    }
  }
} satisfies Theme