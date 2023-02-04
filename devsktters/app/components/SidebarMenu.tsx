import React from 'react'
import { menuItems } from './menuItems'
import MenuList from './MenuList'


function SidebarMenu() {
  return  <MenuList items={menuItems}/>
}

export default SidebarMenu