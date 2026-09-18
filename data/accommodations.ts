import { Hotel } from "@/types";

export const ACCOMMODATION_NOTE = {
  title: "Complimentary Stay for Invited Guests",
  coveredNote: "Stay has been covered for guests on 2nd & 3rd February. We have pre-negotiated special rates if you would like to stay before or after — please contact the wedding planner undersigned.",
  hotelName: "Taj Cidade de Goa Heritage",
  fullAddress: "Taj Cidade de Goa Heritage, Vainguinim Beach, Dona Paula, Panaji, Goa 403004",
  mapUrl: "https://maps.google.com/?q=Taj+Cidade+de+Goa+Heritage",
  plannerContact: "+91 98765 43210",
  plannerName: "Wedding Concierge Desk",
};

export const HOTELS: Hotel[] = [
  {
    id: "taj-heritage",
    name: "Taj Cidade de Goa Heritage",
    type: "LUXURY BEACHFRONT HERITAGE RESORT",
    status: "Primary Wedding Venue & Guest Stay",
    courtesyCode: "MRADULSHREYA2026",
    amenities: ["Beachfront Access", "Heritage Architecture", "Complimentary Guest Stay on 2nd & 3rd Feb"],
    website: "https://www.tajhotels.com/en-in/taj/taj-cidade-de-goa-heritage/",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  },
];
