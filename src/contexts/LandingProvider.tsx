import { ReactNode } from "react";
import { ProductProvider } from "./ProductContext";

interface ProvidersProps {
  children: ReactNode;
}

export function LandingProviders({ children }: ProvidersProps) {
  return <ProductProvider>{children}</ProductProvider>;
}
