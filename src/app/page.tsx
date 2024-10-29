"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function SalesFunnel() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Create Your Perfect Workout Plan
        </h1>
        <p className="text-xl text-center mb-12">
          Unlock the secrets to crafting personalized workout routines with our
          comprehensive ebook!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Beginner Plan</CardTitle>
              <CardDescription>
                Perfect for those just starting their fitness journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 3
                  workouts per week
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Focus
                  on form and technique
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
                For those ready to take their workouts to the next level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 4-5
                  workouts per week
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
                Designed for seasoned athletes looking for a challenge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 5-6
                  workouts per week
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
            <CardTitle>Get Your Personalized Workout Ebook Today!</CardTitle>
            <CardDescription>
              Includes all three workout plans: Beginner, Intermediate, and
              Expert
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-center">Only $29.99</p>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => {
                /* Implement Stripe payment */
              }}
            >
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
