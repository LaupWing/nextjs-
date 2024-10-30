"use client"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { Meteors } from "@/components/ui/meteors"
import { loadStripe } from "@stripe/stripe-js"
import {
    IconDiamondFilled,
    IconDiamondsFilled,
    IconRosetteDiscountCheckFilled,
    IconSquareRoundedCheckFilled,
} from "@tabler/icons-react"
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
        <div className="min-h-screen">
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
                                The best workout plans are custom to your body,
                                goals, and lifestyle. Create a custom plan with
                                the{" "}
                                <strong className="text-violet-500">
                                    Body Crafting System
                                </strong>
                                , so you can achieve results without the
                                guesswork.
                            </p>
                            <p className="">
                                After{" "}
                                <strong className="text-violet-500">
                                    14 years
                                </strong>{" "}
                                of working out, I have tested and experimented
                                with every exercise, as well as the ideal number
                                of sets and reps.
                            </p>
                            <p>
                                Don’t waste years like I did—take the shortcut
                                to faster fitness progress.
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
            {/* <div className="container mx-auto px-4 py-16">
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
            </div> */}
            <div className="bg-neutral-800 flex flex-col">
                <div className="max-w-3xl text-left mx-auto py-8 px-6 sm:px-6 lg:py-12 lg:px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-neutral-50 sm:text-4xl">
                        Common complaints and their root...
                        <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            Which one is you?
                        </span>
                    </h2>
                    <ul className="text-neutral-100 text-base md:text-lg my-8 flex-col flex gap-4">
                        <li className="flex items-center">
                            <IconDiamondsFilled
                                className="mr-2 flex-shrink-0"
                                size={20}
                            />
                            <p>
                                Not making any progress in the gym{" "}
                                <strong className="text-white">
                                    (Doing the wrong exercises)
                                </strong>
                            </p>
                        </li>
                        <li className="flex items-center">
                            <IconDiamondsFilled
                                className="mr-2 flex-shrink-0"
                                size={20}
                            />
                            <p>
                                Feeling lost in the gym{" "}
                                <strong className="text-white">
                                    (Not having a plan)
                                </strong>
                            </p>
                        </li>
                        <li className="flex items-center">
                            <IconDiamondsFilled
                                className="mr-2 flex-shrink-0"
                                size={20}
                            />
                            <p>
                                To much information online about fitness.{" "}
                                <strong className="text-white">
                                    (Internet is full of misinformation)
                                </strong>
                            </p>
                        </li>
                        <li className="flex items-center">
                            <IconDiamondsFilled
                                className="mr-2 flex-shrink-0"
                                size={20}
                            />
                            <p>
                                Feeling unmotivated.{" "}
                                <strong className="text-white">
                                    (Not having a clear goal)
                                </strong>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="max-w-3xl text-left mx-auto py-8 px-6 sm:px-6 lg:py-12 lg:px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-neutral-50 sm:text-4xl">
                        Common traps and their root...
                        <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            Where are you trapped?
                        </span>
                    </h2>
                    <ul className="text-neutral-100 text-base md:text-lg my-8 flex-col flex gap-4">
                        <li className="flex items-center">
                            <IconDiamondsFilled
                                className="mr-2 flex-shrink-0"
                                size={20}
                            />
                            <p>
                                Picking the wrong exercises{" "}
                                <strong className="text-white">
                                    (Not having the fitness knowledge)
                                </strong>
                            </p>
                        </li>
                        <li className="flex items-center">
                            <IconDiamondsFilled
                                className="mr-2 flex-shrink-0"
                                size={20}
                            />
                            <p>
                                Picking the wrong workout plan{" "}
                                <strong className="text-white">
                                    (Workout plan that is to general and not
                                    suited for you)
                                </strong>
                            </p>
                        </li>
                        <li className="flex items-center">
                            <IconDiamondsFilled
                                className="mr-2 flex-shrink-0"
                                size={20}
                            />
                            <p>
                                Blaming the lack of progress on the plan.{" "}
                                <strong className="text-white">
                                    (You just got the wrong plan)
                                </strong>
                            </p>
                        </li>
                        <li className="flex items-center">
                            <IconDiamondsFilled
                                className="mr-2 flex-shrink-0"
                                size={20}
                            />
                            <p>
                                Doing the workout that is either to hard or to
                                easy.{" "}
                                <strong className="text-white">
                                    (Sticking with one workout plan, and often
                                    the wrong one)
                                </strong>
                            </p>
                        </li>
                    </ul>
                </div>
                <a className="mx-auto" href="#offer">
                    <button className="inline-flex mt-4 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-auto w-full">
                        Get My Plan
                    </button>
                </a>
                <div className="flex flex-col bg-gradient-to-t from-neutral-950 to-neutral-800">
                    <div className="max-w-3xl text-left mx-auto py-12 px-6 sm:px-6 lg:py-16 lg:px-8 text-white flex flex-col gap-4">
                        <p>
                            For 14 years, I’ve been on a rollercoaster of
                            fitness. I’ve seen the highs and lows of it all—once
                            too skinny, later too heavy, and now, in the best
                            shape of my life.{" "}
                        </p>
                        <p>Here is my story.</p>
                        <img className="rounded-lg" src="/banner.png" alt="" />
                        <p>
                            My journey wasn’t straightforward, though. I spent
                            years experimenting with every kind of workout
                            routine you can imagine—weightlifting splits,
                            bodyweight routines, calisthenics, yoga, even some
                            unconventional stuff just to see what clicked.
                        </p>
                        <p>I made all the mistakes.</p>
                        <p>
                            I picked exercises just because they were trendy,
                            not because they were what my body needed.
                        </p>
                        <p>
                            I’d follow general workout plans that weren’t suited
                            to me, convincing myself I was on the right track.
                        </p>
                        <p>
                            I’d struggle through routines that were either way
                            too advanced or, worse, too easy—thinking that just
                            sticking to a plan was enough.
                        </p>
                        <p>
                            When the progress didn’t show, I’d blame the plan,
                            not realizing the problem was that I had the wrong
                            one all along.
                        </p>
                        <p>
                            Now, when I walk into the gym, I can’t help but
                            notice others falling into the same traps.
                        </p>
                        <p>
                            I see people grinding away on exercises they don’t
                            understand, their form a mess, clearly not getting
                            what they’re after.
                        </p>
                        <p>
                            Some have been doing this for years, sticking to the
                            wrong plan, wondering why the results never come.
                        </p>
                        <p>It’s tough to watch because I’ve been there.</p>
                        <p>
                            But after all my trial and error, I know that
                            understanding your body and picking the right
                            routine is everything.
                        </p>
                        <p>
                            It's not just about doing the work—it's about doing
                            the right work.
                        </p>
                    </div>
                    <a className="mx-auto" href="#offer">
                        <button className="inline-flex mt-4 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-auto w-full">
                            Get My Plan
                        </button>
                    </a>
                    <div className="max-w-3xl text-center mx-auto py-12 px-6 sm:px-6 lg:py-16 lg:px-8 text-white flex flex-col gap-4">
                        <div className="flex flex-col">
                            <p className="uppercase text-white md:text-lg font-bold tracking-wider">
                                How does it work?
                            </p>
                            <h2 className=" text-3xl md:text-4xl bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 relative z-50 mb-2">
                                Body Crafting System
                            </h2>
                        </div>
                        <div className=" text-left flex flex-col gap-8">
                            <div className="flex flex-col">
                                <h3 className="text-xl flex items-center gap-1">
                                    <IconDiamondFilled />
                                    Basics
                                </h3>
                                <p className="mt-2">
                                    I’ll go over the basics of fitness, breaking
                                    down the key fundamentals of working out.
                                    There's a lot of misinformation on the
                                    internet, so I'll make sure you have the
                                    right information.
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl flex items-center gap-1">
                                    <IconDiamondFilled />
                                    Crafting Your Workout Plan
                                </h3>
                                <p className="mt-2">
                                    Based on your unique profile—like how many
                                    days you can work out and how much time you
                                    can spend—you’ll create a custom workout
                                    plan that fits your body’s needs, helping
                                    you maximize your results without the
                                    guesswork.
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl flex items-center gap-1">
                                    <IconDiamondFilled />
                                    Premade Plans
                                </h3>
                                <p className="mt-2">
                                    You’ll also get pre-made workout plans for
                                    different levels—Beginner, Intermediate, and
                                    Advanced—so you can start right away or
                                    build your own custom plan.
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl flex items-center gap-1">
                                    <IconDiamondFilled />
                                    Bonus: 1-on-1 Call with Coach Loc
                                </h3>
                                <p className="mt-2">
                                    As a bonus, you can schedule a call with me,
                                    where I’ll explain the essentials of
                                    fitness, walk you through your workout plan,
                                    and answer any questions you may have.
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl flex text-yellow-400 items-center gap-1">
                                    <IconDiamondFilled />
                                    Bonus: Custom Diet Plan
                                </h3>
                                <p className="mt-2">
                                    Along with your workout, you’ll also get to
                                    create a custom diet plan that fits your
                                    body’s needs. Additionally, I’ll share the
                                    key fundamentals of dieting to help you
                                    reach your goals.
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl flex text-yellow-400 items-center gap-1">
                                    <IconDiamondFilled />
                                    Bonus: Premade plans
                                </h3>
                                <p className="mt-2">
                                    Access two pre-made meal prep plans,
                                    regularly updated to keep your nutrition on
                                    track and aligned with your fitness goals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <section
                        id="offer"
                        className="py-8 px-6 flex items-center justify-center"
                    >
                        <div className=" w-full relative max-w-md">
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-6 py-10 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                                <div className="text-center font-bold">
                                    <h1 className=" text-3xl md:text-4xl bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 relative z-50 mb-2">
                                        Tailored workout plan
                                    </h1>
                                    <div className="my-6">
                                        <p className="text-center w-full text-5xl text-white">
                                            $97
                                        </p>
                                        <p className="uppercase text-gray-400 text-xs max-w-[50%] mt-2 mx-auto">
                                            This is limited time offer. The
                                            price will increase 27 sep.
                                        </p>
                                    </div>
                                    <p className="text-base text-slate-200 mb-4 relative z-50">
                                        Have a tailored workout plan just for
                                        you. Suited to your body, goals, and
                                        lifestyle for maximum results without
                                        wasting years learning about fitness.
                                    </p>
                                </div>
                                <ul className="my-4 text-white flex flex-col items-start gap-4">
                                    <li className="flex items-center">
                                        <IconSquareRoundedCheckFilled className="text-green-400 mr-2 flex-shrink-0" />
                                        <p>Every plan/document is tailored</p>
                                    </li>
                                    <li className="flex items-center">
                                        <IconSquareRoundedCheckFilled className="text-green-400 mr-2 flex-shrink-0" />
                                        <p>3 Revisions for the plans</p>
                                    </li>
                                    <li className="flex items-center">
                                        <IconSquareRoundedCheckFilled className="text-green-400 mr-2 flex-shrink-0" />
                                        <p>Beginner workout plan</p>
                                    </li>
                                    <li className="flex items-center">
                                        <IconSquareRoundedCheckFilled className="text-green-400 mr-2 flex-shrink-0" />
                                        <p>Intermediate workout plan</p>
                                    </li>
                                    <li className="flex items-center">
                                        <IconSquareRoundedCheckFilled className="text-green-400 mr-2 flex-shrink-0" />
                                        <p>Advanced workout plan</p>
                                    </li>
                                    <li className="flex items-center">
                                        <IconSquareRoundedCheckFilled className="text-green-400 mr-2 flex-shrink-0" />
                                        <p>
                                            Document on how to make your own
                                            plan
                                        </p>
                                    </li>
                                    <li className="flex items-center relative">
                                        <IconRosetteDiscountCheckFilled className="text-yellow-400 mr-2 flex-shrink-0" />
                                        <p>1 on 1 Call with Coach Loc</p>
                                        <span className="absolute text-xs right-0 top-0 bg-yellow-400 text-slate-900 font-bold rounded px-2 py-0.5 transform rotate-12 translate-x-1/2 -translate-y-3/4">
                                            Bonus
                                        </span>
                                    </li>
                                    <li className="flex items-center relative">
                                        <IconRosetteDiscountCheckFilled className="text-yellow-400 mr-2 flex-shrink-0" />
                                        <p>Custom Diet Plan</p>
                                        <span className="absolute text-xs right-0 top-0 bg-yellow-400 text-slate-900 font-bold rounded px-2 py-0.5 transform rotate-12 translate-x-1/2 -translate-y-3/4">
                                            Bonus
                                        </span>
                                    </li>
                                </ul>

                                <HoverBorderGradient
                                    containerClassName="rounded-full w-full mt-4"
                                    as="button"
                                    className="bg-black w-full text-center flex text-white items-center justify-center space-x-2"
                                    onClick={handlePayment}
                                >
                                    {loading ? "Processing..." : "Buy Now"}
                                </HoverBorderGradient>

                                <Meteors number={20} />
                            </div>
                        </div>
                    </section>
                    <footer className="my-8 text-neutral-100 mx-auto">
                        Copyright Coach Loc
                    </footer>
                </div>
            </div>
        </div>
    )
}
