"use client"
import React, { useState } from 'react'
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
import { useSession, signIn, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'


const Login = () => {

    const { data: session } = useSession()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlechange = async () => {
        await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/"
        })
    }
    return (
        <Card className=" max-w-sm mx-auto mt-30 ">
            <CardHeader>
                <CardTitle className="text-2xl">Login to your account</CardTitle>
                <CardAction>
                    <Button variant="link"  className="cursor-pointer" onClick ={()=>{redirect('/register')}}>Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => e.preventDefault() }>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value) }
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder='**********'
                                required
                                value={password}
                                onChange={(e) =>setPassword(e.target.value) }
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full" onClick={handlechange}>
                    Login
                </Button>

                <Button variant="outline" className="w-full" onClick={() =>  signIn('google') }>
                    <i className="fa-brands fa-google text-[20px]"></i>  Login with Google
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Login
