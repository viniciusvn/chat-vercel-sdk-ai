'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area"


export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    })

    return (
        <Card className="w-[440px]">
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[600px] w-full pr-4">
                    {messages.map(message => {
                        return (


                            <div key={message.id} className="flex gap-2 text-slate-600 text-sm mb-4">
                                {message.role === 'user' && (
                                    <Avatar>
                                        <AvatarFallback>VN</AvatarFallback>
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/37716578?v=4"></AvatarImage>
                                    </Avatar>
                                )}

                                {message.role === 'assistant' && (
                                    <Avatar>
                                        <AvatarFallback>AI</AvatarFallback>
                                        <AvatarImage src="https://pbs.twimg.com/media/EEnDqxIUYAA5nFz.jpg:large"></AvatarImage>
                                    </Avatar>
                                )}
                                <p className="leading-relaxed">
                                    <span className="block font-bold text-slate-700">{message.role === 'user' ? 'User' : 'AI'}: </span>
                                    {message.content}
                                </p>
                            </div>
                        )
                    })}
                </ScrollArea>
            </CardContent>
            <CardFooter >
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder="How can i help u?" value={input} onChange={handleInputChange}></Input>
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}