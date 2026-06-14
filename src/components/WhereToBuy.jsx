import {ExternalLink, Mail, MapPin, ShoppingCart, Store} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import euipoLogo from "../../assets/img/euipo.png"

const onlineRetailers = [
    {
        name: "Status Home Care",
        url: "https://statushomecare.com/products/thermoclean-vacuum-flask-cleaner-twin-sachet",
    },
    {
        name: "Amazon",
        url: "https://www.amazon.co.uk/Thermoclean-10x-10g-sachets/dp/B008UQKU7E",
    },
    {
        name: "Price Panda",
        url: "https://pricepanda.co.uk/products/thermoclean-the-ultimate-vacuum-flask-cleaner",
    },
    {
        name: "Staines and Brights",
        url: "https://www.stainesandbrights.co.uk/product/housewares/vacuum-flask-cleaner-twin-sachet/",
    },
]

const ukStockists = [
    {name: "A S Golding", town: "Hanham", region: "Bristol", postcode: "BS15 3DS"},
    {name: "Adams Home Hardware", town: "Crediton", region: "Devon", postcode: "EX17 3LG"},
    {name: "Barnitts Ltd", town: "York", region: "Yorkshire", postcode: "YO1 8BW"},
    {name: "Blanchards Home Hardware", town: "Bideford", region: "Devon", postcode: "EX39 2JS"},
    {name: "Brian's DIY Ltd", town: "Brigg", region: "Lincolnshire", postcode: "DN20 8JJ"},
    {name: "Caxton Decor", town: "Fordingbridge", region: "Hampshire", postcode: "SP6 1AF"},
    {name: "Coopers (Great Yarmouth) Ltd", town: "Beccles", region: "Suffolk", postcode: "NR34 9AJ"},
    {name: "David Irons", town: "Forfar", region: "Scotland", postcode: "DD8 3AD"},
    {name: "Dicksons Home Hardware", town: "Wadebridge", region: "Cornwall", postcode: "PL27 7DR"},
    {name: "Duffy's Home Hardware 2014", town: "Torrington", region: "Devon", postcode: "EX38 8HN"},
    {name: "Fred's DIY", town: "Colchester", region: "Essex", postcode: "CO5 8RA"},
    {name: "Groundhog Property Services Ltd", town: "Poringland", region: "Norwich", postcode: "NR14 7JR"},
    {name: "Hamfelds Home & Garden Ltd", town: "Henfield", region: "West Sussex", postcode: "SS9 3JJ"},
    {name: "Hampton Hill Hardware", town: "Hampton Hill", region: "Middlesex", postcode: "TW12 1PD"},
    {name: "Harry's Home Hardware", town: "Hayling Island", region: "Hampshire", postcode: "PO11 9EA"},
    {name: "Hayling Hardware", town: "Woodhall Spa", region: "Lincolnshire", postcode: "LN10 6QL"},
    {name: "Heathfield Ironmongers Ltd", town: "Heathfield", region: "East Sussex", postcode: "TN21 8JD"},
    {name: "Housewares (Sidmouth) Ltd", town: "Sidmouth", region: "Devon", postcode: "EX10 8AL"},
    {name: "Ilminster Home Hardware", town: "Ilminster", region: "Somerset", postcode: "TA19 0DU"},
    {name: "Jac Distribution Ltd", town: "Ramsey", region: "Isle of Man", postcode: "IM1 2EF"},
    {name: "Jacksons of Moira", town: "Co Armagh", region: "Northern Ireland", postcode: "BT67 0LH"},
    {name: "Jingo", town: "Worcester", region: "West Midlands", postcode: "WR1 2QX"},
    {name: "Jones Home Hardware", town: "Hay on Wye", region: "Herefordshire", postcode: "HR3 5DF"},
    {name: "Ledbury Hardware Ltd", town: "Ledbury", region: "Herefordshire", postcode: "HR8 1AA"},
    {name: "Mallets Home Hardware", town: "Truro", region: "Cornwall", postcode: "TR1 2RT"},
    {name: "Millers Homestores Ltd", town: "Frome", region: "Somerset", postcode: "BA11 1BS"},
    {name: "Muir Gifts Ltd", town: "Kirriemuir", region: "Angus, Scotland", postcode: "DD8 4BE"},
    {name: "Nickel + Dime", town: "Blairgowrie", region: "Scotland", postcode: "PH10 6DA"},
    {name: "Paull & Co", town: "Martock", region: "Somerset", postcode: "TA12 6EX"},
    {name: "Pease of Garforth", town: "Garforth, Leeds", region: "West Yorkshire", postcode: "LS25 1AA"},
    {name: "R H Gaudion & Sons Ltd", town: "Vale", region: "Guernsey", postcode: "GY6 8DD"},
    {name: "RKG Trading Ltd", town: "Okehampton", region: "Devon", postcode: "EX20 1DJ"},
    {name: "Saving Hub Ltd", town: "Glasgow", region: "Scotland", postcode: "G41 2NU"},
    {name: "Screw It"},
    {name: "Seaford Home Hardware", town: "Seaford", region: "East Sussex", postcode: "BN25 1NL"},
    {name: "Smyths Home & Hardware", town: "Portrush", region: "Northern Ireland", postcode: "BT56"},
    {name: "Snapes Household Stores Ltd", town: "Cheadle Hulme", region: "Cheshire", postcode: "SK8 7JD"},
    {name: "Staines & Brights Ltd", town: "Tiptree", region: "Essex", postcode: "CO5 0HB"},
    {name: "T Dickey & co", town: "Enniskillen", region: "Northern Ireland", postcode: "BT94 1GR"},
    {name: "The Islands Home Hardware Ltd", town: "Isles of Scilly", region: "Cornwall", postcode: "TR21 0JD"},
    {name: "Tonwood DIY Ltd", town: "Holbeach", region: "Lincolnshire", postcode: "PE12 7DJ"},
    {name: "Torpoint Hardware", town: "Torpoint", region: "Cornwall", postcode: "PL11 2AB"},
    {name: "Vikings", town: "Tytherington", region: "Cheshire", postcode: "SK10 2HB"},
    {name: "Whiting & Son", town: "Wells", region: "Somerset", postcode: "BA5 2AL"},
    {name: "Whiting & Son", town: "Sherborne", region: "Dorset", postcode: "DT9 3PX"},
]

const europeStockists = [
    {name: "Cyprus Distributor", town: "Paphos", region: "Cyprus", postcode: "8035"},
]

function StockistItem({stockist}) {
    const location = [stockist.town, stockist.region, stockist.postcode].filter(Boolean).join(" · ")
    return (
        <li className="flex items-start gap-2 rounded-md px-2 py-1.5">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"/>
            <div className="min-w-0">
                <div className="text-sm font-medium text-slate-800">{stockist.name}</div>
                {location && (
                    <div className="text-xs text-slate-500">{location}</div>
                )}
            </div>
        </li>
    )
}

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

                <Card className="mt-16">
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
                        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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

                <Card className="mt-6">
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
                            Independent shops across the UK & Europe.
                        </p>
                        <Separator className="my-6"/>

                        <div>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-700">
                                United Kingdom & Ireland
                            </h4>
                            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
                                {ukStockists.map((stockist, index) => (
                                    <StockistItem
                                        key={`${stockist.name}-${index}`}
                                        stockist={stockist}
                                    />
                                ))}
                            </ul>
                        </div>

                        <div className="mt-10">
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-700">
                                Europe
                            </h4>
                            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
                                {europeStockists.map((stockist, index) => (
                                    <StockistItem
                                        key={`${stockist.name}-${index}`}
                                        stockist={stockist}
                                    />
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-12 rounded-2xl border border-brand-200 bg-white p-6 sm:p-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
                        <div className="lg:col-span-2">
                            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                                For Retailers & Distributors
                            </p>
                            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                Expand your range with a trusted brand
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                                Already trusted by canal holiday operators, country estates, and retailers since 1994. 
                                Email us to order a <strong>Counter Display Unit (CDU)</strong> to showcase Thermoclean on your store shelves.
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                                <strong>EU Distribution Opportunities:</strong> We are actively seeking distribution partners across Europe. 
                                Thermoclean is fully registered with the <strong>European Union Intellectual Property Office (EUIPO Reg No. 001908052)</strong>, 
                                reinforcing our long-term commitment to our European partners and consumers.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-6 rounded-xl bg-slate-50 p-6 border border-slate-100 lg:col-span-1">
                            <img 
                                src={euipoLogo} 
                                alt="European Union Intellectual Property Office (EUIPO) Logo" 
                                className="h-10 object-contain mix-blend-multiply opacity-95"
                            />
                            <div className="w-full text-center space-y-3">
                                <Button asChild size="lg" className="w-full">
                                    <a href="mailto:info@thermoclean.uk?subject=Distribution%20or%20CDU%20Enquiry">
                                        <Mail className="h-4 w-4"/>
                                        CDU & Distribution Enquiry
                                    </a>
                                </Button>
                                <p className="text-[10px] text-slate-500">
                                    EU Reg. No 001908052
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
