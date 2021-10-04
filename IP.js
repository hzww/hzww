var 中国电信 = ['460-03','460-05','460-11'];
var 中国联通 = ['460-01','460-06','460-09'];
var 中国移动 = ['460-00','460-02','460-04','460-07','460-08'];
var 中国广电 = ['460-15'];
var 中国铁通 = ['460-20'];
$httpClient.get("http://ip-api.com/json/", function(error, response, data){
    let jsonData = JSON.parse(data)
    let wlanisp = jsonData.isp
    let query = jsonData.query
    let directemoji = getFlagEmoji(jsonData.countryCode)
$httpClient.get("http://ipwhois.app/json/", function(error, response, data){
    let v4 = $network.v4.primaryAddress
    let ssid = $network.wifi.ssid
    let carrier = $network["cellular-data"].carrier
    let router = $network.v4.primaryRouter
    let radio = $network["cellular-data"].radio
    let v6 = $network.v6.primaryAddress
    let jsonData = JSON.parse(data)
    let ip = jsonData.ip
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.country_code)
    let city = jsonData.city
    let isp = jsonData.isp
    var regex=/^192.168/
    if(regex.test(v4)){
        if(ip === query){
            $done({
            title: `${wlanisp}\nGlo-Proxy`,
	    content: `IP: ${emoji} ${ip}\nRouter: ${router}\nLocal IP: ${v4}\nISP: ${isp}\nLoc: ${city}`,
            icon: "wifi",
            'icon-color': "#FFFFFF"
	    });
        }else{
            $done({
            title: `${wlanisp}`,
	    content: `ISP IP: ${directemoji} ${query}\nRouter: ${router}\nLocal IP: ${v4}\nVPS: ${emoji} ${isp}\nLoc: ${city}\nIP: ${ip}`,
            icon: "wifi",
            'icon-color': "#FFFFFF"
	    });
        }
    }else if(radio === null){
        if(ip === query){
            $done({
	    title: `Hotspot`,
	    content: `IP: ${emoji} ${ip}\nRouter: ${router}\nLocal IP: ${v4}\nISP: ${isp}\nLoc: ${city}`,
            icon: "personalhotspot",
            'icon-color': "#00FF00"
	    });
        }else{
            $done({
	    title: `Hotspot`,
	    content: `ISP IP: ${directemoji} ${query}\nRouter: ${router}\nLocal IP: ${v4}\nVPS: ${emoji} ${isp}\nLoc: ${city}\nIP: ${ip}`,
            icon: "personalhotspot",
            'icon-color': "#00FF00"
	    });
        }
    }else{
        if(中国电信.includes(carrier)){
            运营商 = "CHN Tele";
        }else if(中国联通.includes(carrier)){
            运营商 = "CHN Uni";
        }else if(中国移动.includes(carrier)){
            运营商 = "CMCC";
        }else if(中国广电.includes(carrier)){
            运营商 = "CBN";
        }else if(中国铁通.includes(carrier)){
            运营商 = "CTT";
        }else{
            运营商 = "𝓜𝓸𝓫𝓲𝓵𝓮 𝓝𝓮𝓽𝔀𝓸𝓻𝓴";
        }
        if(ip === query){
            $done({
            title: `${运营商} ${radio} Glo-Proxy`,
            content: `VPS IP: ${emoji} ${ip}\nVPS: ${isp}\nLoc: ${city}`,
            icon: "antenna.radiowaves.left.and.right",
            'icon-color': "#FFFFFF"
	    });
        }else{
            $done({
            title: `${运营商} ${radio}`,
            content: `ISP IP: ${directemoji} ${query}\nSub IP: ${v4}\nVPS: ${emoji} ${isp}\nLoc: ${city}\nIP: ${ip}`,
            icon: "antenna.radiowaves.left.and.right",
            'icon-color': "#FFFFFF"
	    });
        }
    }
});
function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
};
function getFlagEmoji(country_code) {
    const codePoints = country_code
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}});
