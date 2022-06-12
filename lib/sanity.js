import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: "ck62hh2b",
  dataset: "production",
  apiVersion: "v2021-10-21",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = (
  <PortableTextComponent components={{}} {...config} />
);
