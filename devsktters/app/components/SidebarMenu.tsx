import React from 'react'

function SidebarMenu() {
  return (
    <ul className="DESKTOP-MENU hidden my-10 lg:flex flex-col">
        <li><a href="/about">😎About</a></li>
        <li><a href="/portfolio">🚀Portfolio</a></li>
        <li><a href="/contact">🐥Contact</a></li>
    </ul>
  )
}

export default SidebarMenu