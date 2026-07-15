import { Cloudinary } from '@cloudinary/url-gen';
import { quality } from '@cloudinary/url-gen/actions/delivery';
import { format } from '@cloudinary/url-gen/actions/delivery';
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
  id: number;
  publicId: string;
  title: string;
}

export const photos: Photo[] = [
  { id: 1,  publicId: 'DSCF2327_syg04w' },
  { id: 2,  publicId: 'DSCF1107_a1z6ki' },
  { id: 3,  publicId: 'DSCF7710_cu3lsr' },
  { id: 4,  publicId: 'DSCF7565_ei10fk' },
  { id: 5,  publicId: 'DSCF6636_vkujzt' },
  { id: 6,  publicId: 'DSCF6683_eijzif' },
  { id: 7,  publicId: 'DSCF7720_h0qm5x' },
  { id: 8,  publicId: 'DSCF7678_lk56fy' },
  { id: 9,  publicId: 'DSCF7287_vth4zm' },
  { id: 10, publicId: 'DSCF7341_ykvbqm' },
  { id: 11, publicId: 'DSCF7674_v7larh' },
  { id: 12, publicId: 'DSCF7685_d3bxu4' },
  { id: 13, publicId: 'DSCF6627_tduoeq' },
  { id: 14, publicId: 'DSCF6582_dguuqb' },
  { id: 15, publicId: 'DSCF6667_u3m7zi' },
  { id: 16, publicId: 'DSCF6712_kl2nu7' },
  { id: 17, publicId: 'DSCF6670_ywu6al' },
  { id: 18, publicId: 'DSCF6711_avzxt9' },
  { id: 19, publicId: 'DSCF7310_e6jrtm' },
  { id: 20, publicId: 'DSCF5823_rfwbkk' },
  { id: 21, publicId: 'DSCF2312_eylm30' },
  { id: 22, publicId: 'DSCF3080_t95fmh' },
  { id: 23, publicId: 'DSCF2070_cshobo' },
  { id: 24, publicId: 'DSCF2747_pfbd95' },
  { id: 25, publicId: 'DSCF6622_sc2kvo' },
  { id: 26, publicId: 'DSCF2026_ualskc' },
  { id: 27, publicId: 'DSCF3071_jzshb7' },
  { id: 28, publicId: 'DSCF2751_hquzhi' },
  { id: 29, publicId: 'DSCF1309_pxkwni' },
  { id: 30, publicId: 'DSCF1114_q4wu8y' },
  { id: 31, publicId: 'DSCF0463_m74gmj' },
  { id: 32, publicId: 'DSCF0332_dulx9g' },
  { id: 33, publicId: 'DSCF0359_fetri7' },
  { id: 34, publicId: 'DSCF0350_zadnho' },
  { id: 35, publicId: 'imgonline-com-ua-CompressToSize-9ZpzXtucIu_hkza4z' },
  { id: 36, publicId: 'DSCF1112_zbr4vi' },
  { id: 37, publicId: 'DSCF7309_lhw1wm' },
  { id: 38, publicId: 'DSCF7697_tuzlgf' },
  { id: 39, publicId: 'DSCF1730-2_mjuixv' },
  { id: 40, publicId: 'DSCF1619_n8vsvm' },
  { id: 41, publicId: 'DSCF6507_msybrx' },
  { id: 42, publicId: 'DSCF6659_s2gvsq' },
  { id: 43, publicId: 'photo31_mxfdng' },
  { id: 44, publicId: 'photo41_jjmm76' },
  { id: 45, publicId: 'photo14_tuvaas' },
  { id: 46, publicId: 'fqs_2025-01-15_105156.995_h9jnbl' },
  { id: 47, publicId: 'photo3_p9sehn' },
  { id: 48, publicId: 'photo2_lqbjpz' },
  { id: 49, publicId: 'photo24_wlzgg6' },
  { id: 50, publicId: 'photo4_b2xgmm' },
  { id: 51, publicId: 'photo10_z1pmxz' },
  { id: 52, publicId: 'photo16_kakfiq' },
  { id: 53, publicId: 'photo5_m8nuvm' },
  { id: 54, publicId: 'photo26_ynbfgx' },
  { id: 55, publicId: 'photo43_ljxk4b' },
  { id: 56, publicId: 'photo12_hpgnc4' },
  { id: 57, publicId: 'photo17_zofdc0' },
  { id: 58, publicId: 'photo42_h1offh' },
  { id: 59, publicId: 'photo36_yr1d4z' },
  { id: 60, publicId: 'photo32_sfhvbs' },
  { id: 61, publicId: 'photo23_mvahlv' },
  { id: 62, publicId: 'photo22_vj0wjb' },
  { id: 63, publicId: 'photo38_ptb7in' },
  { id: 64, publicId: 'photo19_fh4s6p' },
  { id: 65, publicId: 'photo8_c9jquq' },
  { id: 66, publicId: 'photo6_xpk6ek' },
  { id: 67, publicId: 'photo25_iwpjzy' },
  { id: 68, publicId: 'photo37_dnax0u' },
  { id: 69, publicId: 'photo11_tiqyme' },
  { id: 70, publicId: 'photo15_bpeait' },
  { id: 71, publicId: 'photo9_od6sya' },
  { id: 72, publicId: 'photo27_pu9set' },
  { id: 73, publicId: 'photo13_qvb8ln' },
  { id: 74, publicId: 'photo33_deuvdz' },
  { id: 75, publicId: 'photo35_tzdzf7' },
  { id: 76, publicId: 'photo40_ao5mwu' },
  { id: 77, publicId: 'photo1_pn1dmk' },
  { id: 78, publicId: 'photo39_r2f233' },
  { id: 79, publicId: 'photo29_w7wcpr' },
  { id: 80, publicId: 'photo28_gxmhbe' },
  { id: 81, publicId: 'photo21_xqprcx' },
  { id: 82, publicId: 'photo34_c5z2xr' },
  { id: 83, publicId: 'photo18_pttdnf' },
  { id: 84, publicId: 'photo30_ekgr4a' },
  { id: 85, publicId: 'photo7_iae7ku' },
  { id: 86, publicId: 'photo20_put7dm' },
].map(p => ({ ...p, title: p.publicId.split('_')[0] }));
