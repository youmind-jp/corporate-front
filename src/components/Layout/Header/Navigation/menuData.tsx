import { HeaderItem } from "@/types/menu";
import { getImagePrefix } from "@/utils/utils";



export const headerData: HeaderItem[] = [
  { label: "Buy & Sell", href: `${getImagePrefix()}/#main-banner`},
  { label: "Development", href: `${getImagePrefix()}/#development` },
  { label: "Work", href: `${getImagePrefix()}/#work` },
  { label: "Portfolio", href: `${getImagePrefix()}/#portfolio` },
  { label: "Upgrade", href: `${getImagePrefix()}/#upgrade` },
  { label: "Docs", href: `${getImagePrefix()}/documentation#version` },
];
