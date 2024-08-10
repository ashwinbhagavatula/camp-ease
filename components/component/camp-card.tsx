/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/v8Av362S099
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CampCard({imageURL, ...props}:any) {
  return (
    <Card className="w-full max-w-md dark:bg-card">
      <Image
        src={imageURL}
        width={600}
        height={400}
        alt="Campsite"
        className="object-cover aspect-[3/2] rounded-t-lg"
      />
      <CardContent className="p-6 grid gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">Scenic Mountain Campsite</h3>
            <p className="text-muted-foreground">123 Wilderness Rd, Anytown USA</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
            <HeartIcon className="w-5 h-5 fill-primary" />
            <span>142</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-card-foreground">$50/hr</div>
          <Button className="bg-accent text-accent-foreground hover:bg-[#991218]">Book</Button>
        </div>
      </CardContent>
    </Card>
  )
}

function HeartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
