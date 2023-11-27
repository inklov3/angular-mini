import {MenuItem} from "src/entity/type";

const menu: MenuItem[] = [
  {
    id: 'home',
    name: '首页',
    link: '/home',
    icon: 'fa-home'
  },
  {
    id: 'document',
    name: '文档',
    link: '/pages/getting-started',
    icon: 'fa-book'
  },
  {
    id: 'application',
    name: '应用',
    link: '/pages/getting-started',
    icon: 'fa-cube'
  },
  {
    id: 'laboratory',
    name: '实验室',
    link: '/pages/getting-started',
    icon: 'fa-wrench'
  },

]

export default function () {
  return menu
}
