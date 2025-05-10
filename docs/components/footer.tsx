import Link from "next/link"
import { Terminal, Github, Twitter, Slack } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <span className="text-lg font-bold">Rosh</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Rosh. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm md:flex md:gap-6">
            <Link href="/documentation" className="text-muted-foreground hover:text-foreground">
              Documentation
            </Link>
            <Link href="/installation" className="text-muted-foreground hover:text-foreground">
              Installation
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="/forums" className="text-muted-foreground hover:text-foreground">
              Forums
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/rosh-shell" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://twitter.com/rosh_shell" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://rosh-community.slack.com" className="text-muted-foreground hover:text-foreground">
              <Slack className="h-5 w-5" />
              <span className="sr-only">Slack</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
