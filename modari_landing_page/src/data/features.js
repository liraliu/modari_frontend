import { Settings, Bot, FileText, Shield, AlertTriangle, Users } from 'lucide-react';

export const features = [
  {
    icon: Settings,
    title: "Custom Filter Rules",
    description: "Create personalized moderation rules tailored to your community's needs. Set custom keywords, phrases, and content filters that align with your server's culture and guidelines.",
    stats: "500+ Rules"
  },
  {
    icon: Bot,
    title: "AI Violation Detection",
    description: "Our advanced machine learning algorithms automatically detect harmful content including NSFW material, hate speech, spam, and toxic behavior in real-time with 99.7% accuracy.",
    stats: "99.7% Accuracy"
  },
  {
    icon: FileText,
    title: "Audit Logs",
    description: "Comprehensive logging system tracks all moderation actions, deleted messages, and user violations. Quality insights and community transparency at your fingertips.",
    stats: "Real-time Logs"
  },
  {
    icon: Shield,
    title: "Bypass Roles",
    description: "Configure trusted roles that can bypass certain moderation filters. Give your moderators and trusted members the flexibility they need while keeping them safe.",
    stats: "Unlimited Roles"
  },
  {
    icon: AlertTriangle,
    title: "Violation Alerts",
    description: "Instant notifications when serious violations occur. Get real-time alerts via DM or designated channels so your moderators can respond quickly to incidents.",
    stats: "<1s Response"
  },
  {
    icon: Users,
    title: "Multiple Server Support",
    description: "Manage moderation across multiple Discord servers from a single dashboard. Scale your community management effortlessly.",
    stats: "Unlimited Servers"
  }
]; 