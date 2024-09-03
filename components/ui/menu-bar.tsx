'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const categories = [
  { name: 'All', subcategories: [] },
  { name: 'Other', subcategories: [] },
  { name: 'Design', subcategories: ['UX Design', 'Graphic Design', 'Web Design'] },
  { name: 'Drawing & Painting', subcategories: ['Digital Art', 'Traditional Art', 'Sketching'] },
  { name: 'Software Development', subcategories: ['Web Development', 'Mobile Apps', 'Game Development'] },
  { name: 'Self Improvement', subcategories: ['Productivity', 'Health', 'Personal Finance'] },
  { name: 'More', subcategories: ['Photography', 'Music', 'Writing'] },
]

export function MenuBar() {
  return (
    <nav className="flex space-x-4 overflow-x-auto pb-2">
      {categories.map((category) => (
        <DropdownMenu.Root key={category.name}>
          <DropdownMenu.Trigger asChild>
            <Button 
              variant="ghost" 
              className="whitespace-nowrap hover:bg-gray-100 focus:ring-0 focus:ring-offset-0"
            >
              {category.name}
            </Button>
          </DropdownMenu.Trigger>
          {category.subcategories.length > 0 && (
            <DropdownMenu.Content 
              className="min-w-[8rem] bg-white rounded-md shadow-lg p-1 z-50"
              sideOffset={5}
            >
              {category.subcategories.map((subcategory) => (
                <DropdownMenu.Item
                  key={subcategory}
                  className="text-sm text-gray-700 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer outline-none"
                >
                  {subcategory}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          )}
        </DropdownMenu.Root>
      ))}
    </nav>
  )
}