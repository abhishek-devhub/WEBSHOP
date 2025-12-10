import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const page = () => {
    return (
            <Card className=" max-w-sm mx-auto mt-30 ">
                <CardHeader>
                    <CardTitle className="text-2xl">Register Here</CardTitle>
                    <CardAction>
                        <Button variant="link">Sign In</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input id="password" type="password" placeholder='**********' required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Login
                    </Button>

                    <Button variant="outline" className="w-full">
                      <i class="fa-brands fa-google text-[20px]"></i>  Continue with Google
                    </Button>
                </CardFooter>
            </Card>
    )
}

export default page
