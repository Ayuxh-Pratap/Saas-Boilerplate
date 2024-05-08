import { Button } from '@/components/ui/button'
import React from 'react'
import { ModeToggle } from '@/components/ThemeToggle'

export default function page() {
  return (
    <div>
      <Button>
        <a href="/auth">click me</a>
      </Button>
      <ModeToggle />
    </div>
  )
}
