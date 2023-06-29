'use client'

import { Global } from '@emotion/react'
import { globalStyles } from './globalStyles'

interface IRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <Global styles={globalStyles} />
        {children}
      </body>
    </html>
  )
}
