'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from '@/components/ui/icons'

export function Header() {
  const [searchFocus, setSearchFocus] = useState(false)

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-border px-10 py-3 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-10">
            <img src="/Vector.png" alt="loki logo" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em]">loki</h2>
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-3 sm:gap-6 items-center">
        <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          <a href="/" className="transition-colors hover:text-foreground">Home</a>
          <a href="/docs" className="transition-colors hover:text-foreground">Docs</a>
          <a href="/install" className="transition-colors hover:text-foreground">Install</a>
        </nav>
      </div>
    </header>
  )
}