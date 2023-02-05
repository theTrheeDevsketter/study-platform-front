import React from 'react'
import { menuItems, socialItems, tagsItems } from './itemsSidebar'
import MenuList from './MenuList'
import SocialMedia from './SocialMedia'
import TagList from './TagList'


function SidebarMenu() {
  return (
    <div>
      <MenuList items={menuItems}/>
      <TagList items = {tagsItems}/>
      <SocialMedia items = {socialItems}/>
    </div>

  )
}

export default SidebarMenu