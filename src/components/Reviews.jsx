import {Quote, Star} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"

const reviews = [
    {
        name: "Sylvia Looker",
        quote:
            "These sachets are brilliant and really do work. Absolutely amazed and very impressed.",
    },
    {
        name: "D Young",
        quote:
            "Saw it working after 30 minutes — lifted all the scum and left the inside like new.",
    },
    {
        name: "The Judge",
        quote:
            "Rescued a heavy-duty, expensive flask unused for over three years. Left it bright as a new pin internally.",
    },
]

function Stars() {
    return (
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({length: 5}).map((_, i) => (
                <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    strokeWidth={1.5}
                />
            ))}
        </div>
    )
}

export default function Reviews() {
    return (
        <section
            id="reviews"
            className="bg-white py-20 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                        Customer Reviews
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Loved by flask owners
                    </h2>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {reviews.map(({name, quote}) => (
                        <Card key={name} className="flex h-full flex-col">
                            <CardContent className="flex flex-1 flex-col p-6 pt-6">
                                <Quote className="h-6 w-6 text-brand-200" strokeWidth={1.5}/>
                                <p className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
                                    &ldquo;{quote}&rdquo;
                                </p>
                                <div className="mt-6 border-t border-slate-100 pt-4">
                                    <Stars/>
                                    <p className="mt-2 text-sm font-semibold text-slate-900">
                                        {name}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
