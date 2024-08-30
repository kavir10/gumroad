import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  price: string
  rating: number
}

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

export function ProductCard({ name, price, rating, className, ...props }: ProductCardProps) {
  return (
    <Card className={cn("flex-shrink-0", className)} {...props}>
      <CardContent className="p-4 flex flex-col h-full">
        <div className="w-full h-48 bg-gray-200 mb-4 rounded-md"></div>
        <h3 className="font-semibold mb-2 text-lg line-clamp-2 flex-grow">{name}</h3>
        <div className="flex justify-between items-center mt-auto">
          <span className="font-bold text-lg">{price}</span>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}