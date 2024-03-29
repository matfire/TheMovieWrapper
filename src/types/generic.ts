/* eslint-disable no-unused-vars */
type TrendingTimeSpan = 'week' | 'day'
type Language = 'aa' | 'hy' | 'or' | 'ab' | 'hz' | 'os' | 'af' | 'id' | 'pa' | 'ak' | 'ig' | 'pl' | 'am' | 'ii' | 'ps' | 'an' | 'ik' | 'pt' | 'ar' | 'io' | 'qu' | 'as' | 'is' | 'rm' | 'av' | 'it' | 'rn' | 'ay' | 'iu' | 'ro' | 'az' | 'ja' | 'ru' | 'ba' | 'jv' | 'rw' | 'be' | 'ka' | 'sa' | 'bg' | 'kg' | 'sc' | 'bh' | 'ki' | 'sd' | 'bi' | 'kj' | 'se' | 'bm' | 'kk' | 'sg' | 'bn' | 'kl' | 'si' | 'bo' | 'km' | 'sk' | 'br' | 'kn' | 'sl' | 'bs' | 'ko' | 'sm' | 'ca' | 'kr' | 'sn' | 'ce' | 'ks' | 'so' | 'ch' | 'ku' | 'sq' | 'co' | 'kv' | 'sr' | 'cr' | 'kw' | 'ss' | 'cs' | 'ky' | 'st' | 'cv' | 'lb' | 'su' | 'cy' | 'lg' | 'sv' | 'da' | 'li' | 'sw' | 'de' | 'ln' | 'ta' | 'dv' | 'lo' | 'te' | 'dz' | 'lt' | 'tg' | 'ee' | 'lu' | 'th' | 'el' | 'lv' | 'ti' | 'en' | 'mg' | 'tk' | 'es' | 'mh' | 'tl' | 'et' | 'mi' | 'tn' | 'eu' | 'mk' | 'to' | 'fa' | 'ml' | 'tr' | 'ff' | 'mn' | 'ts' | 'fi' | 'mr' | 'tt' | 'fj' | 'ms' | 'tw' | 'fo' | 'mt' | 'ty' | 'fr' | 'my' | 'ug' | 'fy' | 'na' | 'uk' | 'ga' | 'nb' | 'ur' | 'gd' | 'nd' | 'uz' | 'gl' | 'ne' | 've' | 'gn' | 'ng' | 'vi' | 'gu' | 'nl' | 'wa' | 'gv' | 'nn' | 'wo' | 'ha' | 'no' | 'xh' | 'he' | 'nr' | 'yi' | 'hi' | 'nv' | 'yo' | 'ho' | 'ny' | 'za' | 'hr' | 'oc' | 'zh' | 'ht' | 'oj' | 'zu' | 'hu' | 'om'

// eslint-disable-next-line no-shadow
enum Country {
  Afghanistan = 'AF',
  AlandIslands = 'AX',
  Albania = 'AL',
  Algeria = 'DZ',
  AmericanSamoa = 'AS',
  Andorra = 'AD',
  Angola = 'AO',
  Anguilla = 'AI',
  Antarctica = 'AQ',
  AntiguaAndBarbuda = 'AG',
  Argentina = 'AR',
  Armenia = 'AM',
  Aruba = 'AW',
  Australia = 'AU',
  Austria = 'AT',
  Azerbaijan = 'AZ',
  Bahamas = 'BS',
  Bahrain = 'BH',
  Bangladesh = 'BD',
  Barbados = 'BB',
  Belarus = 'BY',
  Belgium = 'BE',
  Belize = 'BZ',
  Benin = 'BJ',
  Bermuda = 'BM',
  Bhutan = 'BT',
  Bolivia = 'BO',
  BonaireSintEustatiusSaba = 'BQ',
  BosniaAndHerzegovina = 'BA',
  Botswana = 'BW',
  BouvetIsland = 'BV',
  Brazil = 'BR',
  BritishIndianOceanTerritory = 'IO',
  BruneiDarussalam = 'BN',
  Bulgaria = 'BG',
  BurkinaFaso = 'BF',
  Burundi = 'BI',
  Cambodia = 'KH',
  Cameroon = 'CM',
  Canada = 'CA',
  CapeVerde = 'CV',
  CaymanIslands = 'KY',
  CentralAfricanRepublic = 'CF',
  Chad = 'TD',
  Chile = 'CL',
  China = 'CN',
  ChristmasIsland = 'CX',
  CocosKeelingIslands = 'CC',
  Colombia = 'CO',
  Comoros = 'KM',
  Congo = 'CG',
  CongoDemocraticRepublic = 'CD',
  CookIslands = 'CK',
  CostaRica = 'CR',
  CoteDIvoire = 'CI',
  Croatia = 'HR',
  Cuba = 'CU',
  Curaçao = 'CW',
  Cyprus = 'CY',
  CzechRepublic = 'CZ',
  Denmark = 'DK',
  Djibouti = 'DJ',
  Dominica = 'DM',
  DominicanRepublic = 'DO',
  Ecuador = 'EC',
  Egypt = 'EG',
  ElSalvador = 'SV',
  EquatorialGuinea = 'GQ',
  Eritrea = 'ER',
  Estonia = 'EE',
  Ethiopia = 'ET',
  FalklandIslands = 'FK',
  FaroeIslands = 'FO',
  Fiji = 'FJ',
  Finland = 'FI',
  France = 'FR',
  FrenchGuiana = 'GF',
  FrenchPolynesia = 'PF',
  FrenchSouthernTerritories = 'TF',
  Gabon = 'GA',
  Gambia = 'GM',
  Georgia = 'GE',
  Germany = 'DE',
  Ghana = 'GH',
  Gibraltar = 'GI',
  Greece = 'GR',
  Greenland = 'GL',
  Grenada = 'GD',
  Guadeloupe = 'GP',
  Guam = 'GU',
  Guatemala = 'GT',
  Guernsey = 'GG',
  Guinea = 'GN',
  GuineaBissau = 'GW',
  Guyana = 'GY',
  Haiti = 'HT',
  HeardIslandMcdonaldIslands = 'HM',
  HolySeeVaticanCityState = 'VA',
  Honduras = 'HN',
  HongKong = 'HK',
  Hungary = 'HU',
  Iceland = 'IS',
  India = 'IN',
  Indonesia = 'ID',
  Iran = 'IR',
  Iraq = 'IQ',
  Ireland = 'IE',
  IsleOfMan = 'IM',
  Israel = 'IL',
  Italy = 'IT',
  Jamaica = 'JM',
  Japan = 'JP',
  Jersey = 'JE',
  Jordan = 'JO',
  Kazakhstan = 'KZ',
  Kenya = 'KE',
  Kiribati = 'KI',
  Korea = 'KR',
  KoreaDemocraticPeoplesRepublic = 'KP',
  Kuwait = 'KW',
  Kyrgyzstan = 'KG',
  LaoPeoplesDemocraticRepublic = 'LA',
  Latvia = 'LV',
  Lebanon = 'LB',
  Lesotho = 'LS',
  Liberia = 'LR',
  LibyanArabJamahiriya = 'LY',
  Liechtenstein = 'LI',
  Lithuania = 'LT',
  Luxembourg = 'LU',
  Macao = 'MO',
  Macedonia = 'MK',
  Madagascar = 'MG',
  Malawi = 'MW',
  Malaysia = 'MY',
  Maldives = 'MV',
  Mali = 'ML',
  Malta = 'MT',
  MarshallIslands = 'MH',
  Martinique = 'MQ',
  Mauritania = 'MR',
  Mauritius = 'MU',
  Mayotte = 'YT',
  Mexico = 'MX',
  Micronesia = 'FM',
  Moldova = 'MD',
  Monaco = 'MC',
  Mongolia = 'MN',
  Montenegro = 'ME',
  Montserrat = 'MS',
  Morocco = 'MA',
  Mozambique = 'MZ',
  Myanmar = 'MM',
  Namibia = 'NA',
  Nauru = 'NR',
  Nepal = 'NP',
  Netherlands = 'NL',
  NewCaledonia = 'NC',
  NewZealand = 'NZ',
  Nicaragua = 'NI',
  Niger = 'NE',
  Nigeria = 'NG',
  Niue = 'NU',
  NorfolkIsland = 'NF',
  NorthernMarianaIslands = 'MP',
  Norway = 'NO',
  Oman = 'OM',
  Pakistan = 'PK',
  Palau = 'PW',
  PalestinianTerritory = 'PS',
  Panama = 'PA',
  PapuaNewGuinea = 'PG',
  Paraguay = 'PY',
  Peru = 'PE',
  Philippines = 'PH',
  Pitcairn = 'PN',
  Poland = 'PL',
  Portugal = 'PT',
  PuertoRico = 'PR',
  Qatar = 'QA',
  Reunion = 'RE',
  Romania = 'RO',
  RussianFederation = 'RU',
  Rwanda = 'RW',
  SaintBarthelemy = 'BL',
  SaintHelena = 'SH',
  SaintKittsAndNevis = 'KN',
  SaintLucia = 'LC',
  SaintMartin = 'MF',
  SaintPierreAndMiquelon = 'PM',
  SaintVincentAndGrenadines = 'VC',
  Samoa = 'WS',
  SanMarino = 'SM',
  SaoTomeAndPrincipe = 'ST',
  SaudiArabia = 'SA',
  Senegal = 'SN',
  Serbia = 'RS',
  Seychelles = 'SC',
  SierraLeone = 'SL',
  Singapore = 'SG',
  SintMaarten = 'SX',
  Slovakia = 'SK',
  Slovenia = 'SI',
  SolomonIslands = 'SB',
  Somalia = 'SO',
  SouthAfrica = 'ZA',
  SouthGeorgiaAndSandwichIsl = 'GS',
  SouthSudan = 'SS',
  Spain = 'ES',
  SriLanka = 'LK',
  Sudan = 'SD',
  Suriname = 'SR',
  SvalbardAndJanMayen = 'SJ',
  Swaziland = 'SZ',
  Sweden = 'SE',
  Switzerland = 'CH',
  SyrianArabRepublic = 'SY',
  Taiwan = 'TW',
  Tajikistan = 'TJ',
  Tanzania = 'TZ',
  Thailand = 'TH',
  TimorLeste = 'TL',
  Togo = 'TG',
  Tokelau = 'TK',
  Tonga = 'TO',
  TrinidadAndTobago = 'TT',
  Tunisia = 'TN',
  Turkey = 'TR',
  Turkmenistan = 'TM',
  TurksAndCaicosIslands = 'TC',
  Tuvalu = 'TV',
  Uganda = 'UG',
  Ukraine = 'UA',
  UnitedArabEmirates = 'AE',
  UnitedKingdom = 'GB',
  UnitedStates = 'US',
  UnitedStatesOutlyingIslands = 'UM',
  Uruguay = 'UY',
  Uzbekistan = 'UZ',
  Vanuatu = 'VU',
  Venezuela = 'VE',
  Vietnam = 'VN',
  VirginIslandsBritish = 'VG',
  VirginIslandsUS = 'VI',
  WallisAndFutuna = 'WF',
  WesternSahara = 'EH',
  Yemen = 'YE',
  Zambia = 'ZM',
  Zimbabwe = 'ZW',
} // thank you kyranjamie

interface KeywordResult {
  id: number;
  results: {
    id: number;
    name: string;
  }[]
}

interface List {
  description ?: string;
  favorite_count : number;
  id: number;
  item_count : number;
  iso_639_1 : Language;
  list_type : string;
  name ?: string
  poster_path ?: string;
}

interface Response {
  status_code: number;
  status_message: string;
}

interface GenericListResult<T> {
  total_pages:number;
  total_results: number;
  page: number;
  results: T[]
}

interface Image {
  aspect_ration: number;
  file_path: string;
  height: number;
  iso_639_1: Language | null;
  vote_average: number;
  vote_count: number;
  width: number
}

interface Author {
  name: string;
  username: string;
  avatar_path : string | null;
  rating: number | null;
}

interface Person {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: number;
}

interface Cast extends Person {
  cast_id: number;
  character: string;
  order: number;
}

interface Crew extends Person {
  department: string;
  job: string;
}

interface Video {
  iso_639_1: Language;
iso_3166_1: Country;
name: string
key: string
site: string
size: number
type: string
official: boolean
published_at: Date
id : string
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCountry {
  iso_3166_1: Country;
  name: string;
}

interface ProductionCompany {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: Country;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: Language;
  name: string;
}

export {
  TrendingTimeSpan, Language, KeywordResult, List, Country, Response,
  GenericListResult, Image, Author, Cast, Crew, Video, Genre,
  ProductionCompany, ProductionCountry, SpokenLanguage,
};
