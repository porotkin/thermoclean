import {useState} from "react"
import {Menu, X} from "lucide-react"
import {Button} from "@/components/ui/button"
import {cn} from "@/lib/utils"

const links = [
    {href: "#history", label: "History"},
    {href: "#usage", label: "How to Use"},
    {href: "#reviews", label: "Reviews"},
    {href: "#stockists", label: "Stockists"},
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="#top" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-brand-800">
            THERMOCLEAN
          </span>
                </a>

                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:block">
                    <Button asChild size="sm">
                        <a href="#stockists">Where to Buy</a>
                    </Button>
                </div>

                <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
                </button>
            </nav>

            <div
                className={cn(
                    "border-t border-slate-200 bg-white md:hidden",
                    open ? "block" : "hidden",
                )}
            >
                <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="pt-2">
                        <Button asChild className="w-full" onClick={() => setOpen(false)}>
                            <a href="#stockists">Where to Buy</a>
                        </Button>
                    </li>
                </ul>
            </div>
        </header>
    )
}
