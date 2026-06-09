export interface FounderMetric {
  value: string;
  label: string;
}

export interface FounderContent {
  badge: string;
  heading: string;
  founderName: string;
  designation: string;
  introduction: string;
  additionalContent: string;
  quoteTagline: string;
  message: string;
  values: { title: string; description: string }[];
  quote: string;
  quoteAttribution: string;
  metrics: FounderMetric[];
}
