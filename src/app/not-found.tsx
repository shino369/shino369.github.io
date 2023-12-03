
import { notFound } from "next/navigation";

// Can be imported from a shared config
const defaultLocale = "ja";

export default function NotFound() {

  // Add a locale prefix to show a localized not found page
  notFound();
}
