// Final legal texts for Himalayan Drop (English and Danish).
// Edit the wording here. Other languages show the English text for these pages.
// Each section is [heading, text]. In the text, a new line starts a new paragraph,
// and a line that starts with "- " becomes a bullet.
// Have these texts checked by a legal adviser before launch.

const ADDRESS = 'Himalayan Drop\nLyngbyvej 83A, København Ø, Denmark';
const EMAIL = 'Himalayandropinfo@gmail.com';

export const finalEn = {
  'terms-of-service': {
    final: true,
    title: 'Terms & conditions',
    sections: [
      ['About these terms', 'These terms apply to every purchase from the Himalayan Drop online shop. By placing an order you accept them. Last updated 7 November 2026.'],
      ['Who we are', `${ADDRESS}\nEmail: ${EMAIL}`],
      ['Products', 'Our products are food supplements. Follow the recommended daily dose on the label. They are not a substitute for a varied, balanced diet and a healthy lifestyle.'],
      ['Prices', 'All prices are in Danish kroner (DKK) and include VAT and taxes. Delivery costs are shown at checkout before you pay. The price at the time of your order is the price you pay: we may change prices from day to day, but a change never affects an order you have already placed. We reserve the right to correct obvious price errors, and to cancel an order for a product that is sold out or discontinued. If we do, you are refunded in full.'],
      ['Payment', 'You pay securely at our checkout, and the payment methods we accept are shown there. We never see or store your full card number.'],
      ['Delivery', 'Delivery countries, options, times and costs are shown at checkout before you pay. You can read more in our Shipping policy. The risk for the goods passes to you when you receive them.'],
      ['Subscribe & Save', 'A subscription is an ongoing agreement you choose actively on the product page. It renews automatically at the interval you choose (every 30, 60 or 90 days) at the subscription price shown, until you cancel. Each delivery is charged on its scheduled date with the payment method from your first order. There is no binding period: you can skip a delivery, change the interval or cancel at any time in your account, free of charge, and the change applies from your next order. If the price of a subscribed product changes, we tell you by email before your next delivery.'],
      ['Right of withdrawal and 60-day guarantee', 'As a consumer you have a statutory right of withdrawal for 14 days. On top of that, we give you a 60-day money-back guarantee on every product, for any reason. You pay the cost of sending the product back. The full details, the withdrawal form and how to return a product are in our Returns & 60-day guarantee policy.'],
      ['Complaints about defects', 'Under the Danish Sale of Goods Act you have a 2-year right to complain about defects in materials or workmanship. Depending on the situation, you can have the product replaced or repaired, get a refund, or receive a price reduction. The right does not cover damage caused by incorrect handling or storage.\nPlease tell us about a defect within a reasonable time after you find it. A complaint made within 2 months of finding the defect is always in time.\nIf a product is defective, damaged in transit or not what you ordered, we pay for the return. Write to us at ' + EMAIL + '.'],
      ['Your personal data', 'We handle your personal data as described in our Privacy & cookie policy.'],
      ['Disputes and complaints', 'We would like to solve any problem together, so please contact us first. If we cannot agree, you can complain to the Danish Center for Complaint Resolution (Center for Klageløsning), Carl Jacobsens Vej 35, 2500 Valby, www.forbrug.dk. If you live in another EU country, the European Consumer Centre Denmark (www.forbrugereuropa.dk) can help you.\nThese terms are governed by Danish law. The mandatory consumer protection rules of the country where you live still apply.'],
    ],
  },
  'refund-policy': {
    final: true,
    title: 'Returns & 60-day guarantee',
    sections: [
      ['Our 60-day guarantee', 'If you are not happy with your Himalayan Drop purchase, for any reason, you get your money back. The guarantee runs for 60 days from the day you receive your order. We want you to try our products with no risk, and our refund policy is built around that. Last updated 7 November 2026.'],
      ['How to use the guarantee', `Email us within the 60 days at ${EMAIL} with your order number and a short note that you would like to use the guarantee. We reply with the next steps. Opened and partly used products are covered too.`],
      ['Sending the product back', `You pay the cost of sending the product back to us. Please pack it carefully, enclose a copy of your order confirmation and send it to:\n${ADDRESS}\nPlease send it within 14 days after you have told us. We recommend a tracked service, because you carry the risk for the parcel until we receive it. We cannot accept parcels sent cash on delivery.`],
      ['Your refund', 'We refund the price of the product to the payment method you used for the order. We pay within 14 days after we received your message. We may wait until we have received the product, or until you show proof that you have sent it. The refund includes the original standard delivery cost when you use the statutory right of withdrawal below.'],
      ['Your statutory 14-day right of withdrawal', 'As a consumer you can also withdraw from your purchase within 14 days, without giving a reason. The 14 days start on the day you receive your order. If your order is delivered in several parcels, they start on the day you receive the last one.\nTell us clearly by email that you want to withdraw, and send the product back within 14 days after that. You can use the form below. You pay the cost of sending it back.\nFor sealed products that cannot be returned for health or hygiene reasons, the statutory right ends when the seal is broken. Our 60-day guarantee still covers them.\nIf a product has lost value because you handled it more than needed to see what it is and how it works, we may deduct that loss from the refund.'],
      ['Damaged or wrong product', 'If your order arrives damaged, defective or not what you ordered, write to us with your order number and a photo. We replace it or refund you, and we pay for the return.'],
      ['Withdrawal form', `To use your statutory right of withdrawal, copy this text and email it to ${EMAIL}:\nTo Himalayan Drop, Lyngbyvej 83A, København Ø: I hereby give notice that I withdraw from my contract for the sale of the following goods: [product]. Ordered on / received on: [date]. Order number: [number]. Name: [your name]. Address: [your address]. Date: [date].`],
    ],
  },
  'privacy-policy': {
    final: true,
    title: 'Privacy & cookie policy',
    sections: [
      ['Introduction', 'This policy explains what personal data Himalayan Drop collects when you visit our website, create an account, sign up for emails, contact us or buy from us, why we collect it, and what your rights are. It follows the EU General Data Protection Regulation (GDPR) and the Danish Data Protection Act. Last updated 7 November 2026.'],
      ['Who is responsible for your data', `The data controller is:\n${ADDRESS}\nEmail: ${EMAIL}\nWrite to us about anything in this policy, or if you want to use your rights.`],
      ['What we collect', '- Orders: your name, delivery and billing address, email, phone number, the products you buy and your order history. Payments are handled by our payment providers. We never see or store your full card number.\n- Account: your login email, an encrypted password and your Summit Rewards points.\n- Email signup: your email address, and the date and source of your consent.\n- Messages: what you write to us through our contact or distributor forms.\n- Technical data: IP address, device and browser type, and the pages you visit. With your consent only, cookies for statistics.'],
      ['Health information', 'We do not ask for health information. Please do not send health details through our forms. If you do, we use them only to answer your message and then delete them.'],
      ['Why we use your data, and our legal basis', '- To process, deliver and support your orders and your account (contract, GDPR art. 6(1)(b)).\n- To keep accounting records (legal obligation, art. 6(1)(c)).\n- To prevent fraud, keep the shop secure, improve the website and answer your questions (legitimate interest, art. 6(1)(f)).\n- To send newsletters and offers, and to use cookies that are not necessary (consent, art. 6(1)(a)).\nAs a customer you may receive emails from us about similar products, as the Danish Marketing Practices Act allows. You can always say no to them.'],
      ['Cookies', 'A cookie is a small text file that a website saves on your device. We also use your browser’s local storage, which works in a similar way. Necessary cookies keep the shop working: your cart, your login, whether you have answered our first-order offer, and secure checkout. Cookies for statistics are only used if you accept them, and you can change your choice at any time. You can also delete cookies in your browser settings, but the shop may then not work as intended. Our Cookie policy lists every cookie we use, what it is for and how long it lasts.'],
      ['Who we share your data with', 'Only with the companies that help us run the shop, under data processing agreements: our e-commerce and checkout platform (Shopify), website hosting (Vercel), payment providers, delivery partners, our email platform and, with your consent, Google Analytics. Authorities receive data only when the law requires it. We never sell your personal data.'],
      ['Transfers outside the EU/EEA', 'Some of these providers may process data outside the EU/EEA, for example in the United States or Canada. When they do, the transfer is protected by an EU adequacy decision (such as the EU-US Data Privacy Framework) or by the European Commission’s standard contractual clauses.'],
      ['How long we keep your data', '- Order and accounting records: 5 years from the end of the financial year, as the Danish Bookkeeping Act requires.\n- Account data: until you delete your account.\n- Email signup: until you unsubscribe.\n- Customer service messages: up to 3 years, in case of a complaint.\n- Cookies: as stated in our Cookie policy.'],
      ['Your rights', 'You have the right to see your data, to have it corrected or deleted, to restrict or object to its use (including direct marketing, at any time), to receive it in a portable format, and to withdraw your consent at any time. Write to us and we reply within one month.'],
      ['Complaints', 'If you are unhappy with how we handle your data, please contact us first. You can always complain to the Danish Data Protection Agency (Datatilsynet), Carl Jacobsens Vej 35, 2500 Valby, www.datatilsynet.dk.'],
      ['Children', 'Our products and website are meant for adults. We do not knowingly collect data from anyone under 18.'],
      ['Security', 'Data is sent over encrypted connections, access is limited to the people who need it, and we choose providers for their security standards. We protect your data against loss, misuse and unauthorised access.'],
      ['Changes to this policy', 'We update this policy when our services or the law change. The date at the top shows the latest version. We tell you about important changes by email or on the website.'],
    ],
  },
  'cookie-policy': {
    final: true,
    title: 'Cookie policy',
    sections: [
      ['What are cookies', 'Cookies are small text files that a website saves on your device. We also use your browser’s local storage, which works in a similar way. They help the shop work, remember your choices and, only if you agree, show us how the website is used. Last updated 7 November 2026.'],
      ['Your choice', 'Necessary cookies are always on, because the shop cannot work without them. All other cookies stay off until you accept them. You can withdraw your consent at any time by deleting cookies and site data in your browser settings, or by writing to us at ' + EMAIL + '.'],
      ['Necessary cookies', 'These do not need your consent.\n- hd_cart_id (local storage): remembers your cart. Kept until you clear your browser data.\n- hd_customer (local storage): keeps you logged in. Kept until it expires or you log out.\n- hd_offer_v1 (local storage): remembers your answer to our first-order offer, so we do not ask again. Kept until you clear your browser data.\n- Display choices (local storage): remember which layout you picked in a section of the site. Kept until you clear your browser data.\n- Shopify checkout cookies: run your cart, secure checkout and fraud protection. Kept for the session or up to one year.'],
      ['Analytics cookies, only with your consent', 'If you accept, we use Google Analytics to understand how the website is used: which pages are viewed, on what kind of device and from which country. This helps us improve the site. Google sets the cookies _ga and _ga_ followed by an ID, which are kept for up to 2 years. The data is processed by Google Ireland Limited and may be transferred to the United States under the EU-US Data Privacy Framework or standard contractual clauses. Until you accept, no analytics run.'],
      ['Marketing cookies', 'We do not use advertising or social-media tracking cookies at the moment. If that changes, we will ask for your consent first and update this page.'],
      ['More information', 'Read more about how we handle personal data in our Privacy & cookie policy. If you have a question, write to us at ' + EMAIL + '.'],
    ],
  },
};

export const finalDa = {
  'terms-of-service': {
    final: true,
    title: 'Handelsbetingelser',
    sections: [
      ['Om betingelserne', 'Disse betingelser gælder for alle køb i Himalayan Drops webshop. Når du afgiver en ordre, accepterer du dem. Senest opdateret 7. november 2026.'],
      ['Hvem vi er', `${ADDRESS.replace('Denmark', 'Danmark')}\nE-mail: ${EMAIL}`],
      ['Produkter', 'Vores produkter er kosttilskud. Følg den anbefalede daglige dosis på etiketten. Kosttilskud kan ikke erstatte en varieret og balanceret kost og en sund livsstil.'],
      ['Priser', 'Alle priser er i danske kroner (DKK) og inkluderer moms og afgifter. Fragtpris vises i checkout, før du betaler. Prisen på tidspunktet for din ordre er den pris, du betaler: vi kan ændre priser fra dag til dag, men en ændring påvirker aldrig en ordre, du allerede har afgivet. Vi forbeholder os ret til at rette åbenlyse prisfejl og til at annullere en ordre på en vare, der er udsolgt eller udgået. Gør vi det, får du hele beløbet tilbage.'],
      ['Betaling', 'Du betaler sikkert i vores checkout, og de betalingsmetoder, vi modtager, vises der. Vi ser eller gemmer aldrig dit fulde kortnummer.'],
      ['Levering', 'Leveringslande, leveringsmuligheder, leveringstid og fragtpris vises i checkout, før du betaler. Du kan læse mere i vores leveringspolitik. Risikoen for varen går over på dig, når du modtager den.'],
      ['Abonnér & Spar', 'Et abonnement er en løbende aftale, som du aktivt vælger på produktsiden. Det fornyes automatisk med det interval, du vælger (hver 30., 60. eller 90. dag), til den viste abonnementspris, indtil du opsiger det. Hver levering trækkes på den planlagte dato med betalingsmetoden fra din første ordre. Der er ingen binding: du kan springe en levering over, skifte interval eller opsige når som helst på din konto uden gebyr, og ændringen gælder fra din næste ordre. Hvis prisen på et produkt i dit abonnement ændres, giver vi dig besked på e-mail før din næste levering.'],
      ['Fortrydelsesret og 60 dages garanti', 'Som forbruger har du en lovbestemt fortrydelsesret på 14 dage. Derudover giver vi dig 60 dages penge-tilbage-garanti på alle produkter, uanset årsag. Du betaler selv for at sende varen tilbage. Alle detaljer, fortrydelsesformularen og hvordan du returnerer en vare står i vores politik for returnering og 60 dages garanti.'],
      ['Reklamationsret', 'Efter købeloven har du 2 års reklamationsret for fejl i materiale og udførelse. Afhængigt af situationen kan du få varen omleveret eller repareret, få pengene tilbage eller få et afslag i prisen. Reklamationsretten dækker ikke skader, der skyldes forkert håndtering eller opbevaring af varen.\nGiv os besked om en fejl inden for rimelig tid efter, at du har opdaget den. En reklamation inden for 2 måneder efter, at du har opdaget fejlen, er altid rettidig.\nEr en vare mangelfuld, beskadiget under forsendelsen eller ikke det, du har bestilt, betaler vi for returneringen. Skriv til os på ' + EMAIL + '.'],
      ['Dine personoplysninger', 'Vi behandler dine personoplysninger, som beskrevet i vores cookie- og privatlivspolitik.'],
      ['Tvister og klager', 'Vi vil gerne løse eventuelle problemer sammen med dig, så kontakt os først. Kan vi ikke blive enige, kan du klage til Center for Klageløsning, Carl Jacobsens Vej 35, 2500 Valby, www.forbrug.dk. Bor du i et andet EU-land, kan Forbrugereuropa (www.forbrugereuropa.dk) hjælpe dig.\nDisse betingelser er underlagt dansk ret. De ufravigelige forbrugerbeskyttelsesregler i det land, hvor du bor, gælder stadig.'],
    ],
  },
  'refund-policy': {
    final: true,
    title: 'Returnering og 60 dages garanti',
    sections: [
      ['Vores 60 dages garanti', 'Er du ikke tilfreds med dit køb hos Himalayan Drop, uanset årsag, får du pengene tilbage. Garantien gælder i 60 dage fra den dag, du modtager din ordre. Du skal kunne prøve vores produkter uden risiko, og vores refunderingspolitik er bygget op om det. Senest opdateret 7. november 2026.'],
      ['Sådan bruger du garantien', `Skriv til os på ${EMAIL} inden for de 60 dage med dit ordrenummer og en kort besked om, at du vil bruge garantien. Vi svarer med de næste skridt. Åbnede og delvist brugte produkter er også dækket.`],
      ['Send varen retur', `Du betaler selv for at sende varen tilbage til os. Pak den godt ind, læg en kopi af din ordrebekræftelse i pakken og send den til:\n${ADDRESS.replace('Denmark', 'Danmark')}\nSend den senest 14 dage efter, at du har givet os besked. Vi anbefaler en forsendelse med sporing, fordi du bærer risikoen for pakken, indtil vi har modtaget den. Vi kan ikke modtage pakker sendt pr. efterkrav.`],
      ['Din refundering', 'Vi refunderer varens pris til den betalingsmetode, du brugte til ordren. Vi betaler senest 14 dage efter, at vi har modtaget din besked. Vi kan vente, til vi har modtaget varen, eller til du har dokumenteret, at du har sendt den. Refunderingen omfatter den oprindelige almindelige levering, når du bruger den lovbestemte fortrydelsesret nedenfor.'],
      ['Din lovbestemte fortrydelsesret på 14 dage', 'Som forbruger kan du også fortryde dit køb inden for 14 dage uden at angive en grund. De 14 dage regnes fra den dag, du modtager din ordre. Leveres din ordre i flere pakker, regnes de fra den dag, du modtager den sidste.\nGiv os tydeligt besked på e-mail om, at du vil fortryde, og send varen tilbage senest 14 dage derefter. Du kan bruge formularen nedenfor. Du betaler selv for at sende den tilbage.\nFor forseglede varer, der af sundheds- eller hygiejnemæssige årsager ikke kan returneres, ophører den lovbestemte ret, når forseglingen er brudt. Vores 60 dages garanti dækker dem stadig.\nEr varen faldet i værdi, fordi du har håndteret den mere end nødvendigt for at se, hvad den er, og hvordan den fungerer, kan vi trække værdiforringelsen fra i refunderingen.'],
      ['Beskadiget eller forkert vare', 'Kommer din ordre beskadiget, mangelfuld eller ikke som bestilt, så skriv til os med dit ordrenummer og et billede. Vi sender en ny eller refunderer, og vi betaler for returneringen.'],
      ['Fortrydelsesformular', `Vil du bruge din lovbestemte fortrydelsesret, så kopier denne tekst og send den på e-mail til ${EMAIL}:\nTil Himalayan Drop, Lyngbyvej 83A, København Ø: Jeg meddeler herved, at jeg fortryder min købsaftale om følgende varer: [vare]. Bestilt den / modtaget den: [dato]. Ordrenummer: [nummer]. Navn: [dit navn]. Adresse: [din adresse]. Dato: [dato].`],
    ],
  },
  'privacy-policy': {
    final: true,
    title: 'Cookie- og privatlivspolitik',
    sections: [
      ['Introduktion', 'Denne politik forklarer, hvilke personoplysninger Himalayan Drop indsamler, når du besøger vores hjemmeside, opretter en konto, tilmelder dig e-mails, kontakter os eller handler hos os, hvorfor vi indsamler dem, og hvilke rettigheder du har. Den følger EU’s databeskyttelsesforordning (GDPR) og den danske databeskyttelseslov. Senest opdateret 7. november 2026.'],
      ['Dataansvarlig', `Den dataansvarlige er:\n${ADDRESS.replace('Denmark', 'Danmark')}\nE-mail: ${EMAIL}\nSkriv til os om alt i denne politik, eller hvis du vil bruge dine rettigheder.`],
      ['Hvad vi indsamler', '- Ordrer: dit navn, leverings- og faktureringsadresse, e-mail, telefonnummer, de produkter du køber og din ordrehistorik. Betalinger håndteres af vores betalingsudbydere. Vi ser eller gemmer aldrig dit fulde kortnummer.\n- Konto: din login-e-mail, en krypteret adgangskode og dine Summit Rewards-point.\n- E-mailtilmelding: din e-mailadresse samt dato og kilde for dit samtykke.\n- Beskeder: det, du skriver til os via kontakt- eller forhandlerformularen.\n- Tekniske data: IP-adresse, enheds- og browsertype og de sider, du besøger. Kun med dit samtykke: cookies til statistik.'],
      ['Helbredsoplysninger', 'Vi beder ikke om helbredsoplysninger. Send venligst ikke helbredsoplysninger via vores formularer. Gør du det alligevel, bruger vi dem kun til at besvare din besked og sletter dem derefter.'],
      ['Hvorfor vi bruger dine oplysninger, og vores retsgrundlag', '- For at behandle, levere og yde service på dine ordrer og din konto (kontrakt, GDPR art. 6, stk. 1, litra b).\n- For at opbevare regnskabsmateriale (retlig forpligtelse, litra c).\n- For at forebygge svindel, holde butikken sikker, forbedre hjemmesiden og besvare dine spørgsmål (legitim interesse, litra f).\n- For at sende nyhedsbreve og tilbud og bruge cookies, der ikke er nødvendige (samtykke, litra a).\nSom kunde kan du modtage e-mails fra os om lignende produkter, som markedsføringsloven tillader. Du kan altid frabede dig dem.'],
      ['Cookies', 'En cookie er en lille tekstfil, som en hjemmeside gemmer på din enhed. Vi bruger også din browsers lokale lagring, som fungerer på samme måde. Nødvendige cookies får butikken til at fungere: din kurv, dit login, om du har svaret på vores tilbud til første ordre, og sikker checkout. Cookies til statistik bruges kun, hvis du accepterer dem, og du kan til enhver tid ændre dit valg. Du kan også slette cookies i din browsers indstillinger, men så fungerer butikken måske ikke som tiltænkt. I vores cookiepolitik kan du se alle de cookies, vi bruger, hvad de bruges til, og hvor længe de gemmes.'],
      ['Hvem vi deler dine oplysninger med', 'Kun med de virksomheder, der hjælper os med at drive butikken, under databehandleraftaler: vores e-handels- og checkoutplatform (Shopify), hosting af hjemmesiden (Vercel), betalingsudbydere, fragtpartnere, vores e-mailplatform og, med dit samtykke, Google Analytics. Myndigheder får kun oplysninger, når loven kræver det. Vi sælger aldrig dine personoplysninger.'],
      ['Overførsel uden for EU/EØS', 'Nogle af disse udbydere kan behandle data uden for EU/EØS, for eksempel i USA eller Canada. Sker det, er overførslen beskyttet af en EU-tilstrækkelighedsafgørelse (som EU-US Data Privacy Framework) eller af EU-Kommissionens standardkontraktbestemmelser.'],
      ['Hvor længe vi gemmer dine oplysninger', '- Ordre- og regnskabsmateriale: 5 år fra udgangen af regnskabsåret, som bogføringsloven kræver.\n- Kontooplysninger: indtil du sletter din konto.\n- E-mailtilmelding: indtil du afmelder dig.\n- Kundeservicebeskeder: op til 3 år, hvis der skulle komme en reklamation.\n- Cookies: som angivet i vores cookiepolitik.'],
      ['Dine rettigheder', 'Du har ret til indsigt i dine oplysninger, til at få dem rettet eller slettet, til at begrænse eller gøre indsigelse mod brugen (også mod direkte markedsføring når som helst), til at få dem udleveret i et portabelt format og til at trække dit samtykke tilbage når som helst. Skriv til os, så svarer vi inden for en måned.'],
      ['Klage', 'Er du utilfreds med, hvordan vi behandler dine oplysninger, så kontakt os først. Du kan altid klage til Datatilsynet, Carl Jacobsens Vej 35, 2500 Valby, www.datatilsynet.dk.'],
      ['Børn', 'Vores produkter og hjemmeside er beregnet til voksne. Vi indsamler ikke bevidst oplysninger om personer under 18 år.'],
      ['Sikkerhed', 'Data sendes over krypterede forbindelser, adgangen er begrænset til de personer, der har brug for den, og vi vælger udbydere ud fra deres sikkerhedsstandarder. Vi beskytter dine oplysninger mod tab, misbrug og uautoriseret adgang.'],
      ['Ændringer i politikken', 'Vi opdaterer politikken, når vores tjenester eller lovgivningen ændrer sig. Datoen øverst viser den seneste version. Vi fortæller om væsentlige ændringer via e-mail eller på hjemmesiden.'],
    ],
  },
  'cookie-policy': {
    final: true,
    title: 'Cookiepolitik',
    sections: [
      ['Hvad er cookies', 'Cookies er små tekstfiler, som en hjemmeside gemmer på din enhed. Vi bruger også din browsers lokale lagring, som fungerer på samme måde. De hjælper butikken med at fungere, husker dine valg og, kun hvis du accepterer det, viser os, hvordan hjemmesiden bruges. Senest opdateret 7. november 2026.'],
      ['Dit valg', 'Nødvendige cookies er altid slået til, fordi butikken ikke kan fungere uden dem. Alle andre cookies forbliver slået fra, indtil du accepterer dem. Du kan til enhver tid trække dit samtykke tilbage ved at slette cookies og webstedsdata i din browsers indstillinger eller ved at skrive til os på ' + EMAIL + '.'],
      ['Nødvendige cookies', 'Disse kræver ikke dit samtykke.\n- hd_cart_id (lokal lagring): husker din kurv. Gemmes, indtil du rydder dine browserdata.\n- hd_customer (lokal lagring): holder dig logget ind. Gemmes, indtil den udløber, eller du logger ud.\n- hd_offer_v1 (lokal lagring): husker dit svar på vores tilbud til første ordre, så vi ikke spørger igen. Gemmes, indtil du rydder dine browserdata.\n- Visningsvalg (lokal lagring): husker, hvilket layout du har valgt i en sektion af siden. Gemmes, indtil du rydder dine browserdata.\n- Shopify-checkoutcookies: driver din kurv, sikker checkout og beskyttelse mod svindel. Gemmes under sessionen eller i op til et år.'],
      ['Statistikcookies, kun med dit samtykke', 'Hvis du accepterer, bruger vi Google Analytics til at forstå, hvordan hjemmesiden bruges: hvilke sider der ses, på hvilken slags enhed og fra hvilket land. Det hjælper os med at forbedre siden. Google sætter cookies med navnene _ga og _ga_ efterfulgt af et id, som gemmes i op til 2 år. Data behandles af Google Ireland Limited og kan overføres til USA under EU-US Data Privacy Framework eller standardkontraktbestemmelser. Indtil du accepterer, kører der ingen statistik.'],
      ['Markedsføringscookies', 'Vi bruger i øjeblikket ikke annonce- eller sociale mediers sporingscookies. Ændrer det sig, beder vi først om dit samtykke og opdaterer denne side.'],
      ['Mere information', 'Læs mere om, hvordan vi behandler personoplysninger, i vores cookie- og privatlivspolitik. Har du et spørgsmål, så skriv til os på ' + EMAIL + '.'],
    ],
  },
};
