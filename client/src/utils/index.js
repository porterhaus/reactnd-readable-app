import moment from 'moment';

export const formatDate = (date) => {
  return moment(new Date(date)).format('LLLL');
}

export const shorten = (text, maxLength) => {
  var ret = text;
  if (ret.length > maxLength) {
    ret = ret.substr(0, maxLength-3) + " ...";
  }
  return ret;
}
