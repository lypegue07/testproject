import {
  Award,
  Building2,
  CalendarClock,
  ClipboardList,
  Compass,
  Crown,
  Flag,
  Globe,
  Heart,
  HeartHandshake,
  HelpCircle,
  Info,
  Laptop,
  Layers,
  ListOrdered,
  MessageCircle,
  MessagesSquare,
  Mic,
  Moon,
  Plane,
  Rocket,
  Sunrise,
  Sparkles,
  Target,
  TrendingUp,
  UserCog,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Award,
  Building2,
  CalendarClock,
  ClipboardList,
  Compass,
  Crown,
  Flag,
  Globe,
  Heart,
  HeartHandshake,
  HelpCircle,
  Info,
  Laptop,
  Layers,
  ListOrdered,
  MessageCircle,
  MessagesSquare,
  Mic,
  Moon,
  Plane,
  Rocket,
  Sunrise,
  Sparkles,
  Target,
  TrendingUp,
  UserCog,
  Users,
  Zap,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Info;
  return <Cmp className={className} />;
}
