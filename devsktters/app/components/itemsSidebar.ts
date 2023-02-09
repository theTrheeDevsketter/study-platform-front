import { listItem } from "./MenuList";
import { socialItem } from "./SocialMedia";
import { tagItem } from "./TagList";

export const menuItems: listItem[] = [
    {
        url:'/about',
        title:'About',
        icon: '😎'
    },
    {
        url:'/contact',
        title:'Contact',
        icon: '☎️'
    },
    {
        url:'/faq',
        title:'FAQ',
        icon: '❓'
    },
]

export const tagsItems: tagItem[] = [
    {
        title:'Tags',
        icon: '🔎'
    },
]

export const socialItems: socialItem[] = [
    {
        url:'',
        title:'Twitter',
        icon: '🔎'
    },
    {
        url:'',
        title:'Facebook',
        icon: '🔎'
    },
]


