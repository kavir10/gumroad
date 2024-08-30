import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Search } from 'lucide-react'

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[800px]">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">gumroad</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-8 pr-4" placeholder="Search products" />
          </div>
          <Button variant="outline">Library</Button>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">RECOMMENDED</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            {[
              { name: 'MacGPT: AI Assistant for Mac', price: 9 },
              { name: 'Humaams: Diverse Human Illustrations', price: 20 },
              { name: 'CodeWizard: AI Coding Companion', price: 15 },
              { name: 'DesignMaster: UI/UX Toolkit', price: 25 },
            ].map((product, i) => (
              <Card key={i} className="w-[calc(66.66%-0.5rem)] flex-shrink-0">
                <CardContent className="p-0">
                  <div className="bg-gray-200 h-48"></div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <div className="flex-1 min-h-[3rem]">
                    <h3 className="font-semibold text-sm leading-tight">{product.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">${product.price}</p>
                  </div>
                  <div className="flex items-center ml-2">
                    <span className="mr-1">4.5</span>
                    <span>★</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {[
        {
          title: 'TOP PRODUCTS IN 3D',
          stats: '16K creators, 93K products, 21M sales',
          products: ['3D Character Creator', 'Architectural Visualization Kit', 'Low Poly Asset Pack', 'Blender Addon Suite', 'Procedural Texture Generator', 'VR Environment Builder']
        },
        {
          title: 'TOP PRODUCTS IN DESIGN',
          stats: '32K creators, 112K products, 27M sales',
          products: ['UI/UX Design System', 'Logo Creation Toolkit', 'Photoshop Action Bundle', 'Icon Library Pro', 'Typography Masterclass', 'Branding Template Kit']
        },
        {
          title: 'TOP PRODUCTS IN DRAWING & PAINTING',
          stats: '10K creators, 52K products, 19M sales',
          products: ['Digital Painting Brushes', 'Character Design Course', 'Procreate Brush Pack', 'Watercolor Texture Set', 'Comic Art Toolkit', 'Portrait Drawing Guide']
        },
        {
          title: 'TOP PRODUCTS IN SOFTWARE DEVELOPMENT',
          stats: '8K creators, 23K products, 15M sales',
          products: ['React Component Library', 'Python Machine Learning Course', 'Full-Stack Web Dev Bootcamp', 'Mobile App Template', 'Game Dev Asset Pack', 'DevOps Automation Scripts']
        }
      ].map((category, index) => (
        <section key={index} className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{category.title}</h2>
            <Button variant="link">SEE ALL</Button>
          </div>
          <p className="text-sm text-gray-500 mb-4">{category.stats}</p>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-4">
              {category.products.map((product, i) => (
                <Card key={i} className="w-[calc(33.33%-0.75rem)] flex-shrink-0">
                  <CardContent className="p-0">
                    <div className="bg-gray-200 h-36"></div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-4">
                    <div className="flex-1 min-h-[3rem]">
                      <h3 className="font-semibold text-sm leading-tight">{product}</h3>
                      <p className="text-sm text-gray-500 mt-1">${Math.floor(Math.random() * 91) + 10}</p>
                    </div>
                    <div className="flex items-center ml-2">
                      <span className="mr-1">4.5</span>
                      <span>★</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">TOP CATEGORIES</h2>
          <Button variant="link">SEE ALL</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          {['Education', 'Books', 'Comics', 'Music', 'Games', 'Photography'].map((category, index) => (
            <Button key={index} variant="outline" className="flex-1">
              {category}
            </Button>
          ))}
        </div>
      </section>
    </div>
  )
}