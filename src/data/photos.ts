import { Cloudinary } from '@cloudinary/url-gen';
import { quality, format } from '@cloudinary/url-gen/actions/delivery';
import { fill, scale } from '@cloudinary/url-gen/actions/resize';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';

export const cld = new Cloudinary({
  cloud: { cloudName: 'b9wkiwrj' },
});

export const getThumbnail = (publicId: string) =>
  cld.image(publicId)
    .resize(fill().width(600))
    .delivery(quality(auto()))
    .delivery(format(autoFormat()));

export const getFullRes = (publicId: string) =>
  cld.image(publicId)
    .resize(scale().width(2000))
    .delivery(quality(auto()))
    .delivery(format(autoFormat()));

export interface Photo {
  id: string;
  publicId: string;
  landscape: boolean;
}

export interface PhotoGroup {
  name: string;
  photos: Photo[];
  layout?: 'default' | 'triangle-inverted' | 'triangle-inverted-tail' | 'triangle-left' | 'triangle-right' | 'triangle-down' | 'triangle-up' | 'row' | 'staggered' | 'centered-cascade' | 'centered-stack' | 'cascade-align' | 'cascade-align-3' | 'top-center-then-staggered';
  rowAspect?: string; // e.g. '2/3' or '3/2'
}

// Landscape public IDs derived from Cloudinary resource dimensions
const landscapeIds = new Set([
  'DSCF2327_syg04w', 'DSCF7287_vth4zm', 'DSCF7341_ykvbqm', 'DSCF7674_v7larh',
  'DSCF6582_dguuqb', 'DSCF6712_kl2nu7', 'DSCF6670_ywu6al', 'DSCF6711_avzxt9',
  'DSCF5823_rfwbkk', 'DSCF2312_eylm30', 'DSCF3080_t95fmh', 'DSCF2070_cshobo',
  'DSCF2747_pfbd95', 'DSCF2026_ualskc', 'DSCF3071_jzshb7', 'DSCF2751_hquzhi',
  'DSCF1114_q4wu8y', 'DSCF0332_dulx9g', 'DSCF0350_zadnho',
  'imgonline-com-ua-CompressToSize-9ZpzXtucIu_hkza4z',
  'DSCF7309_lhw1wm', 'DSCF1730-2_mjuixv', 'DSCF1619_n8vsvm',
  'photo31_mxfdng', 'photo14_tuvaas', 'photo10_z1pmxz', 'photo26_ynbfgx',
  'photo43_ljxk4b', 'photo32_sfhvbs', 'photo19_fh4s6p', 'photo8_c9jquq',
  'photo6_xpk6ek', 'photo25_iwpjzy', 'photo37_dnax0u', 'photo9_od6sya',
  'photo33_deuvdz', 'photo35_tzdzf7', 'photo40_ao5mwu', 'photo29_w7wcpr',
  'photo21_xqprcx', 'photo34_c5z2xr', 'photo18_pttdnf', 'photo7_iae7ku',
  'photo20_put7dm',
]);

export const photoGroups: PhotoGroup[] = [
  { name: 'group1',  photos: ['DSCF6636_vkujzt', 'DSCF0463_m74gmj', 'DSCF0359_fetri7', 'DSCF1112_zbr4vi'] },
  { name: 'group2',  photos: ['DSCF7674_v7larh', 'DSCF3080_t95fmh', 'DSCF2070_cshobo', 'DSCF2026_ualskc'] },
  { name: 'group3',  photos: ['DSCF2747_pfbd95', 'DSCF1114_q4wu8y', 'imgonline-com-ua-CompressToSize-9ZpzXtucIu_hkza4z', 'DSCF1730-2_mjuixv'] },
  { name: 'group4',  photos: ['DSCF3071_jzshb7', 'DSCF0350_zadnho', 'DSCF1619_n8vsvm'] },
  { name: 'group5',  photos: ['photo3_p9sehn', 'photo2_lqbjpz', 'photo4_b2xgmm'] },
  { name: 'group6',  photos: ['photo8_c9jquq', 'photo9_od6sya', 'photo1_pn1dmk'], layout: 'triangle-left' },
  { name: 'group7',  photos: ['photo14_tuvaas', 'photo7_iae7ku'] },
  { name: 'group8',  photos: ['photo19_fh4s6p', 'photo27_pu9set', 'photo21_xqprcx'], layout: 'triangle-down' },
  { name: 'group9',  photos: ['photo33_deuvdz', 'photo35_tzdzf7', 'photo29_w7wcpr'] },
  { name: 'group10', photos: ['photo22_vj0wjb', 'photo28_gxmhbe'], layout: 'row', rowAspect: '2/3' },
  { name: 'group11', photos: ['photo16_kakfiq', 'photo15_bpeait', 'photo13_qvb8ln'], layout: 'row' },
  { name: 'group12', photos: ['photo18_pttdnf', 'photo10_z1pmxz', 'photo23_mvahlv', 'photo25_iwpjzy', 'photo40_ao5mwu'], layout: 'staggered' },
  { name: 'group13', photos: ['photo12_hpgnc4', 'photo5_m8nuvm', 'photo6_xpk6ek'], layout: 'triangle-up' },
  { name: 'group14', photos: ['photo26_ynbfgx', 'photo30_ekgr4a'], layout: 'centered-cascade' },
  { name: 'group15', photos: ['photo31_mxfdng', 'photo37_dnax0u', 'photo43_ljxk4b', 'photo32_sfhvbs'], layout: 'centered-stack' },
  { name: 'group16', photos: ['photo39_r2f233', 'photo36_yr1d4z', 'photo38_ptb7in'], layout: 'row' },
  { name: 'group17', photos: ['DSCF2327_syg04w', 'DSCF5823_rfwbkk', 'DSCF1107_a1z6ki'], layout: 'triangle-right' },
  { name: 'group18', photos: ['DSCF1309_pxkwni', 'fqs_2025-01-15_105156.995_h9jnbl', 'DSCF2312_eylm30'], layout: 'triangle-up' },
  { name: 'group19', photos: ['DSCF6667_u3m7zi', 'DSCF6659_s2gvsq', 'DSCF6712_kl2nu7', 'DSCF6670_ywu6al'], layout: 'triangle-inverted-tail' },
  { name: 'group20', photos: ['DSCF6711_avzxt9', 'DSCF6627_tduoeq', 'DSCF6622_sc2kvo', 'DSCF6683_eijzif'], layout: 'cascade-align' },
  { name: 'group21_0', photos: ['DSCF7685_d3bxu4', 'DSCF7678_lk56fy', 'DSCF7720_h0qm5x'], layout: 'cascade-align-3' },
  { name: 'group21', photos: ['DSCF7310_e6jrtm', 'DSCF7287_vth4zm', 'DSCF7341_ykvbqm', 'DSCF7309_lhw1wm'], layout: 'top-center-then-staggered' },
  { name: 'group22', photos: ['DSCF7565_ei10fk', 'DSCF7697_tuzlgf', 'DSCF7710_cu3lsr'], layout: 'cascade-align-3' },
].map(g => ({
  name: g.name,
  layout: g.layout,
  rowAspect: g.rowAspect,
  photos: g.photos.map(publicId => ({
    id: publicId,
    publicId,
    landscape: landscapeIds.has(publicId),
  })),
}));

// Flat list for modal navigation
export const photos: Photo[] = photoGroups.flatMap(g => g.photos);
