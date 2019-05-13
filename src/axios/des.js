import CryptoJS from 'crypto-js'

//秘钥设置
const Key = 'cp1t@dsy'

// 加密原生
export const encryptByDES = (message, key=Key) => {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}
//解密原生
export const decryptByDES = (ciphertext, key=Key) => {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

// 加密改（obj） =》 des字符串
export const dataEncoder = (obj ,key=Key) =>{
    return encryptByDES(encodeURIComponent(JSON.stringify(obj)),key)
}

//  解密改（des字符串） =》  obj
export const dataDecoder = (ciphertext ,key=Key) =>{
    return JSON.parse(decodeURIComponent(decryptByDES(ciphertext,key)))
}


