import type { SidebarNavItem } from "@/types/nav"

export interface DocsConfig {
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      href: "/documentation/getting-started",
      items: [
        {
            title: "Introduction",
            href: "/documentation/getting-started",
            items: []
        },
        {
            title: "Installation",
            href: "/documentation/getting-started/installation",
            items: []
        },
        {
            title: "First Steps",
            href: "/documentation/getting-started/first-steps",
            items: []
        },
        {
            title: "Upgrading",
            href: "/documentation/getting-started/upgrading",
            items: []
        },
      ],
    },
    {
      title: "Core Concepts",
      href: "/documentation/core-concepts",
      items: [
        {
            title: "Overview",
            href: "/documentation/core-concepts",
            items: []
        },
        {
            title: "Smart Command Interpretation",
            href: "/documentation/core-concepts/smart-commands",
            items: []
        },
        {
            title: "Context Awareness",
            href: "/documentation/core-concepts/context-awareness",
            items: []
        },
        {
            title: "Safety Mechanisms",
            href: "/documentation/core-concepts/safety",
            items: []
        },
        {
            title: "Plugin Architecture",
            href: "/documentation/core-concepts/plugins",
            items: []
        },
      ],
    },
    {
      title: "Configuration",
      href: "/documentation/configuration",
      items: [
        {
            title: "Basic Configuration",
            href: "/documentation/configuration",
            items: []
        },
        {
            title: "Customizing Prompts",
            href: "/documentation/configuration/prompts",
            items: []
        },
        {
            title: "Environment Integration",
            href: "/documentation/configuration/environment",
            items: []
        },
        {
            title: "AI Settings",
            href: "/documentation/configuration/ai-settings",
            items: []
        },
        {
            title: "Advanced Options",
            href: "/documentation/configuration/advanced",
            items: []
        },
      ],
    },
    {
      title: "Advanced Usage",
      href: "/documentation/advanced-usage",
      items: [
        {
            title: "Overview",
            href: "/documentation/advanced-usage",
            items: []
        },
        {
            title: "Natural Language Processing",
            href: "/documentation/advanced-usage/nlp",
            items: []
        },
        {
            title: "Custom Workflows",
            href: "/documentation/advanced-usage/workflows",
            items: []
        },
        {
            title: "Automation",
            href: "/documentation/advanced-usage/automation",
            items: []
        },
        {
            title: "Integration with Other Tools",
            href: "/documentation/advanced-usage/integration",
            items: []
        },
      ],
    },
    {
      title: "Plugins",
      href: "/documentation/plugins",
      items: [
        {
            title: "Using Plugins",
            href: "/documentation/plugins",
            items: []
        },
        {
            title: "Popular Plugins",
            href: "/documentation/plugins/popular",
            items: []
        },
        {
            title: "Creating Plugins",
            href: "/documentation/plugins/creating",
            items: []
        },
        {
            title: "Plugin API Reference",
            href: "/documentation/plugins/api-reference",
            items: []
        },
      ],
    },
    {
      title: "Enterprise Features",
      href: "/documentation/enterprise",
      items: [
        {
            title: "Overview",
            href: "/documentation/enterprise",
            items: []
        },
        {
            title: "Team Management",
            href: "/documentation/enterprise/teams",
            items: []
        },
        {
            title: "Security Features",
            href: "/documentation/enterprise/security",
            items: []
        },
        {
            title: "Compliance",
            href: "/documentation/enterprise/compliance",
            items: []
        },
        {
            title: "Custom Integrations",
            href: "/documentation/enterprise/integrations",
            items: []
        },
      ],
    },
    {
      title: "API Reference",
      href: "/documentation/api",
      items: [
        {
            title: "Overview",
            href: "/documentation/api",
            items: []
        },
        {
            title: "Authentication",
            href: "/documentation/api/authentication",
            items: []
        },
        {
            title: "Command Execution",
            href: "/documentation/api/commands",
            items: []
        },
        {
            title: "History Management",
            href: "/documentation/api/history",
            items: []
        },
        {
            title: "AI Capabilities",
            href: "/documentation/api/ai",
            items: []
        },
      ],
    },
    {
      title: "Troubleshooting",
      href: "/documentation/troubleshooting",
      items: [
        {
            title: "Common Issues",
            href: "/documentation/troubleshooting",
            items: []
        },
        {
            title: "Installation Problems",
            href: "/documentation/troubleshooting/installation",
            items: []
        },
        {
            title: "Performance Issues",
            href: "/documentation/troubleshooting/performance",
            items: []
        },
        {
            title: "AI-Related Problems",
            href: "/documentation/troubleshooting/ai",
            items: []
        },
        {
            title: "Getting Support",
            href: "/documentation/troubleshooting/support",
            items: []
        },
      ],
    },
  ],
}
