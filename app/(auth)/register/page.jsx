"use client"

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
import { useState } from 'react'
import { redirect } from 'next/navigation'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handlechange = async () => {
        const res = await fetch('/api/registeruser' , {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username , email , password})
        })

        if(res.ok){
            redirect('/login')
        }else{
            alert("Error registering user")
        }
    }

    return (
        <Card className=" max-w-sm mx-auto mt-30 ">
            <CardHeader>
                <CardTitle className="text-2xl">Register Here</CardTitle>
                <CardAction>
                    <Button variant="link" className="cursor-pointer" onClick={() => { redirect('/login') }}>Sign In</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Username</Label>
                            <Input
                                id="username"
                                type="username"
                                placeholder="m@example.com"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                         <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input id="password"
                                type="password"
                                placeholder='**********'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>    
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full" onClick={handlechange}>
                    Login
                </Button>
                <Button variant="outline" className="w-full cursor-pointer">
                    <i className="fa-brands fa-google text-[20px]"></i>  Continue with Google
                </Button>
                <Button variant="outline" className="w-full cursor-pointer" onClick={() => signIn('google')}>
                    <i className="fa-brands fa-github text-[20px] "></i>  Continue with GitHub
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Register
