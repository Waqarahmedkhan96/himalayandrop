// Policy TEMPLATES shown until Shopify is connected.
// Once connected, the policies you write in Shopify admin → Settings → Policies
// are shown instead. Have your final policies checked by a legal adviser.

import { policiesMore } from './policies-i18n';

export const policies = {
  'privacy-policy': {
    title: 'Privacy policy',
    sections: [
      ['Last updated', '20 October 2026. This policy explains how Himalayan Drop collects, uses and protects personal data when you visit our website, create an account, sign up for emails or buy from us. It is written to meet the EU General Data Protection Regulation (GDPR) and the Danish Data Protection Act.'],
      ['Who is responsible for your data', 'The data controller is Himalayan Drop, [legal company name], CVR no. [number], [street address, postcode, city], Denmark. Email: [privacy email]. Write to us about anything in this policy, or to use your rights.'],
      ['What we collect', 'Order data: name, delivery and billing address, email, phone number, the products you buy and your order history. Payment data is handled by our payment providers; we never see or store your full card number. Account data: login email, encrypted password, Summit Rewards points. Email sign-ups: your email address and the date and source of your consent. Messages: what you write to us through the contact or distributor forms. Technical data: IP address, device and browser type, pages viewed and, only with your consent, statistics and marketing cookies.'],
      ['Health information', 'We do not ask for health information. Please do not send health details through our forms; if you do, we use them only to answer your message and then delete them.'],
      ['Why we use it, and our legal basis', 'To process, deliver and support your orders and your account (contract, GDPR art. 6(1)(b)). To keep accounting records (legal obligation, art. 6(1)(c)). To prevent fraud, keep the shop secure, improve our website and answer questions (legitimate interests, art. 6(1)(f)). To send newsletters and offers, and to use non-essential cookies (consent, art. 6(1)(a)). As a customer, you may receive emails about similar products from us, as allowed by the Danish Marketing Practices Act; you can opt out at any time.'],
      ['Who we share it with', 'Only with the companies that help us run the shop, under data processing agreements: our e-commerce and checkout platform (Shopify), website hosting (Vercel), payment providers, delivery partners, our email platform and, with your consent, analytics and advertising services. Authorities receive data only where the law requires it. We never sell your personal data.'],
      ['Transfers outside the EU/EEA', 'Some of these providers may process data outside the EU/EEA, for example in the United States or Canada. When they do, the transfer is protected by an EU adequacy decision (such as the EU–US Data Privacy Framework) or by the European Commission’s Standard Contractual Clauses.'],
      ['How long we keep it', 'Order and accounting records: 5 years from the end of the financial year, as required by the Danish Bookkeeping Act. Account data: until you delete your account. Email sign-ups: until you unsubscribe. Customer service messages: up to 3 years, in case of a complaint. Cookies: as stated in the cookie overview.'],
      ['Your rights', 'You have the right to access your data, to have it corrected or deleted, to restrict or object to its use (including to direct marketing at any time), to receive it in a portable format and to withdraw consent at any time. Write to us and we will reply within one month.'],
      ['Complaints', 'If you are unhappy with how we handle your data, please contact us first. You can always complain to the Danish Data Protection Agency (Datatilsynet), Carl Jacobsens Vej 35, 2500 Valby, Denmark, www.datatilsynet.dk.'],
      ['Cookies and local storage', 'Necessary cookies and local storage keep the shop working: your cart, your language and whether you have answered our first-order offer. Statistics and marketing cookies are only set if you accept them, and you can change your choice at any time.'],
      ['Children', 'Our products and website are intended for adults. We do not knowingly collect data from anyone under 18.'],
      ['Security', 'Data is sent over encrypted connections, access is limited to the people who need it, and our providers are chosen for their security standards.'],
      ['Changes to this policy', 'We update this policy when our services or the law change. The date at the top shows the latest version; we will tell you about important changes by email or on the website.'],
    ],
  },
  'terms-of-service': {
    title: 'Terms & conditions',
    sections: [
      ['About these terms', 'These terms apply to all purchases from the Himalayan Drop online shop.'],
      ['Products', 'Our products are food supplements. Follow the recommended daily dose on the label. They are not a substitute for a varied, balanced diet and a healthy lifestyle.'],
      ['Prices and payment', 'Prices are shown in Danish kroner including VAT. Payment is taken securely through our checkout when you place your order.'],
      ['Delivery', 'Delivery options, times and costs are shown at checkout before you pay.'],
      ['Subscribe & Save', 'A subscription is an ongoing agreement you choose actively on the product page. It renews automatically at the interval you choose (every 30, 60 or 90 days) at the subscription price shown, until you cancel. Each delivery is charged on its scheduled date with the payment method from your first order. There is no binding period: you can skip a delivery, change the interval or cancel at any time in your account, free of charge, and the change applies from your next order. If the price of a subscribed product changes, we tell you by email before your next delivery.'],
      ['Right of withdrawal', 'As a consumer in the EU you have a 14-day right of withdrawal on unopened products. Our 60-day money-back guarantee goes further; see the Returns & guarantee policy.'],
      ['Complaints', 'If something is wrong with your order, contact us and we will put it right.'],
    ],
  },
  'shipping-policy': {
    title: 'Shipping policy',
    sections: [
      ['Where we ship', 'The countries we deliver to are listed at checkout.'],
      ['Processing', 'Orders are packed in protective packaging and handed to our delivery partner as soon as possible after payment.'],
      ['Costs and times', 'Shipping costs and estimated delivery times are shown at checkout before you pay.'],
      ['Tracking', 'You receive an email with tracking information when your order ships.'],
      ['Damaged parcels', 'If your order arrives damaged, send us a photo through our contact page and we will replace it.'],
    ],
  },
  'refund-policy': {
    title: 'Returns & 60-day guarantee',
    sections: [
      ['Our promise', 'If you are not satisfied with your Himalayan Drop purchase, contact us within 60 days of delivery and we will refund it.'],
      ['How to use the guarantee', 'Write to us through our contact page with your order number and a few words about your experience. We will reply with the next steps.'],
      ['Refunds', 'Approved refunds are paid back to your original payment method.'],
      ['Right of withdrawal', 'Your statutory 14-day right of withdrawal on unopened products applies in addition to this guarantee.'],
    ],
  },
};

export const policiesDa = {
  'privacy-policy': {
    title: 'Privatlivspolitik',
    sections: [
      ['Senest opdateret', '20. oktober 2026. Denne politik forklarer, hvordan Himalayan Drop indsamler, bruger og beskytter personoplysninger, når du besøger vores hjemmeside, opretter en konto, tilmelder dig e-mails eller handler hos os. Den følger EU’s databeskyttelsesforordning (GDPR) og den danske databeskyttelseslov.'],
      ['Dataansvarlig', 'Den dataansvarlige er Himalayan Drop, [virksomhedens juridiske navn], CVR-nr. [nummer], [adresse, postnummer, by], Danmark. E-mail: [privatlivs-e-mail]. Skriv til os om alt i denne politik, eller hvis du vil bruge dine rettigheder.'],
      ['Hvad vi indsamler', 'Ordreoplysninger: navn, leverings- og faktureringsadresse, e-mail, telefonnummer, de produkter du køber, og din ordrehistorik. Betalingsoplysninger håndteres af vores betalingsudbydere; vi ser eller gemmer aldrig dit fulde kortnummer. Kontooplysninger: login-e-mail, krypteret adgangskode og Summit Rewards-point. E-mailtilmelding: din e-mailadresse samt dato og kilde for dit samtykke. Beskeder: det, du skriver til os via kontakt- eller forhandlerformularen. Tekniske data: IP-adresse, enhed og browsertype, sete sider og, kun med dit samtykke, cookies til statistik og markedsføring.'],
      ['Helbredsoplysninger', 'Vi beder ikke om helbredsoplysninger. Send venligst ikke helbredsoplysninger via vores formularer; gør du det alligevel, bruger vi dem kun til at besvare din besked og sletter dem derefter.'],
      ['Hvorfor vi bruger dem, og vores retsgrundlag', 'For at behandle, levere og yde service på dine ordrer og din konto (kontrakt, GDPR art. 6, stk. 1, litra b). For at opbevare regnskabsmateriale (retlig forpligtelse, litra c). For at forebygge svindel, holde butikken sikker, forbedre hjemmesiden og besvare spørgsmål (legitim interesse, litra f). For at sende nyhedsbreve og tilbud og bruge ikke-nødvendige cookies (samtykke, litra a). Som kunde kan du modtage e-mails om lignende produkter fra os, som markedsføringsloven tillader; du kan altid frabede dig dem.'],
      ['Hvem vi deler dem med', 'Kun med de virksomheder, der hjælper os med at drive butikken, under databehandleraftaler: vores e-handels- og checkoutplatform (Shopify), hosting af hjemmesiden (Vercel), betalingsudbydere, fragtpartnere, vores e-mailplatform og, med dit samtykke, analyse- og annonceringstjenester. Myndigheder får kun oplysninger, når loven kræver det. Vi sælger aldrig dine personoplysninger.'],
      ['Overførsel uden for EU/EØS', 'Nogle af disse udbydere kan behandle data uden for EU/EØS, for eksempel i USA eller Canada. Sker det, er overførslen beskyttet af en EU-tilstrækkelighedsafgørelse (som EU-US Data Privacy Framework) eller af EU-Kommissionens standardkontraktbestemmelser.'],
      ['Hvor længe vi gemmer dem', 'Ordre- og regnskabsmateriale: 5 år fra udgangen af regnskabsåret, som bogføringsloven kræver. Kontooplysninger: indtil du sletter din konto. E-mailtilmelding: indtil du afmelder dig. Kundeservicebeskeder: op til 3 år i tilfælde af en reklamation. Cookies: som angivet i cookieoversigten.'],
      ['Dine rettigheder', 'Du har ret til indsigt i dine oplysninger, til at få dem rettet eller slettet, til at begrænse eller gøre indsigelse mod brugen (også mod direkte markedsføring når som helst), til at få dem udleveret i et portabelt format og til at trække dit samtykke tilbage når som helst. Skriv til os, så svarer vi inden for en måned.'],
      ['Klage', 'Er du utilfreds med, hvordan vi behandler dine oplysninger, så kontakt os først. Du kan altid klage til Datatilsynet, Carl Jacobsens Vej 35, 2500 Valby, www.datatilsynet.dk.'],
      ['Cookies og lokal lagring', 'Nødvendige cookies og lokal lagring får butikken til at fungere: din kurv, dit sprog, og om du har svaret på vores tilbud til første ordre. Cookies til statistik og markedsføring sættes kun, hvis du accepterer dem, og du kan altid ændre dit valg.'],
      ['Børn', 'Vores produkter og hjemmeside er beregnet til voksne. Vi indsamler ikke bevidst oplysninger om personer under 18 år.'],
      ['Sikkerhed', 'Data sendes over krypterede forbindelser, adgangen er begrænset til de personer, der har brug for den, og vores udbydere er valgt ud fra deres sikkerhedsstandarder.'],
      ['Ændringer i politikken', 'Vi opdaterer politikken, når vores tjenester eller lovgivningen ændrer sig. Datoen øverst viser den seneste version; vi fortæller om væsentlige ændringer via e-mail eller på hjemmesiden.'],
    ],
  },
  'terms-of-service': {
    title: 'Handelsbetingelser',
    sections: [
      ['Om betingelserne', 'Disse betingelser gælder for alle køb i Himalayan Drops webshop.'],
      ['Produkter', 'Vores produkter er kosttilskud. Følg den anbefalede daglige dosis på etiketten. Kosttilskud kan ikke erstatte en varieret og balanceret kost og en sund livsstil.'],
      ['Priser og betaling', 'Priser vises i danske kroner inklusive moms. Betalingen gennemføres sikkert i vores checkout, når du afgiver din ordre.'],
      ['Levering', 'Leveringsmuligheder, leveringstid og fragtpris vises i checkout, før du betaler.'],
      ['Abonnér & Spar', 'Et abonnement er en løbende aftale, som du aktivt vælger på produktsiden. Det fornyes automatisk med det interval, du vælger (hver 30., 60. eller 90. dag), til den viste abonnementspris, indtil du opsiger det. Hver levering trækkes på den planlagte dato med betalingsmetoden fra din første ordre. Der er ingen binding: du kan springe en levering over, skifte interval eller opsige når som helst på din konto uden gebyr, og ændringen gælder fra din næste ordre. Hvis prisen på et produkt i dit abonnement ændres, giver vi dig besked på e-mail før din næste levering.'],
      ['Fortrydelsesret', 'Som forbruger i EU har du 14 dages fortrydelsesret på uåbnede varer. Vores 60 dages penge-tilbage-garanti går videre; se politikken for returnering og garanti.'],
      ['Reklamation', 'Er der noget galt med din ordre, så kontakt os, og vi retter op på det.'],
    ],
  },
  'shipping-policy': {
    title: 'Leveringspolitik',
    sections: [
      ['Hvor vi leverer', 'De lande, vi leverer til, står i checkout.'],
      ['Ekspedition', 'Ordrer pakkes i beskyttende emballage og afleveres til vores fragtpartner hurtigst muligt efter betaling.'],
      ['Pris og leveringstid', 'Fragtpris og forventet leveringstid vises i checkout, før du betaler.'],
      ['Sporing', 'Du får en e-mail med sporingsinformation, når din ordre er afsendt.'],
      ['Beskadigede pakker', 'Kommer din ordre beskadiget frem, så send os et billede via kontaktsiden, og vi sender en ny.'],
    ],
  },
  'refund-policy': {
    title: 'Returnering og 60 dages garanti',
    sections: [
      ['Vores løfte', 'Er du ikke tilfreds med dit køb hos Himalayan Drop, så kontakt os inden for 60 dage efter levering, og vi refunderer købet.'],
      ['Sådan bruger du garantien', 'Skriv til os via kontaktsiden med dit ordrenummer og et par ord om din oplevelse. Vi svarer med de næste skridt.'],
      ['Refundering', 'Godkendte refunderinger betales tilbage til den betalingsmetode, du brugte.'],
      ['Fortrydelsesret', 'Din lovbestemte 14 dages fortrydelsesret på uåbnede varer gælder ud over denne garanti.'],
    ],
  },
};

export const getPolicies = (lang) => (lang === 'da' ? policiesDa : policiesMore[lang] || policies);
