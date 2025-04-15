import { ReactNode } from "react";
import { TabsProvider } from "./TabsContext";

interface ProvidersProps {
  children: ReactNode;
}

export function LandingProviders({ children }: ProvidersProps) {
  return <TabsProvider>{children}</TabsProvider>;
}
