'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Settings {
    productsPerPage: number
    oldProductThreshold: number
}

export default function SettingsPage() {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSettings(prev => ({ ...prev, [name]: parseInt(value) }))
    }

    const saveSettings = () => {
        localStorage.setItem('settings', JSON.stringify(settings))
        alert('Settings saved successfully!')
    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Settings</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Display Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="productsPerPage">Products per page</Label>
                        <Input
                            id="productsPerPage"
                            name="productsPerPage"
                            type="number"
                            value={settings.productsPerPage}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="oldProductThreshold">Old product threshold (days)</Label>
                        <Input
                            id="oldProductThreshold"
                            name="oldProductThreshold"
                            type="number"
                            value={settings.oldProductThreshold}
                            onChange={handleChange}
                        />
                    </div>
                    <Button onClick={saveSettings}>Save Settings</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Additional Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Add user profile management</li>
                        <li>Implement email notifications for product status changes</li>
                        <li>Create a dashboard for analytics and sales reports</li>
                        <li>Add a feature for bulk product uploads</li>
                        <li>Implement a rating system for sellers</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

