import * as React from "react"
import Image from 'next/image'
import Link from 'next/link'
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between p-4 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// New ProductCard component
interface ProductCardProps {
  image: string;
  title: string;
  creator: {
    name: string;
    avatar: string;
    link: string;
  };
  rating: {
    value: number;
    count: number;
  };
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, creator, rating, price }) => (
  <Card className="w-full max-w-sm">
    <CardContent className="p-0">
      <div className="w-full h-48 bg-gray-200 rounded-t-lg"></div>
      <div className="p-4">
        <h3 className="font-semibold text-sm leading-tight h-10 mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <Image src={creator.avatar} alt={creator.name} width={24} height={24} className="rounded-full mr-2" />
          <Link href={creator.link} className="text-sm text-blue-600 hover:underline">{creator.name}</Link>
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-sm font-semibold mr-1">{rating.value.toFixed(1)}</span>
          <span className="text-sm text-gray-500">({rating.count})</span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <div className="text-lg font-bold">${price.toFixed(2)}</div>
    </CardFooter>
  </Card>
)

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, ProductCard }
