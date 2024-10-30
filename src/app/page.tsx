"use client"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { loadStripe } from "@stripe/stripe-js"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

export default function SalesFunnel() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handlePayment = async () => {
        setLoading(true)
        const response = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })

        const { sessionId } = await response.json()
        const stripe = await stripePromise

        const { error } = await stripe!.redirectToCheckout({ sessionId })

        if (error) {
            console.error(error)
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
            <BackgroundBeamsWithCollision>
                <div className="text-left flex flex-col items-start">
                    <div className="md:max-w-[60%] flex flex-col items-start gap-4">
                        <p className="uppercase bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 to-violet-500  [text-shadow:0_0_rgba(0,0,0,0.1)] md:text-lg font-bold tracking-wider">
                            for people seeking an optimized plan
                        </p>
                        <h2 className="text-3xl relative z-20 md:text-4xl lg:text-6xl font-bold text-left text-white font-sans tracking-tight">
                            Best Workout Plan Just for You.{" "}
                            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r md:py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                    <span className="">
                                        Without wasting years.
                                    </span>
                                </div>
                                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 md:py-4">
                                    <span className="">
                                        Without wasting years.
                                    </span>
                                </div>
                            </div>
                        </h2>
                        <div className="flex flex-col text-neutral-200 gap-2 text-lg md:text-xl lg:text-2xl">
                            <p className="text-neutral-200">
                                The best workout plans are tailored to your
                                body, goals, and lifestyle. I’ll create a custom
                                plan just for you, so you can achieve results
                                without the guesswork.
                            </p>
                            <p className="">
                                With my{" "}
                                <strong className="text-violet-500">
                                    14 years
                                </strong>{" "}
                                of experience, I will build your workout plan
                                based on your goals, fitness level, and
                                equipment availability.
                            </p>
                            <p>
                                The workout plan is sustainable and helps you
                                progress much faster
                            </p>
                        </div>
                        <a href="#offer">
                            <button className="inline-flex mt-4 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-auto w-full">
                                Get Yours Now
                            </button>
                        </a>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Create Your Perfect Workout Plan
                </h1>
                <p className="text-xl text-center mb-12">
                    Unlock the secrets to crafting personalized workout routines
                    with our comprehensive ebook!
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Beginner Plan</CardTitle>
                            <CardDescription>
                                Perfect for those just starting their fitness
                                journey
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                                    3 workouts per week
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                                    Focus on form and technique
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                                    Gradual progression
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Intermediate Plan</CardTitle>
                            <CardDescription>
                                For those ready to take their workouts to the
                                next level
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                                    4-5 workouts per week
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                                    Increased intensity and volume
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                                    Advanced exercise variations
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Expert Plan</CardTitle>
                            <CardDescription>
                                Designed for seasoned athletes looking for a
                                challenge
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                                    5-6 workouts per week
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                                    High-intensity training
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                                    Periodization and recovery strategies
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <Card className="max-w-md mx-auto">
                    <CardHeader>
                        <CardTitle>
                            Get Your Personalized Workout Ebook Today!
                        </CardTitle>
                        <CardDescription>
                            Includes all three workout plans: Beginner,
                            Intermediate, and Expert
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-center">
                            Only $29.99
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full"
                            onClick={handlePayment}
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Buy Now"}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
