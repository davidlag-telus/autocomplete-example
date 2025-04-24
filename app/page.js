"use client";

import { BaseProvider, Autocomplete } from "@telus-uds/components-base";
import alliumTheme from "@telus-uds/theme-allium";
import "@telus-uds/palette-allium/build/web/fonts/fonts-cdn.css";

export default function AutocompleteExample() {
  const addresses = [
    "510 West Georgia Street, Vancouver, BC",
    "510 West Hastings Street, Vancouver, BC",
    "510 West Broadway, Vancouver, BC",
    "510 West 8th Avenue, Vancouver, BC",
    "510 West Queens Road, North Vancouver, BC",
  ];
  const initialItems = addresses.map((address) => ({
    id: address,
    label: address,
  }));

  return (
    <BaseProvider defaultTheme={alliumTheme}>
      <Autocomplete initialItems={initialItems} />
    </BaseProvider>
  );
}
