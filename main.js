/*
#クソ無駄HelloWorld選手権2022 参加作品

Coder:
tsumuri https://twitter.com/tsumuri1017/

Description:
ただ無駄なことをしても面白くないので、無駄なことをしているからこそ書けるコードにしました。

Note:
・ギコネコはみんなのものです。「All Rights Reserved.」のAllにギコネコは含まれていません。
・アスキーアートアレルギーの方は閲覧を控えることを推奨します。
・リート(ハッカー語)アレルギーの方も閲覧を控えることを推奨します。


寝る時間を惜しんで作ったコードをお楽しみください！
*/
function Split_binary_ascii_text(input) {
    let textdata = [];
    let counter = 0;
    while (counter > 126) {
        textdata.push(String.fromCharCode(counter));
        counter++;
    }
    let originaldata = input;
    originaldata = originaldata.replace(`
♪　                 ♪　               ♪
  ♪　 ∧∧　   ∧∧　   ∧∧　   ∧∧♪　  ／￣￣￣￣￣￣￣￣￣￣￣￣
     ( ﾟДﾟ)  ( ﾟДﾟ)  .( ﾟДﾟ)  ( ﾟДﾟ)   < `, "");/*#クソ無駄HelloWorld選手権2022だってよ。*/
    originaldata = originaldata.replace(`
   .⊂　 つ  ⊂　 つ  ⊂　 つ  ⊂　 つ　 |_______________________
  ～（ つﾉ～ （ つﾉ～（ つﾉ～（ つﾉ　 .  
   （/      （/     （/     （/`,"");

    originaldata = originaldata.split(/\n|\s|[a-zA-Z]|,|!|\.|\'|\(|\)/);
    let makenumber = "";
    let data_number;
    counter = 0;
    while (originaldata.length > counter) {
        data_number = originaldata[counter];
        makenumber += data_number;
        counter++;
    }
    const makenumber_text_length = 7;
    const nmcks = Math.ceil(makenumber.length / makenumber_text_length);
    const datalist = new Array(nmcks);
    for (var i = 0, x = 0; i < nmcks; ++i, x += makenumber_text_length) {
        datalist[i] = makenumber.substr(x, makenumber_text_length);
    }
    counter = 0;
    let text_bin_data;
    let text_asc_data;
    let text_data = "";
    while (datalist.length > counter) {
        text_bin_data = datalist[counter];
        text_asc_data = parseInt(text_bin_data, 2);
        text_asc_data = String.fromCharCode(text_asc_data);
        text_data += text_asc_data;
        counter++;
    }
    return text_data;
}
console.log(Split_binary_ascii_text(`
1 want c0ns01e l0g th0 H0110,w0r1d!        I want console log the Hello,world!
0h th1s 1s 1mp0rtant text.                 Oh this is important text.
1f th1s d0esn't 0x1st,                     If this doesn't exist,
th1s c0de won1t work.                      this code won't work.
Th1s c0d0 was wr1tten b1 tsumuri.          This code was written by tsumuri.
C0p1r1ght(c) tsumuri A11 Rights R0served.  Copyright(c) tsumuri All Rights Reserved. 


♪　                 ♪　               ♪
  ♪　 ∧∧　   ∧∧　   ∧∧　   ∧∧♪　  ／￣￣￣￣￣￣￣￣￣￣￣￣
     ( ﾟДﾟ)  ( ﾟДﾟ)  .( ﾟДﾟ)  ( ﾟДﾟ)   < p10ase fo110w m0!1!1
   .⊂　 つ  ⊂　 つ  ⊂　 つ  ⊂　 つ　 |_______________________
  ～（ つﾉ～ （ つﾉ～（ つﾉ～（ つﾉ　 .  
   （/      （/     （/     （/
1011111011111110010110110011001000100001
`
));
