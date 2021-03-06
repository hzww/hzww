$httpClient.get("http://ip-api.com/json", function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
	$done({
		// title: "网络信息",
      title: `${emoji}${country} - ${city}`,
		content: `IP: ${ip}\nISP: ${isp}`,
       icon: "network"
	});
});

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
