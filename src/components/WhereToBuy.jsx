import {ExternalLink, Mail, MapPin, ShoppingCart, Store} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"

const onlineRetailers = [
    {name: "Status Home Care", url: "https://statushomecare.co.uk"},
    {name: "Amazon", url: "https://www.amazon.co.uk/s?k=thermoclean"},
    {name: "Price Panda", url: "https://pricepanda.co.uk"},
    {name: "Stains and Bright", url: "https://stainsandbright.co.uk"},
]

const physicalStockists = [
    "Coopers",
    "Hamfelds",
    "Barnitts",
    "T Dickey & co",
    "Muir Gifts Ltd",
    "Smyths Home & Hardware",
    "Saving Hub Ltd",
    "Nickel + Dime",
    "David Irons",
    "Pease of Garforth",
    "Jingo",
]

export default function WhereToBuy() {
    return (
        <section
            id="stockists"
            className="bg-slate-50 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                        Where to Buy
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Find Thermoclean online or in store
                    </h2>
                    <p className="mt-4 text-base text-slate-600 sm:text-lg">
                        The average online purchase is 2 twin sachets.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Card>
                        <CardContent className="p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                                    <ShoppingCart className="h-5 w-5"/>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    Online Retailers
                                </h3>
                            </div>
                            <Separator className="my-6"/>
                            <ul className="space-y-2">
                                {onlineRetailers.map(({name, url}) => (
                                    <li key={name}>
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between rounded-lg border border-transparent px-3 py-3 transition-colors hover:border-slate-200 hover:bg-white"
                                        >
                      <span className="text-base font-medium text-slate-800">
                        {name}
                      </span>
                                            <ExternalLink
                                                className="h-4 w-4 text-slate-400 transition-colors group-hover:text-brand-700"/>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                                    <Store className="h-5 w-5"/>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    Physical Stockists
                                </h3>
                            </div>
                            <p className="mt-2 text-sm text-slate-500">
                                Independent shops across the UK & Ireland.
                            </p>
                            <Separator className="my-6"/>
                            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {physicalStockists.map((shop) => (
                                    <li
                                        key={shop}
                                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-slate-700"
                                    >
                                        <MapPin className="h-4 w-4 shrink-0 text-brand-600"/>
                                        <span>{shop}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 rounded-2xl border border-brand-200 bg-white p-6 sm:p-10">
                    <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                                For Retailers
                            </p>
                            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                                Selling premium flasks? Sell the cleaner that maintains them.
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                                Already trusted by canal holiday operators, country estates and
                                hotels. Email us to order a Counter Display Unit (CDU) and be
                                added to our stockist list.
                            </p>
                        </div>
                        <Button asChild size="lg" className="shrink-0">
                            <a href="mailto:info@thermoclean.uk?subject=CDU%20Enquiry">
                                <Mail className="h-4 w-4"/>
                                Email for a CDU
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
