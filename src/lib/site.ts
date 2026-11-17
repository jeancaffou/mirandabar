import zunanjost from "@/assets/photos/zunanjost.jpg";
import terasa from "@/assets/photos/terasa.jpg";
import miza from "@/assets/photos/miza.jpg";
import narezki from "@/assets/photos/narezki.jpg";
import sank from "@/assets/photos/sank.jpg";
import kletDemizoni from "@/assets/photos/klet-demizoni.jpg";
import kletMiza from "@/assets/photos/klet-miza.jpg";
import kletSodi from "@/assets/photos/klet-sodi.jpg";
import kletSteklenice from "@/assets/photos/klet-steklenice.jpg";
import kletVina from "@/assets/photos/klet-vina.jpg";
import vrt from "@/assets/photos/vrt.jpg";
import osel from "@/assets/photos/osel.jpg";
import kuhinja from "@/assets/photos/kuhinja.jpg";
import kuhinja2 from "@/assets/photos/kuhinja2.jpg";
import kopalnica from "@/assets/photos/kopalnica.jpg";
import spalnica1 from "@/assets/photos/spalnica1.jpg";
import spalnica2 from "@/assets/photos/spalnica2.jpg";
import spalnica3 from "@/assets/photos/spalnica3.jpg";
import spalnica4 from "@/assets/photos/spalnica4.jpg";

export type Photo = { src: string; alt: string; category: "lokal" | "klet" | "okolica" | "apartma" };

export const photos = {
  zunanjost: { src: zunanjost, alt: "Miranda bar od zunaj s teraso in parkiriščem", category: "lokal" },
  terasa: { src: terasa, alt: "Terasa pred Miranda barom z rdečimi senčniki in cvetjem", category: "lokal" },
  miza: { src: miza, alt: "Pogrnjena miza v lokalu", category: "lokal" },
  narezki: { src: narezki, alt: "Narezek s pršutom, panceto, sirom in olivami", category: "lokal" },
  sank: { src: sank, alt: "Gostje ob šanku v Miranda baru", category: "lokal" },
  kletDemizoni: { src: kletDemizoni, alt: "Stari pleteni demižoni v vinski kleti", category: "klet" },
  kletMiza: { src: kletMiza, alt: "Lesena miza in klopi v vinski kleti iz leta 1936", category: "klet" },
  kletSodi: { src: kletSodi, alt: "Leseni sodi in narezek v vinski kleti", category: "klet" },
  kletSteklenice: { src: kletSteklenice, alt: "Stena steklenic vina in sodi v kleti", category: "klet" },
  kletVina: { src: kletVina, alt: "Izbor vin in kozarci na sodu", category: "klet" },
  vrt: { src: vrt, alt: "Vrt z leseno mizo v senci dreves", category: "okolica" },
  osel: { src: osel, alt: "Osel na pašniku za hišo", category: "okolica" },
  kuhinja: { src: kuhinja, alt: "Kuhinja z jedilno mizo v apartmaju", category: "apartma" },
  kuhinja2: { src: kuhinja2, alt: "Opremljena kuhinja v apartmaju", category: "apartma" },
  kopalnica: { src: kopalnica, alt: "Kopalnica s tušem in pralnim strojem", category: "apartma" },
  spalnica1: { src: spalnica1, alt: "Svetla spalnica z zakonsko posteljo", category: "apartma" },
  spalnica2: { src: spalnica2, alt: "Večja spalnica z zakonsko posteljo in omaro", category: "apartma" },
  spalnica3: { src: spalnica3, alt: "Spalnica z dodatnim ležiščem in televizorjem", category: "apartma" },
  spalnica4: { src: spalnica4, alt: "Spalnica z zakonsko posteljo", category: "apartma" },
} satisfies Record<string, Photo>;

export const allPhotos: Photo[] = Object.values(photos);

export const contact = {
  phoneDisplay: "+386 41 349 002",
  phoneHref: "tel:+38641349002",
  phonePerson: "Simon",
  email: "simon.ostanek@gmail.com",
  facebook: "https://www.facebook.com/share/19KGCuipdq/?mibextid=wwXIfr",
  address: "Selce 9, 6257 Pivka",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Miranda+bar+Selce+9+6257+Pivka",
  mapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Selce+9%2C+6257+Pivka",
  mapsEmbed: "https://www.google.com/maps?q=Miranda+bar,+Selce+9,+6257+Pivka&output=embed",
};

export const openingHours = [
  { days: "Pon., tor., sre., čet., ned.", open: "08.00", close: "02.00" },
  { days: "Pet., sob.", open: "08.00", close: "04.00" },
] as const;

export const apartment = {
  pricePerDay: 150,
  maxGuests: 7,
  bedrooms: 3,
};

export const distances = [
  { place: "Postojnska jama", time: "10 min", note: "8 km" },
  { place: "Koper", time: "30 min" },
  { place: "Ljubljana", time: "35 min" },
  { place: "Opatija (HR)", time: "45 min" },
];
