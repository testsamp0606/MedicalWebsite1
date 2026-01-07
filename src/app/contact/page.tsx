import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const contactDetails = [
    {
        icon: Phone,
        title: "General Inquiries",
        value: "(123) 456-7890",
        href: "tel:123-456-7890"
    },
    {
        icon: Mail,
        title: "Email Address",
        value: "info@medisite.com",
        href: "mailto:info@medisite.com"
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "24/7 Emergency, 9AM-8PM OPD"
    }
]

export default function ContactPage() {
    return (
        <div className="bg-secondary py-16">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">Get In Touch</h1>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                        We're here to help. Whether you have a question about our services or need assistance, feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-headline text-2xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="font-semibold">Our Address</h3>
                                    <p className="text-muted-foreground">123 Health St, Wellness City, 12345</p>
                                </div>
                            </div>
                            {contactDetails.map(detail => (
                                <div key={detail.title} className="flex items-start gap-4">
                                    <detail.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold">{detail.title}</h3>
                                        {detail.href ? (
                                             <a href={detail.href} className="text-muted-foreground hover:text-primary hover:underline">{detail.value}</a>
                                        ) : (
                                            <p className="text-muted-foreground">{detail.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 h-64 w-full rounded-lg bg-muted flex items-center justify-center">
                            <p className="text-muted-foreground">[Google Map Integration]</p>
                        </div>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
