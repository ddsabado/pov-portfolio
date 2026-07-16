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
}

export interface PhotoGroup {
  name: string;
  photos: Photo[];
}

export const photoGroups: PhotoGroup[] = [
  { name: 'group1',  photos: ['DSCF6636_vkujzt', 'DSCF0463_m74gmj', 'DSCF0359_fetri7', 'DSCF1112_zbr4vi'] },
  { name: 'group2',  photos: ['DSCF7674_v7larh', 'DSCF3080_t95fmh', 'DSCF2070_cshobo', 'DSCF2026_ualskc'] },
  { name: 'group3',  photos: ['DSCF2747_pfbd95', 'DSCF1114_q4wu8y', 'imgonline-com-ua-CompressToSize-9ZpzXtucIu_hkza4z', 'DSCF1730-2_mjuixv'] },
  { name: 'group4',  photos: ['DSCF3071_jzshb7', 'DSCF0350_zadnho', 'DSCF1619_n8vsvm'] },
  { name: 'group5',  photos: ['photo3_p9sehn', 'photo2_lqbjpz', 'photo4_b2xgmm'] },
  { name: 'group6',  photos: ['photo8_c9jquq', 'photo9_od6sya', 'photo1_pn1dmk'] },
  { name: 'group7',  photos: ['photo14_tuvaas', 'photo7_iae7ku'] },
  { name: 'group8',  photos: ['photo19_fh4s6p', 'photo27_pu9set', 'photo21_xqprcx'] },
  { name: 'group9',  photos: ['photo33_deuvdz', 'photo35_tzdzf7', 'photo29_w7wcpr'] },
  { name: 'group10', photos: ['photo22_vj0wjb', 'photo28_gxmhbe'] },
  { name: 'group11', photos: ['photo16_kakfiq', 'photo15_bpeait', 'photo13_qvb8ln'] },
  { name: 'group12', photos: ['photo10_z1pmxz', 'photo23_mvahlv', 'photo25_iwpjzy', 'photo40_ao5mwu', 'photo18_pttdnf'] },
  { name: 'group13', photos: ['photo5_m8nuvm', 'photo12_hpgnc4', 'photo6_xpk6ek'] },
  { name: 'group14', photos: ['photo26_ynbfgx', 'photo32_sfhvbs', 'photo30_ekgr4a'] },
  { name: 'group15', photos: ['photo31_mxfdng', 'photo43_ljxk4b', 'photo37_dnax0u'] },
  { name: 'group16', photos: ['photo36_yr1d4z', 'photo38_ptb7in', 'photo39_r2f233'] },
  { name: 'group17', photos: ['DSCF2327_syg04w', 'DSCF1107_a1z6ki', 'DSCF5823_rfwbkk'] },
  { name: 'group18', photos: ['DSCF2312_eylm30', 'DSCF1309_pxkwni', 'fqs_2025-01-15_105156.995_h9jnbl'] },
  { name: 'group19', photos: ['DSCF6667_u3m7zi', 'DSCF6712_kl2nu7', 'DSCF6670_ywu6al', 'DSCF6659_s2gvsq'] },
  { name: 'group20', photos: ['DSCF6683_eijzif', 'DSCF6627_tduoeq', 'DSCF6711_avzxt9', 'DSCF6622_sc2kvo'] },
  { name: 'group21', photos: ['DSCF7287_vth4zm', 'DSCF7341_ykvbqm', 'DSCF7310_e6jrtm', 'DSCF7309_lhw1wm'] },
  { name: 'group22', photos: ['DSCF7710_cu3lsr', 'DSCF7565_ei10fk', 'DSCF7697_tuzlgf'] },
].map(g => ({
  name: g.name,
  photos: g.photos.map(publicId => ({ id: publicId, publicId })),
}));

// Flat list for modal navigation
export const photos: Photo[] = photoGroups.flatMap(g => g.photos);
