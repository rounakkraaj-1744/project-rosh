import Link from "next/link"
import { ArrowRight, Terminal, Zap, Shield, Code, BookOpen } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Meet Rosh, the Revolutionary Smart Shell
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Boost your productivity with AI-powered suggestions, smart history, and intuitive commands.
                  The next evolution in command-line interfaces.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/installation">
                  <Button size="lg" className="gap-1.5">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/documentation">
                  <Button size="lg" variant="outline">
                    Read Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 overflow-hidden rounded-lg bg-black p-4">
                <pre className="text-green-400 font-mono text-sm h-full overflow-auto">
                  <code>
                    {`$ rosh
🚀 Rosh v1.0.0 initialized
AI assistant enabled

rosh> find large log files
🤖 Suggestion: find /var/log -type f -size +100M -exec ls -lh {} \\;
Run this command? [Y/n]: y

/var/log/system.log: 156M
/var/log/apache2/access.log: 230M
/var/log/mysql/slow.log: 124M

rosh> optimize these files
🤖 Running optimization routine...
✅ Compressed and archived large log files
✅ Created rotation policy
✅ Freed 510M of disk space

rosh> _`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Why Choose Rosh?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rosh combines the power of traditional shells with modern AI capabilities to create a seamless command-line experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <Terminal className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Smart Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get intelligent command suggestions based on your history and current context.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Zap className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Optimized performance with minimal overhead, even faster than traditional shells.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Secure by Default</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Built-in security features to prevent common mistakes and protect your system.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Code className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Extensible</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Create custom plugins and extensions to enhance functionality for your specific needs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <BookOpen className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Comprehensive Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed guides, examples, and API references to help you master Rosh quickly.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Terminal className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Cross-Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Available for Linux, macOS, and Windows with consistent behavior across all platforms.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Loved by Developers
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what others are saying about their experience with Rosh.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Sarah Chen</CardTitle>
                <CardDescription>Senior DevOps Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p>"Rosh has completely transformed our deployment scripts. The AI suggestions have saved us countless hours of debugging."</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Michael Johnson</CardTitle>
                <CardDescription>Full Stack Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p>"I've been using bash for 15 years, and switching to Rosh was the best decision I've made for my workflow this year."</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Aisha Patel</CardTitle>
                <CardDescription>System Administrator</CardDescription>
              </CardHeader>
              <CardContent>
                <p>"The security features in Rosh have prevented several potential issues in our production environment. It's like having an expert looking over your shoulder."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Transform Your Command Line Experience?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with Rosh today and join thousands of developers who've upgraded their shell.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/installation">
                <Button size="lg" className="gap-1.5">
                  Install Rosh
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
