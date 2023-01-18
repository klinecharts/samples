import React from 'react'

export interface LayoutProps {
  title: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div
      className="k-line-chart-container">
      <h3
        className="k-line-chart-title">{title}</h3>
      {children}
    </div>
  )
}


export default Layout