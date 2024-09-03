import Image from 'next/image'
import Link from 'next/link'
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
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
  recentlyViewed?: boolean;
}

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm relative", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-4", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-between p-4 pt-0", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export function ProductCard({ image, title, creator, rating, price, recentlyViewed, className, ...props }: ProductCardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      {recentlyViewed && (
        <Badge variant="secondary" className="absolute top-2 right-2 z-10">
          Recently Viewed
        </Badge>
      )}
      <CardContent className="p-0">
        <div className="w-full h-48 bg-gray-200 rounded-t-lg"></div>
        <div className="p-4">
          <h3 className="font-semibold text-sm leading-tight h-10 mb-2 line-clamp-2">{title}</h3>
          <div className="flex items-center mb-2">
            <Image src={creator.avatar} alt={creator.name} width={24} height={24} className="rounded-full mr-2" />
            <Link href={creator.link} className="text-sm text-blue-600 hover:underline truncate">{creator.name}</Link>
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
}