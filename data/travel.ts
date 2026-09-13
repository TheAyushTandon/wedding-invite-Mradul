import { Airport } from "@/types";

export const AIRPORTS: Airport[] = [
  {
    id: "dabolim",
    code: "GOI",
    name: "Goa International Airport, Dabolim",
    description:
      "The most convenient airport for attending our wedding at Taj Heritage. Offers the fastest highway transit directly to Dona Paula without heavy city bottlenecks.",
    distance: "~28 km from Taj Heritage",
    travelTime: "~40 \u2013 45 minutes",
    route: "Via NH 66, Zuari Bridge & Dona Paula Coastal Road",
    tips: [
      "Pre-paid taxi kiosks located immediately outside the baggage claim.",
      "GoaMiles App and local cabs readily available 24/7.",
      "Wedding hospitality shuttles will coordinate grouped guest arrivals.",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/Goa+International+Airport+Dabolim/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
    badge: "\u2B50 Preferred & Closest",
    preferred: true,
  },
  {
    id: "mopa",
    code: "GOX",
    name: "Manohar International Airport, Mopa",
    description:
      "Goa\u2019s brand-new world-class international terminal in North Goa. Offers wide flight connectivity with a scenic drive overlooking the Mandovi River into Panaji.",
    distance: "~48 km from Taj Heritage",
    travelTime: "~70 \u2013 80 minutes",
    route: "Via NH 66, New Mandovi Bridge (Atal Setu) & Panaji Bypass",
    tips: [
      "Pre-paid electric AC buses and airport taxis run frequently to Panaji city center.",
      "Expect a scenic 1 hour 15 min journey across Atal Setu bridge.",
      "Advance cab booking recommended during peak evening arrival hours.",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/Manohar+International+Airport+Mopa/Taj+Cidade+de+Goa+Heritage,+Vainguinim+Beach,+Dona+Paula",
    badge: "North Goa Gateway",
    preferred: false,
  },
];
