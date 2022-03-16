import { utils } from 'ethers';

export function parseSignParams(params: string[]) {
  console.log(params);
  let data = params[0];
  let from = params[1];

  if (!utils.isAddress(from)) {
    data = params[1];
    from = params[0];
  }

  if (data.length === 66 && data.startsWith('0x')) {
    return { data: utils.arrayify(data), from, isLegacy: true };
  }

  data = utils.isBytesLike(data) ? Buffer.from(utils.arrayify(data)).toString('utf8') : data;
  return { data, from, isLegacy: false };
}

//   const msg = Buffer.from(utils.arrayify(params[0])).toString('utf8');
//   const isAscii = /^[\x00-\x7F]*$/.test(msg);
