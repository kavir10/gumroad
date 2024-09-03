import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ui/product-card"
import { Search } from 'lucide-react'
import { MenuBar } from "@/components/ui/menu-bar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// Define a type for our product structure
type Product = {
  name: string;
  price: number;
  image: string;
  creator: {
    name: string;
    avatar: string;
    link: string;
  };
  rating: {
    value: number;
    count: number;
  };
}

// Blank gray avatar SVG
const blankAvatar = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23808080' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M5.52 19.346a9.975 9.975 0 0 1 12.96 0'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E`;

// Helper function to create a product with default values and static random ratings
function createProduct(name: string, price: number, creatorName: string, ratingValue: number, ratingCount: number): Product {
  return {
    name,
    price,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23cccccc"/%3E%3C/svg%3E',
    creator: {
      name: creatorName,
      avatar: blankAvatar,
      link: '#'
    },
    rating: {
      value: ratingValue,
      count: ratingCount
    }
  }
}

// Add this helper function to create recently viewed products
function createRecentlyViewedProduct(name: string, price: number, creatorName: string, ratingValue: number, ratingCount: number): Product & { recentlyViewed: boolean } {
  return {
    ...createProduct(name, price, creatorName, ratingValue, ratingCount),
    recentlyViewed: true
  }
}

// Update this helper function to remove the favoriteCreator property
function createFavoriteCreatorProduct(name: string, price: number, creatorName: string, ratingValue: number, ratingCount: number): Product {
  return createProduct(name, price, creatorName, ratingValue, ratingCount)
}

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[1200px]">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold">gumroad</h1>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <div className="relative flex-grow sm:w-80">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-8 pr-4 w-full" placeholder="Search products" />
          </div>
          <Button variant="outline">Library</Button>
        </div>
      </header>

      <div className="relative z-20">
        <MenuBar />
      </div>

      <section className="mb-12 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">RECOMMENDED</h2>
          <Button variant="link">SEE ALL</Button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4">
            {[
              createProduct('MacGPT: AI Assistant for Mac', 9, 'Emma Watson', 4.7, 320),
              createProduct('Humaams: Diverse Human Illustrations', 20, 'Liam Neeson', 4.2, 180),
              createProduct('CodeWizard: AI Coding Companion', 15, 'Natalie Portman', 4.9, 450),
              createProduct('DesignMaster: UI/UX Toolkit', 25, 'Chris Hemsworth', 4.5, 275),
            ].map((product, i) => (
              <ProductCard
                key={i}
                className="w-[calc(25%-0.75rem)] flex-shrink-0"
                image={product.image}
                title={product.name}
                creator={product.creator}
                rating={product.rating}
                price={product.price}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      <section className="mb-12 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">PICK UP WHERE YOU LEFT OFF</h2>
          <Button variant="link">SEE ALL</Button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4">
            {[
              createRecentlyViewedProduct('AI-Powered Writing Assistant', 29, 'Daniel Radcliffe', 4.6, 280),
              createRecentlyViewedProduct('Crypto Trading Masterclass', 99, 'Emma Stone', 4.8, 520),
              createRecentlyViewedProduct('Minimalist Icon Set', 12, 'Ryan Gosling', 4.3, 150),
              createRecentlyViewedProduct('Yoga for Beginners Course', 39, 'Margot Robbie', 4.7, 390),
            ].map((product, i) => (
              <ProductCard
                key={i}
                className="w-[calc(25%-0.75rem)] flex-shrink-0"
                image={product.image}
                title={product.name}
                creator={product.creator}
                rating={product.rating}
                price={product.price}
                recentlyViewed={product.recentlyViewed}  // Add this line
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      <section className="mb-12 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">SEE MORE FROM YOUR FAVORITE CREATORS</h2>
          <Button variant="link">SEE ALL</Button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4">
            {[
              createFavoriteCreatorProduct('Advanced Python Techniques', 49, 'Guido van Rossum', 4.9, 1200),
              createFavoriteCreatorProduct('JavaScript Patterns', 39, 'Douglas Crockford', 4.8, 950),
              createFavoriteCreatorProduct('React Performance Optimization', 59, 'Dan Abramov', 4.7, 820),
              createFavoriteCreatorProduct('Machine Learning Fundamentals', 79, 'Andrew Ng', 4.9, 1500),
            ].map((product, i) => (
              <ProductCard
                key={i}
                className="w-[calc(25%-0.75rem)] flex-shrink-0"
                image={product.image}
                title={product.name}
                creator={product.creator}
                rating={product.rating}
                price={product.price}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {[
        {
          title: 'TOP PRODUCTS IN 3D',
          stats: '16K creators, 93K products, 21M sales',
          products: [
            createProduct('3D Character Creator', 49, 'Scarlett Johansson', 4.8, 410),
            createProduct('Architectural Visualization Kit', 79, 'Robert Downey Jr.', 4.6, 350),
            createProduct('Low Poly Asset Pack', 29, 'Jennifer Lawrence', 4.3, 220),
            createProduct('Blender Addon Suite', 39, 'Tom Hiddleston', 4.7, 380),
          ]
        },
        {
          title: 'TOP PRODUCTS IN DESIGN',
          stats: '32K creators, 112K products, 27M sales',
          products: [
            createProduct('UI/UX Design System', 59, 'Chris Evans', 4.6, 300),
            createProduct('Logo Creation Toolkit', 39, 'Elizabeth Olsen', 4.3, 200),
            createProduct('Photoshop Action Bundle', 29, 'Mark Ruffalo', 4.7, 250),
            createProduct('Icon Library Pro', 19, 'Zoe Saldana', 4.5, 180),
          ]
        },
        {
          title: 'TOP PRODUCTS IN DRAWING & PAINTING',
          stats: '10K creators, 52K products, 19M sales',
          products: [
            createProduct('Digital Painting Brushes', 39, 'Benedict Cumberbatch', 4.8, 400),
            createProduct('Character Design Course', 79, 'Brie Larson', 4.7, 350),
            createProduct('Procreate Brush Pack', 29, 'Tom Holland', 4.6, 280),
            createProduct('Watercolor Texture Set', 19, 'Chadwick Boseman', 4.4, 190),
            createProduct('Comic Art Toolkit', 49, 'Karen Gillan', 4.5, 220),
            createProduct('Portrait Drawing Guide', 34, 'Paul Rudd', 4.3, 170),
          ]
        },
        {
          title: 'TOP PRODUCTS IN SOFTWARE DEVELOPMENT',
          stats: '8K creators, 23K products, 15M sales',
          products: [
            createProduct('React Component Library', 89, 'Chris Pratt', 4.9, 450),
            createProduct('Python Machine Learning Course', 129, 'Zoe Kravitz', 4.8, 420),
            createProduct('Full-Stack Web Dev Bootcamp', 199, 'Dave Bautista', 4.7, 380),
            createProduct('Mobile App Template', 59, 'Tessa Thompson', 4.6, 300),
            createProduct('Game Dev Asset Pack', 79, 'Taika Waititi', 4.5, 270),
            createProduct('DevOps Automation Scripts', 69, 'Vin Diesel', 4.4, 220),
          ]
        }
      ].map((category, index) => (
        <section key={index} className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{category.title}</h2>
            <Button variant="link">SEE ALL</Button>
          </div>
          <p className="text-sm text-gray-500 mb-4">{category.stats}</p>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4">
              {category.products.map((product, i) => (
                <ProductCard
                  key={i}
                  className="w-[calc(25%-0.75rem)] flex-shrink-0"
                  image={product.image}
                  title={product.name}
                  creator={product.creator}
                  rating={product.rating}
                  price={product.price}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
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