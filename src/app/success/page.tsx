import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex items-center justify-center">
            <Card className="max-w-md">
                <CardHeader>
                    <CardTitle>Thank You for Your Purchase!</CardTitle>
                    <CardDescription>
                        Your workout plan ebook is on its way.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        We've sent an email with your ebook attached. If you
                        don't see it in your inbox, please check your spam
                        folder.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
