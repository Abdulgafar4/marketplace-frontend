'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {toast} from "react-toastify";
import ProfileTab from "@/app/dashboard/settings/profileTab";
import Loader from "@/components/loading";

interface Settings {
    productsPerPage: number
    oldProductThreshold: number
}

export default function Settings(){
    const [settings, setSettings] = useState<Settings>({
        productsPerPage: 10,
        oldProductThreshold: 30,
    })

    useEffect(() => {
        const storedSettings = localStorage.getItem('settings')
        if (storedSettings) {
            setSettings(JSON.parse(storedSettings))
        }
    }, [])

    const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSettings(prev => ({ ...prev, [name]: parseInt(value) }))
    }

    const saveSettings = () => {
        localStorage.setItem('settings', JSON.stringify(settings))
        toast.success('Settings saved successfully!')
    }

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            <h1 className="text-3xl font-bold">Account Settings</h1>

            <Tabs defaultValue="profile" className="space-y-4">
                <TabsList className="dark:bg-gray-900 flex justify-center items-center space-x-1 sm:space-x-4">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="settings">Display Settings</TabsTrigger>
                    {/*<TabsTrigger value="suggestions">Suggestions</TabsTrigger>*/}
                </TabsList>

                <TabsContent value="profile">
                    <ProfileTab  />
                </TabsContent>

                <TabsContent value="settings">
                    <Card>
                        <CardHeader>
                            <CardTitle>Display Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/*<div className="space-y-2">*/}
                            {/*    <Label htmlFor="productsPerPage">Products per page</Label>*/}
                            {/*    <Input*/}
                            {/*        id="productsPerPage"*/}
                            {/*        name="productsPerPage"*/}
                            {/*        type="number"*/}
                            {/*        value={settings.productsPerPage}*/}
                            {/*        onChange={handleSettingsChange}*/}
                            {/*    />*/}
                            {/*</div>*/}
                            {/*<div className="space-y-2">*/}
                            {/*    <Label htmlFor="oldProductThreshold">Old product threshold (days)</Label>*/}
                            {/*    <Input*/}
                            {/*        id="oldProductThreshold"*/}
                            {/*        name="oldProductThreshold"*/}
                            {/*        type="number"*/}
                            {/*        value={settings.oldProductThreshold}*/}
                            {/*        onChange={handleSettingsChange}*/}
                            {/*    />*/}
                            {/*</div>*/}
                            {/*<Button onClick={saveSettings}>Save Settings</Button>*/}
                            <Loader message={"Coming Soon"} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}



