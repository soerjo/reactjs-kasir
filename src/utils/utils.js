//function untuk destructuring angka pada harga jadi ada komannya
export default function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
