
'use client';
// This is a placeholder for the admin page.
// In a real application, this page would be protected by Firebase Authentication
// and would contain forms to manage Firestore data for the timeline and FAQ.

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HealthmateAdminPage() {

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-6">HealthMate Admin</h1>
            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Content Management</CardTitle>
                        <CardDescription>
                            This section is a placeholder for a CMS to manage the HealthMate landing page content.
                            In a full implementation, you would have forms here to Create, Read, Update, and Delete
                            entries in the `hm_timeline` and `hm_faq` Firestore collections.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Admin functionality to be implemented.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Remote Config</CardTitle>
                        <CardDescription>
                            The public launch of HealthMate can be controlled via a Firebase Remote Config flag.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">
                           Flag: <code className="bg-muted p-1 rounded-sm">hm_public_mode</code>
                        </p>
                         <p className="text-sm mt-2">
                           Set to <code className="bg-muted p-1 rounded-sm">true</code> to switch the site from stealth mode to public launch mode.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
