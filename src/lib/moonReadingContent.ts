// Sadržaj za personalizovano TEKST čitanje po znaku + pravi Payhip linkovi (izvučeno sa payhip.com/astromesec)

export function normalizeSignKey(v: string): string {
  const key = (v || "").toLowerCase().trim();
  const map: Record<string, string> = {
    aries: "aries",
    taurus: "taurus",
    gemini: "gemini",
    cancer: "cancer",
    leo: "leo",
    virgo: "virgo",
    libra: "libra",
    scorpio: "scorpio",
    sagittarius: "sagittarius",
    capricorn: "capricorn",
    aquarius: "aquarius",
    pisces: "pisces",
    ovan: "aries",
    bik: "taurus",
    blizanci: "gemini",
    rak: "cancer",
    lav: "leo",
    devica: "virgo",
    vaga: "libra",
    skorpija: "scorpio",
    strelac: "sagittarius",
    jarac: "capricorn",
    vodolija: "aquarius",
    ribe: "pisces",
  };
  return map[key] || "taurus";
}

export const signLabels: Record<string, string> = {
  aries: "Ovan",
  taurus: "Bik",
  gemini: "Blizanci",
  cancer: "Rak",
  leo: "Lav",
  virgo: "Devica",
  libra: "Vaga",
  scorpio: "Škorpija",
  sagittarius: "Strelac",
  capricorn: "Jarac",
  aquarius: "Vodolija",
  pisces: "Ribe",
};

export const signIcons: Record<string, string> = {
  aries: "♈",
  taurus: "♉",
  gemini: "♊",
  cancer: "♋",
  leo: "♌",
  virgo: "♍",
  libra: "♎",
  scorpio: "♏",
  sagittarius: "♐",
  capricorn: "♑",
  aquarius: "♒",
  pisces: "♓",
};

// Pravi Payhip proizvodi, izvučeni sa https://payhip.com/astromesec
export const buyLinks: Record<string, string> = {
  aries: "https://payhip.com/b/fc4dL",
  taurus: "https://payhip.com/b/SyfsI",
  gemini: "https://payhip.com/b/L9RJT",
  cancer: "https://payhip.com/b/jZslA",
  leo: "https://payhip.com/b/c8yDV",
  virgo: "https://payhip.com/b/8LRwe",
  libra: "https://payhip.com/b/l0bYz",
  scorpio: "https://payhip.com/b/k1Xz6",
  sagittarius: "https://payhip.com/b/ug3mn",
  capricorn: "https://payhip.com/b/34Ae9",
  aquarius: "https://payhip.com/b/ACNjr",
  pisces: "https://payhip.com/b/vdIec",
};

interface SignProfile {
  element: string;
  ruler: string;
  opening: (name: string) => string;
  love: (name: string) => string;
  money: (name: string) => string;
  lockedTeaser: (name: string) => string;
}

const profiles: Record<string, SignProfile> = {
  aries: {
    element: "Vatra",
    ruler: "Mars",
    opening: (n) =>
      `${n}, tvoj Mesec je trenutno u fazi koja pojačava nemir koji već neko vreme osećaš. Ti si osoba koja kreće brzo, odlučuje instinktivno i mrzi da čeka — ali poslednjih nedelja kao da nešto koči taj tvoj prirodni tempo. To nije slučajnost. Mesečeva energija te trenutno gura da uspori i sagleda nešto što si dugo izbegavao/la da pogledaš.`,
    love: (n) =>
      `U ljubavi, ${n}, tvoj problem retko je nedostatak strasti — tvoj problem je što praviš odluke u sekundi, pa se posle pitaš da li si požurio/la. Privlače te ljudi koji ti pruže izazov, ali upravo ti isti ljudi znaju da nestanu kad im daš sve karte na sto prerano. Postoji osoba (ili situacija) o kojoj razmišljaš čak i kad ne želiš — i Mesec upravo sad osvetljava zašto se ona stalno vraća u tvoje misli.`,
    money: (n) =>
      `Kad je novac u pitanju, ${n}, tvoja hrabrost ume da bude i najveća prednost i najveći curenje resursa. Skačeš u prilike brzo, ali strpljenje da ih dovedeš do kraja — to ti nedostaje. Poslednjih meseci si verovatno primetio/la da novac dolazi, ali i odlazi brže nego što bi trebalo, i da postoji jedan konkretan "curenje" koje ponavljaš u krug, a ne priznaješ ga sebi.`,
    lockedTeaser: (n) =>
      `Postoji tačan datum u narednih 90 dana kada se tvoja energija menja i kada Mars prestaje da te gura u pogrešnom pravcu, ${n}. To je trenutak kada treba da preduzmeš konkretan korak — i tvoje puno čitanje ti govori tačno koji.`,
  },
  taurus: {
    element: "Zemlja",
    ruler: "Venera",
    opening: (n) =>
      `${n}, ti si znak koji gradi polako i ne voli da mu neko diktira tempo — ali trenutna Mesečeva pozicija stavlja pritisak baš na to tvoje strpljenje. Osećaš potrebu za sigurnošću, a istovremeno ti se čini da nešto u tvom životu stoji u mestu duže nego što bi trebalo. To nije znak da nešto ne valja — to je znak da se sprema pomak.`,
    love: (n) =>
      `U vezama, ${n}, ti daješ sve — vreme, pažnju, lojalnost — ali retko tražiš isto zauzvrat, dok se to u tebi polako gomila kao tiha ogorčenost. Postoji osoba u tvom životu prema kojoj osećaš nešto što nisi naglas priznao/la, jer se plašiš da ćeš, ako progovoriš, izgubiti kontrolu nad situacijom koju si pažljivo gradio/la.`,
    money: (n) =>
      `Kada je novac u pitanju, ${n}, ti si po prirodi štediša — ali imaš jednu naviku koja ti tiho prazni račun, nešto što radiš iz "zaslužio/la sam" osećaja, a zapravo je konstantno curenje. Istovremeno, sediš na prilici ili resursu koji nisi iskoristio/la iz straha da ne rizikuješ ono što si već izgradio/la.`,
    lockedTeaser: (n) =>
      `Venera se u narednom periodu pomera na način koji direktno utiče na tvoje finansije i jednu vezu koju trenutno preispituješ, ${n}. Tvoje puno čitanje pokazuje tačno kada i kako da reaguješ, umesto da samo čekaš da se stvari same reše.`,
  },
  gemini: {
    element: "Vazduh",
    ruler: "Merkur",
    opening: (n) =>
      `${n}, tvoj um trenutno radi na dvadeset stvari odjednom, a to je tačno ono što te iscrpljuje. Mesec u ovoj fazi pojačava tvoju potrebu za promenom i razgovorom, ali i produbljuje onaj osećaj da nešto važno stalno odlažeš jer ti pažnja beži na sve strane osim na to jedno pitanje koje te zapravo najviše muči.`,
    love: (n) =>
      `U ljubavi, ${n}, tvoj najveći problem nije nedostatak interesovanja — problem je što brzo izgubiš fokus čim stvari postanu previše ozbiljne ili previše predvidljive. Postoji razgovor koji izbegavaš sa nekim ko ti je važan, jer se plašiš da će iskrenost promeniti dinamiku koja ti trenutno odgovara — ali upravo ta neizrečena stvar te najviše kopka noću.`,
    money: (n) =>
      `Sa novcem, ${n}, tvoj obrazac je jasan: previše opcija, premalo fokusa. Imaš nekoliko ideja ili izvora prihoda u glavi istovremeno, ali energija ti se rasipa pa nijedna ne dobije punu pažnju koju zaslužuje. Postoji jedna konkretna prilika koju si već razmatrao/la, a koju stalno odgađaš zbog straha da ćeš pogrešno izabrati.`,
    lockedTeaser: (n) =>
      `Merkur uskoro menja pravac na način koji direktno utiče na tu odluku koju odlažeš, ${n}. Tvoje puno čitanje ti pokazuje koja je od tvojih trenutnih opcija zapravo prava, a koje su samo bekstvo od dosade.`,
  },
  cancer: {
    element: "Voda",
    ruler: "Mesec",
    opening: (n) =>
      `${n}, ti si znak kojim direktno vlada Mesec, što znači da trenutna Mesečeva faza deluje na tebe jače nego na bilo koji drugi znak. Osećaš pojačanu emotivnost, možda i nervozu bez jasnog razloga — to je zato što tvoje telo i intuicija već "znaju" nešto što tvoj racionalni um još nije spreman da prizna.`,
    love: (n) =>
      `U vezama, ${n}, ti štitiš svoje srce iza zidova koje retko ko probije, a onda se povrediš kada osoba kojoj si konačno verovao/la ne uzvrati istom merom. Trenutno postoji neko ko zauzima previše prostora u tvojim mislima — ili neko iz prošlosti čije prisustvo (ili odsustvo) i dalje utiče na to kako se ponašaš u sadašnjoj vezi.`,
    money: (n) =>
      `Kad je novac u pitanju, ${n}, tvoje odluke su vezane za emocije više nego što priznaješ — trošiš ili štediš u zavisnosti od raspoloženja, a ne od plana. Postoji trošak koji ponavljaš kad se osećaš nesigurno, i to je tačno ono što te sprečava da napraviš finansijski pomak koji znaš da zaslužuješ.`,
    lockedTeaser: (n) =>
      `Uskoro dolazi mesec kada tvoja intuicija postaje izuzetno jaka i kada je najbolje vreme da doneseš odluku koju odlažeš, ${n}. Tvoje puno čitanje ti pokazuje tačno o čemu je reč i kako da prepoznaš pravi trenutak.`,
  },
  leo: {
    element: "Vatra",
    ruler: "Sunce",
    opening: (n) =>
      `${n}, ti si stvoren/a da zračiš, ali poslednjih nedelja kao da ti neko krade svetlo — osećaš da daješ više nego što dobijaš nazad, u priznanju, pažnji ili poštovanju. Trenutna Mesečeva pozicija te tera da preispitaš gde tačno trošiš svoju energiju, a gde bi trebalo da postaviš granicu.`,
    love: (n) =>
      `U ljubavi, ${n}, tebi je potrebno da se osećaš viđeno i cenjeno — a kad to izostane, povučeš se ili glumiš da ti ne smeta, iako iznutra gori. Postoji osoba koja ne pruža pažnju kakvu zaslužuješ, i deo tebe zna da čekaš da se ona promeni umesto da priznaš da možda čekaš pogrešnu osobu.`,
    money: (n) =>
      `Kad je novac u pitanju, ${n}, voliš da živiš dobro i to ume da te košta — trošiš na status, izgled, utisak koji ostavljaš, dok neka realnija prilika za rast ostaje po strani. Postoji projekat ili ideja u koju veruješ, ali se plašiš da je pokažeš svetu iz straha od odbijanja.`,
    lockedTeaser: (n) =>
      `Sunce uskoro osvetljava tačno onu oblast tvog života gde ti najviše treba priznanje, ${n}. Tvoje puno čitanje ti pokazuje kako da preuzmeš prostor koji ti pripada, umesto da čekaš da ti ga neko ponudi.`,
  },
  virgo: {
    element: "Zemlja",
    ruler: "Merkur",
    opening: (n) =>
      `${n}, tvoj um analizira svaki detalj, svaku moguću grešku — i to je tvoja supersposeba, ali i tvoj najveći teret. Trenutna Mesečeva faza pojačava tu unutrašnju kritiku, pa se osećaš kao da ništa što radiš nije dovoljno dobro, iako spolja izgledaš potpuno sabrano.`,
    love: (n) =>
      `U vezama, ${n}, ti pokazuješ ljubav kroz brigu i konkretna dela, ali retko tražiš isto zauzvrat — pa se osećaš neviđeno kad partner ne primeti sve što radiš. Postoji nešto što si primetio/la kod osobe koja ti je važna, sitnica koja te muči, ali je stalno racionalizuješ umesto da je otvoreno pomeneš.`,
    money: (n) =>
      `Sa novcem, ${n}, ti si praktičan/na i vodiš računa, ali imaš jednu naviku — analizu paralize. Toliko dugo proveravaš svaku opciju da propustiš pravi trenutak za akciju, a onda kriviš sebe zbog toga. Postoji finansijska odluka koju već mesecima odlažeš dok "ne budeš 100% siguran/na".`,
    lockedTeaser: (n) =>
      `Merkur ti u narednom periodu daje jasnoću koja ti nedostaje za tu odluku, ${n}. Tvoje puno čitanje pokazuje tačno koji je sledeći praktičan korak, bez potrebe da sve analiziraš do besvesti.`,
  },
  libra: {
    element: "Vazduh",
    ruler: "Venera",
    opening: (n) =>
      `${n}, ti mrziš neravnotežu, a poslednjih nedelja kao da ti se sve oko tebe čini neusklađeno — u vezama, na poslu, čak i iznutra. Trenutna Mesečeva pozicija te gura da konačno napraviš izbor koji dugo izbegavaš, jer se plašiš da svaka odluka znači da nekog razočaraš.`,
    love: (n) =>
      `U ljubavi, ${n}, tvoj najveći problem je što se toliko trudiš da izbegneš sukob da često ućutiš ono što zaista osećaš. Postoji situacija u kojoj glumiš da ti je sve u redu, iako duboko u sebi znaš da nešto ne funkcioniše onako kako bi trebalo — i ta neusklađenost te iscrpljuje više nego što priznaješ.`,
    money: (n) =>
      `Kad je novac u pitanju, ${n}, voliš lepe stvari i harmoniju, ali to ume da te odvede u trošenje "da bi sve izgledalo lepo" umesto da bude praktično. Postoji odluka koju deliš sa nekim drugim (partnerom, poslovnim partnerom) gde izbegavaš da kažeš šta zaista misliš, a to te finansijski košta.`,
    lockedTeaser: (n) =>
      `Venera uskoro donosi period u kom ti postaje mnogo lakše da kažeš šta zaista želiš, ${n}. Tvoje puno čitanje ti pokazuje tačno kako da to iskoristiš pre nego što prilika prođe.`,
  },
  scorpio: {
    element: "Voda",
    ruler: "Pluton / Mars",
    opening: (n) =>
      `${n}, ti osećaš stvari duboko, čak i kad to spolja ne pokazuješ — a trenutna Mesečeva faza pojačava tu intenzivnost do tačke gde ti je teško da razmišljaš o bilo čemu drugom. Nešto se u tebi trenutno transformiše, ali proces je neprijatan jer zahteva da pustiš kontrolu koju inače čvrsto držiš.`,
    love: (n) =>
      `U vezama, ${n}, ti voliš potpuno ili nikako, a poluljubav ti je gora od samoće. Problem je što retko dozvoljavaš nekome da vidi tvoju ranjivost dok ne budeš potpuno siguran/na da neće zloupotrebiti to poverenje — a ta odbrana često odbije upravo one koji bi zaslužili šansu. Postoji tajna ili sumnja koju nosiš vezanu za nekog bliskog, a koju nisi izgovorio/la naglas.`,
    money: (n) =>
      `Kad je novac u pitanju, ${n}, ti razmišljaš strateški i voliš kontrolu — ali kad izgubiš tu kontrolu (nepredviđen trošak, tuđa odluka koja te pogodi), reaguješ intenzivnije nego što je potrebno. Postoji finansijska situacija u koju sumnjaš, osećaj da ti nešto nije transparentno rečeno, i taj osećaj obično ne laže.`,
    lockedTeaser: (n) =>
      `Pluton trenutno pokreće duboku transformaciju u jednoj oblasti tvog života koju već osećaš, ${n}. Tvoje puno čitanje ti pokazuje šta tačno treba da pustiš da bi ono novo moglo da dođe.`,
  },
  sagittarius: {
    element: "Vatra",
    ruler: "Jupiter",
    opening: (n) =>
      `${n}, ti si stvoren/a za slobodu i širinu, a poslednjih nedelja se osećaš zarobljeno — u obavezi, rutini ili odnosu koji ti oduzima vazduh. Trenutna Mesečeva pozicija pojačava tu potrebu za bekstvom, ali pre nego što nešto naglo promeniš, Mesec te podseća da prvo pogledaš od čega zapravo bežiš.`,
    love: (n) =>
      `U ljubavi, ${n}, tvoj najveći strah nije usamljenost — to je osećaj zarobljenosti. Čim veza počne da liči na obavezu, tvoj instinkt je da se povučeš, a to zbunjuje ljude koji te vole. Postoji osoba prema kojoj osećaš nešto stvarno, ali te plaši koliko to "stvarno" zvuči, pa ga guraš u stranu šalom ili distancom.`,
    money: (n) =>
      `Sa novcem, ${n}, ti veruješ da će se stvari nekako "posložiti" i to ti ponekad da hrabrost da rizikuješ pametno — a ponekad te odvede u nepromišljeno trošenje na iskustva umesto na sigurnost. Postoji plan ili putovanje koje odlažeš iz finansijskih razloga, dok istovremeno trošiš na sitnice koje ti zapravo ne donose radost koju tražiš.`,
    lockedTeaser: (n) =>
      `Jupiter se uskoro pomera na način koji ti otvara vrata koja su dugo bila zatvorena, ${n}. Tvoje puno čitanje ti pokazuje tačno gde i kako da to iskoristiš pre nego što prozor prilike ponovo prođe.`,
  },
  capricorn: {
    element: "Zemlja",
    ruler: "Saturn",
    opening: (n) =>
      `${n}, ti nosiš odgovornost kao da je to tvoj posao od rođenja, a poslednjih nedelja osećaš da je taj teret teži nego inače. Trenutna Mesečeva faza te podseća da uspeh koji gradiš neće imati smisla ako u međuvremenu izgoriš — a deo tebe to zna, iako nastavljaš da guraš dalje.`,
    love: (n) =>
      `U vezama, ${n}, ti pokazuješ posvećenost kroz stabilnost i planove za budućnost, ali retko govoriš o osećanjima naglas — pa te partneri ponekad doživljavaju kao hladnijeg/u nego što zaista jesi. Postoji neko ko čeka da mu pokažeš makar malo ranjivosti, a ti se plašiš da će to biti protumačeno kao slabost.`,
    money: (n) =>
      `Kad je novac u pitanju, ${n}, ti si najdisciplinovaniji znak zodijaka — ali imaš tendenciju da odlažeš uživanje "dok ne postigneš dovoljno", a ta linija se stalno pomera. Postoji prilika za rast koju analiziraš već predugo, jer čekaš da bude "sigurna", a savršeno siguran trenutak retko postoji.`,
    lockedTeaser: (n) =>
      `Saturn u narednom periodu nagrađuje tačno onaj trud koji ulažeš, ${n}, ali samo ako napraviš jedan konkretan potez. Tvoje puno čitanje ti pokazuje koji je taj potez i kada je pravi trenutak za njega.`,
  },
  aquarius: {
    element: "Vazduh",
    ruler: "Uran",
    opening: (n) =>
      `${n}, ti gledaš na svet drugačije od većine ljudi oko sebe, i to je tvoja snaga — ali ponekad se zbog toga osećaš usamljeno, čak i okružen/a ljudima. Trenutna Mesečeva pozicija pojačava tu potrebu za autentičnošću, i podseća te da nešto u tvom životu više ne odgovara ko si postao/la.`,
    love: (n) =>
      `U ljubavi, ${n}, tebi treba prostor i sloboda više nego bilo kom drugom znaku, a kad ih ne dobiješ, emotivno se distanciraš iako fizički ostaješ prisutan/na. Postoji osoba koja te voli, ali ne razume tu tvoju potrebu za samostalnošću, i ta nesrazmera stvara tihu napetost koju obojica osećate, a niko je ne pominje.`,
    money: (n) =>
      `Sa novcem, ${n}, tebe manje zanima gomilanje, a više sloboda koju ti novac omogućava — što je zdrav stav, ali ponekad znači da zapostaviš dugoročno planiranje. Postoji neobičan ili nekonvencionalan izvor prihoda koji razmatraš, a plašiš se da ti okolina neće razumeti taj izbor.`,
    lockedTeaser: (n) =>
      `Uran uskoro donosi neočekivanu priliku baš u oblasti gde si najviše želeo/la promenu, ${n}. Tvoje puno čitanje ti pokazuje kako da je prepoznaš na vreme, umesto da je propustiš jer deluje "prerizično".`,
  },
  pisces: {
    element: "Voda",
    ruler: "Neptun",
    opening: (n) =>
      `${n}, ti osećaš i tuđe emocije kao svoje, a poslednjih nedelja je taj teret veći nego inače — teško ti je da razdvojiš šta je stvarno tvoje, a šta si "pokupio/la" od ljudi oko sebe. Trenutna Mesečeva faza te podseća koliko ti je potrebno da postaviš granicu, čak i sa onima koje najviše voliš.`,
    love: (n) =>
      `U ljubavi, ${n}, ti voliš bezuslovno i ponekad idealizuješ osobu pre nego što je stvarno upoznaš, a onda te stvarnost razočara. Postoji neko u tvom životu kome daješ više razumevanja nego što ti je vraćeno, i deo tebe zna to, iako pravdaš to njihovim "dobrim namerama".`,
    money: (n) =>
      `Kad je novac u pitanju, ${n}, tvoja intuicija je jaka, ali granice su ti ponekad zamagljene — pozajmljuješ, pomažeš, daješ, a zaboravljaš sebe u toj priči. Postoji trošak koji praviš da bi pobegao/la od stvarnosti (kupovina, izlasci, "nagrada" sebi) kad se osećaš preplavljeno, a to te tiho košta više nego što misliš.`,
    lockedTeaser: (n) =>
      `Neptun u narednom periodu jača tvoju intuiciju do tačke gde ćeš tačno znati kome možeš da veruješ, ${n}. Tvoje puno čitanje ti pokazuje kako da tu jasnoću iskoristiš pre nego što ponovo dozvoliš da te neko iskoristi.`,
  },
};

export function getSignProfile(zodiacSign: string): SignProfile {
  const key = normalizeSignKey(zodiacSign);
  return profiles[key] || profiles.taurus;
}
