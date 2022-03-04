type TrendingTimeSpan = 'week' | 'day'
type Language = 'aa' | 'hy' | 'or' | 'ab' | 'hz' | 'os' | 'af' | 'id' | 'pa' | 'ak' | 'ig' | 'pl' | 'am' | 'ii' | 'ps' | 'an' | 'ik' | 'pt' | 'ar' | 'io' | 'qu' | 'as' | 'is' | 'rm' | 'av' | 'it' | 'rn' | 'ay' | 'iu' | 'ro' | 'az' | 'ja' | 'ru' | 'ba' | 'jv' | 'rw' | 'be' | 'ka' | 'sa' | 'bg' | 'kg' | 'sc' | 'bh' | 'ki' | 'sd' | 'bi' | 'kj' | 'se' | 'bm' | 'kk' | 'sg' | 'bn' | 'kl' | 'si' | 'bo' | 'km' | 'sk' | 'br' | 'kn' | 'sl' | 'bs' | 'ko' | 'sm' | 'ca' | 'kr' | 'sn' | 'ce' | 'ks' | 'so' | 'ch' | 'ku' | 'sq' | 'co' | 'kv' | 'sr' | 'cr' | 'kw' | 'ss' | 'cs' | 'ky' | 'st' | 'cv' | 'lb' | 'su' | 'cy' | 'lg' | 'sv' | 'da' | 'li' | 'sw' | 'de' | 'ln' | 'ta' | 'dv' | 'lo' | 'te' | 'dz' | 'lt' | 'tg' | 'ee' | 'lu' | 'th' | 'el' | 'lv' | 'ti' | 'en' | 'mg' | 'tk' | 'es' | 'mh' | 'tl' | 'et' | 'mi' | 'tn' | 'eu' | 'mk' | 'to' | 'fa' | 'ml' | 'tr' | 'ff' | 'mn' | 'ts' | 'fi' | 'mr' | 'tt' | 'fj' | 'ms' | 'tw' | 'fo' | 'mt' | 'ty' | 'fr' | 'my' | 'ug' | 'fy' | 'na' | 'uk' | 'ga' | 'nb' | 'ur' | 'gd' | 'nd' | 'uz' | 'gl' | 'ne' | 've' | 'gn' | 'ng' | 'vi' | 'gu' | 'nl' | 'wa' | 'gv' | 'nn' | 'wo' | 'ha' | 'no' | 'xh' | 'he' | 'nr' | 'yi' | 'hi' | 'nv' | 'yo' | 'ho' | 'ny' | 'za' | 'hr' | 'oc' | 'zh' | 'ht' | 'oj' | 'zu' | 'hu' | 'om'

interface KeywordResult {
  id: number;
  results: {
    id: number;
    name: string;
  }[]
}

export { TrendingTimeSpan, Language, KeywordResult };
