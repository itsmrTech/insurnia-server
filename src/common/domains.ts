import * as TLDParser from 'tld-extract';

export const dictionary = [
  { iso: 'AF', country: 'Afghanistan', tld: '.af' },
  { iso: 'AL', country: 'Albania', tld: '.al' },
  { iso: 'DZ', country: 'Algeria', tld: '.dz' },
  { iso: 'AS', country: 'American Samoa', tld: '.as' },
  { iso: 'AD', country: 'Andorra', tld: '.ad' },
  { iso: 'AO', country: 'Angola', tld: '.ao' },
  { iso: 'AI', country: 'Anguilla', tld: '.ai' },
  { iso: 'AQ', country: 'Antarctica', tld: '.aq' },
  { iso: 'AG', country: 'Antigua and Barbuda', tld: '.ag' },
  { iso: 'AR', country: 'Argentina', tld: '.ar' },
  { iso: 'AM', country: 'Armenia', tld: '.am' },
  { iso: 'AW', country: 'Aruba', tld: '.aw' },
  { iso: 'AU', country: 'Australia', tld: '.au' },
  { iso: 'AT', country: 'Austria', tld: '.at' },
  { iso: 'AZ', country: 'Azerbaijan', tld: '.az' },
  { iso: 'BS', country: 'Bahamas', tld: '.bs' },
  { iso: 'BH', country: 'Bahrain', tld: '.bh' },
  { iso: 'BD', country: 'Bangladesh', tld: '.bd' },
  { iso: 'BB', country: 'Barbados', tld: '.bb' },
  { iso: 'BY', country: 'Belarus', tld: '.by' },
  { iso: 'BE', country: 'Belgium', tld: '.be' },
  { iso: 'BZ', country: 'Belize', tld: '.bz' },
  { iso: 'BJ', country: 'Benin', tld: '.bj' },
  { iso: 'BM', country: 'Bermuda', tld: '.bm' },
  { iso: 'BT', country: 'Bhutan', tld: '.bt' },
  { iso: 'BO', country: 'Bolivia', tld: '.bo' },
  { iso: 'BA', country: 'Bosnia and Herzegovina', tld: '.ba' },
  { iso: 'BW', country: 'Botswana', tld: '.bw' },
  { iso: 'BV', country: 'Bouvet Island', tld: '.bv' },
  { iso: 'BR', country: 'Brazil', tld: '.br' },
  { iso: 'IO', country: 'British Indian Ocean Territory', tld: '.io' },
  { iso: 'BG', country: 'Bulgaria', tld: '.bg' },
  { iso: 'BF', country: 'Burkina Faso', tld: '.bf' },
  { iso: 'BI', country: 'Burundi', tld: '.bi' },
  { iso: 'KH', country: 'Cambodia', tld: '.kh' },
  { iso: 'CM', country: 'Cameroon', tld: '.cm' },
  { iso: 'CA', country: 'Canada', tld: '.ca' },
  { iso: 'CV', country: 'Cape Verde', tld: '.cv' },
  { iso: 'KY', country: 'Cayman Islands', tld: '.ky' },
  { iso: 'CF', country: 'Central African Republic', tld: '.cf' },
  { iso: 'TD', country: 'Chad', tld: '.td' },
  { iso: 'CL', country: 'Chile', tld: '.cl' },
  { iso: 'CN', country: 'China', tld: '.cn' },
  { iso: 'CX', country: 'Christmas Island', tld: '.cx' },
  { iso: 'CC', country: 'Cocos (Keeling) Islands', tld: '.cc' },
  { iso: 'CO', country: 'Colombia', tld: '.co' },
  { iso: 'KM', country: 'Comoros', tld: '.km' },
  { iso: 'CG', country: 'Congo', tld: '.cg' },
  { iso: 'CK', country: 'Cook Islands', tld: '.ck' },
  { iso: 'CR', country: 'Costa Rica', tld: '.cr' },
  { iso: 'HR', country: 'Croatia', tld: '.hr' },
  { iso: 'CU', country: 'Cuba', tld: '.cu' },
  { iso: 'CY', country: 'Cyprus', tld: '.cy' },
  { iso: 'CZ', country: 'Czech Republic', tld: '.cz' },
  { iso: 'DK', country: 'Denmark', tld: '.dk' },
  { iso: 'DJ', country: 'Djibouti', tld: '.dj' },
  { iso: 'DM', country: 'Dominica', tld: '.dm' },
  { iso: 'DO', country: 'Dominican Republic', tld: '.do' },
  { iso: 'EC', country: 'Ecuador', tld: '.ec' },
  { iso: 'EG', country: 'Egypt', tld: '.eg' },
  { iso: 'SV', country: 'El Salvador', tld: '.sv' },
  { iso: 'GQ', country: 'Equatorial Guinea', tld: '.gq' },
  { iso: 'ER', country: 'Eritrea', tld: '.er' },
  { iso: 'EE', country: 'Estonia', tld: '.ee' },
  { iso: 'ET', country: 'Ethiopia', tld: '.et' },
  { iso: 'FI', country: 'Finland', tld: '.fi' },
  { iso: 'FR', country: 'France', tld: '.fr' },
  { iso: 'GF', country: 'French Guiana', tld: '.gf' },
  { iso: 'PF', country: 'French Polynesia', tld: '.pf' },
  { iso: 'TF', country: 'French Southern territories', tld: '.tf' },
  { iso: 'GA', country: 'Gabon', tld: '.ga' },
  { iso: 'GM', country: 'Gambia', tld: '.gm' },
  { iso: 'GE', country: 'Georgia', tld: '.ge' },
  { iso: 'DE', country: 'Germany', tld: '.de' },
  { iso: 'GH', country: 'Ghana', tld: '.gh' },
  { iso: 'GI', country: 'Gibraltar', tld: '.gi' },
  { iso: 'GR', country: 'Greece', tld: '.gr' },
  { iso: 'GL', country: 'Greenland', tld: '.gl' },
  { iso: 'GD', country: 'Grenada', tld: '.gd' },
  { iso: 'GP', country: 'Guadeloupe', tld: '.gp' },
  { iso: 'GU', country: 'Guam', tld: '.gu' },
  { iso: 'GT', country: 'Guatemala', tld: '.gt' },
  { iso: 'GN', country: 'Guinea', tld: '.gn' },
  { iso: 'GW', country: 'Guinea-Bissau', tld: '.gw' },
  { iso: 'GY', country: 'Guyana', tld: '.gy' },
  { iso: 'HT', country: 'Haiti', tld: '.ht' },
  { iso: 'VA', country: 'Holy See (Vatican City State)', tld: '.va' },
  { iso: 'HN', country: 'Honduras', tld: '.hn' },
  { iso: 'HK', country: 'Hong Kong', tld: '.hk' },
  { iso: 'HU', country: 'Hungary', tld: '.hu' },
  { iso: 'IS', country: 'Iceland', tld: '.is' },
  { iso: 'IN', country: 'India', tld: '.in' },
  { iso: 'ID', country: 'Indonesia', tld: '.id' },
  { iso: 'IQ', country: 'Iraq', tld: '.iq' },
  { iso: 'IE', country: 'Ireland', tld: '.ie' },
  { iso: 'IL', country: 'Israel', tld: '.il' },
  { iso: 'IT', country: 'Italy', tld: '.it' },
  { iso: 'JM', country: 'Jamaica', tld: '.jm' },
  { iso: 'JP', country: 'Japan', tld: '.jp' },
  { iso: 'JO', country: 'Jordan', tld: '.jo' },
  { iso: 'KZ', country: 'Kazakhstan', tld: '.kz' },
  { iso: 'KE', country: 'Kenya', tld: '.ke' },
  { iso: 'KI', country: 'Kiribati', tld: '.ki' },
  { iso: 'KW', country: 'Kuwait', tld: '.kw' },
  { iso: 'KG', country: 'Kyrgyzstan', tld: '.kg' },
  { iso: 'LV', country: 'Latvia', tld: '.lv' },
  { iso: 'LB', country: 'Lebanon', tld: '.lb' },
  { iso: 'LS', country: 'Lesotho', tld: '.ls' },
  { iso: 'LR', country: 'Liberia', tld: '.lr' },
  { iso: 'LY', country: 'Libyan Arab Jamahiriya', tld: '.ly' },
  { iso: 'LI', country: 'Liechtenstein', tld: '.li' },
  { iso: 'LT', country: 'Lithuania', tld: '.lt' },
  { iso: 'LU', country: 'Luxembourg', tld: '.lu' },
  { iso: 'MO', country: 'Macao', tld: '.mo' },
  { iso: 'MG', country: 'Madagascar', tld: '.mg' },
  { iso: 'MW', country: 'Malawi', tld: '.mw' },
  { iso: 'MY', country: 'Malaysia', tld: '.my' },
  { iso: 'MV', country: 'Maldives', tld: '.mv' },
  { iso: 'ML', country: 'Mali', tld: '.ml' },
  { iso: 'MT', country: 'Malta', tld: '.mt' },
  { iso: 'MH', country: 'Marshall Islands', tld: '.mh' },
  { iso: 'MQ', country: 'Martinique', tld: '.mq' },
  { iso: 'MR', country: 'Mauritania', tld: '.mr' },
  { iso: 'MU', country: 'Mauritius', tld: '.mu' },
  { iso: 'YT', country: 'Mayotte', tld: '.yt' },
  { iso: 'MX', country: 'Mexico', tld: '.mx' },
  { iso: 'MD', country: 'Moldova', tld: '.md' },
  { iso: 'MC', country: 'Monaco', tld: '.mc' },
  { iso: 'MN', country: 'Mongolia', tld: '.mn' },
  { iso: 'MS', country: 'Montserrat', tld: '.ms' },
  { iso: 'MA', country: 'Morocco', tld: '.ma' },
  { iso: 'MZ', country: 'Mozambique', tld: '.mz' },
  { iso: 'MM', country: 'Myanmar', tld: '.mm' },
  { iso: 'NA', country: 'Namibia', tld: '.na' },
  { iso: 'NR', country: 'Nauru', tld: '.nr' },
  { iso: 'NP', country: 'Nepal', tld: '.np' },
  { iso: 'NL', country: 'Netherlands', tld: '.nl' },
  { iso: 'AN', country: 'Netherlands Antilles', tld: '.an' },
  { iso: 'NC', country: 'New Caledonia', tld: '.nc' },
  { iso: 'NZ', country: 'New Zealand', tld: '.nz' },
  { iso: 'NI', country: 'Nicaragua', tld: '.ni' },
  { iso: 'NE', country: 'Niger', tld: '.ne' },
  { iso: 'NG', country: 'Nigeria', tld: '.ng' },
  { iso: 'NU', country: 'Niue', tld: '.nu' },
  { iso: 'NF', country: 'Norfolk Island', tld: '.nf' },
  { iso: 'MP', country: 'Northern Mariana Islands', tld: '.mp' },
  { iso: 'NO', country: 'Norway', tld: '.no' },
  { iso: 'OM', country: 'Oman', tld: '.om' },
  { iso: 'PK', country: 'Pakistan', tld: '.pk' },
  { iso: 'PW', country: 'Palau', tld: '.pw' },
  { iso: 'PA', country: 'Panama', tld: '.pa' },
  { iso: 'PG', country: 'Papua New Guinea', tld: '.pg' },
  { iso: 'PY', country: 'Paraguay', tld: '.py' },
  { iso: 'PE', country: 'Peru', tld: '.pe' },
  { iso: 'PH', country: 'Philippines', tld: '.ph' },
  { iso: 'PN', country: 'Pitcairn', tld: '.pn' },
  { iso: 'PL', country: 'Poland', tld: '.pl' },
  { iso: 'PT', country: 'Portugal', tld: '.pt' },
  { iso: 'PR', country: 'Puerto Rico', tld: '.pr' },
  { iso: 'QA', country: 'Qatar', tld: '.qa' },
  { iso: 'RE', country: 'Reunion', tld: '.re' },
  { iso: 'RO', country: 'Romania', tld: '.ro' },
  { iso: 'RU', country: 'Russian Federation', tld: '.ru' },
  { iso: 'RW', country: 'Rwanda', tld: '.rw' },
  { iso: 'SH', country: 'Saint Helena', tld: '.sh' },
  { iso: 'KN', country: 'Saint Kitts and Nevis', tld: '.kn' },
  { iso: 'LC', country: 'Saint Lucia', tld: '.lc' },
  { iso: 'PM', country: 'Saint Pierre and Miquelon', tld: '.pm' },
  { iso: 'WS', country: 'Samoa', tld: '.ws' },
  { iso: 'SM', country: 'San Marino', tld: '.sm' },
  { iso: 'ST', country: 'Sao Tome and Principe', tld: '.st' },
  { iso: 'SA', country: 'Saudi Arabia', tld: '.sa' },
  { iso: 'SN', country: 'Senegal', tld: '.sn' },
  { iso: 'RS', country: 'Serbia', tld: '.rs' },
  { iso: 'SC', country: 'Seychelles', tld: '.sc' },
  { iso: 'SL', country: 'Sierra Leone', tld: '.sl' },
  { iso: 'SG', country: 'Singapore', tld: '.sg' },
  { iso: 'SK', country: 'Slovakia', tld: '.sk' },
  { iso: 'SI', country: 'Slovenia', tld: '.si' },
  { iso: 'SB', country: 'Solomon Islands', tld: '.sb' },
  { iso: 'SO', country: 'Somalia', tld: '.so' },
  { iso: 'ZA', country: 'South Africa', tld: '.za' },
  { iso: 'ES', country: 'Spain', tld: '.es' },
  { iso: 'LK', country: 'Sri Lanka', tld: '.lk' },
  { iso: 'SD', country: 'Sudan', tld: '.sd' },
  { iso: 'SR', country: 'Suriname', tld: '.sr' },
  { iso: 'SJ', country: 'Svalbard and Jan Mayen', tld: '.sj' },
  { iso: 'SZ', country: 'Swaziland', tld: '.sz' },
  { iso: 'SE', country: 'Sweden', tld: '.se' },
  { iso: 'CH', country: 'Switzerland', tld: '.ch' },
  { iso: 'TJ', country: 'Tajikistan', tld: '.tj' },
  { iso: 'TZ', country: 'Tanzania', tld: '.tz' },
  { iso: 'TH', country: 'Thailand', tld: '.th' },
  { iso: 'TG', country: 'Togo', tld: '.tg' },
  { iso: 'TK', country: 'Tokelau', tld: '.tk' },
  { iso: 'TO', country: 'Tonga', tld: '.to' },
  { iso: 'TT', country: 'Trinidad and Tobago', tld: '.tt' },
  { iso: 'TN', country: 'Tunisia', tld: '.tn' },
  { iso: 'TR', country: 'Turkey', tld: '.tr' },
  { iso: 'TM', country: 'Turkmenistan', tld: '.tm' },
  { iso: 'TC', country: 'Turks and Caicos Islands', tld: '.tc' },
  { iso: 'TV', country: 'Tuvalu', tld: '.tv' },
  { iso: 'UG', country: 'Uganda', tld: '.ug' },
  { iso: 'UA', country: 'Ukraine', tld: '.ua' },
  { iso: 'AE', country: 'United Arab Emirates', tld: '.ae' },
  { iso: 'GB', country: 'United Kingdom', tld: '.gb' },
  { iso: 'US', country: 'United States', tld: '.us' },
  { iso: 'UY', country: 'Uruguay', tld: '.uy' },
  { iso: 'UZ', country: 'Uzbekistan', tld: '.uz' },
  { iso: 'VU', country: 'Vanuatu', tld: '.vu' },
  { iso: 'VE', country: 'Venezuela', tld: '.ve' },
  { iso: 'VN', country: 'Vietnam', tld: '.vn' },
  { iso: 'WF', country: 'Wallis and Futuna', tld: '.wf' },
  { iso: 'EH', country: 'Western Sahara', tld: '.eh' },
  { iso: 'YE', country: 'Yemen', tld: '.ye' },
  { iso: 'ZM', country: 'Zambia', tld: '.zm' },
  { iso: 'ZW', country: 'Zimbabwe', tld: '.zw' },
];
export const getCountryByUrl = (url: string) => {
  const parsedDomain = TLDParser(url);
  return dictionary.find((dic) => dic.tld === `.${parsedDomain.tld}`);
};
