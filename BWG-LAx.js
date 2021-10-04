const veid = "请填写";
const api_key = "请填写";
let url = "https://api.64clouds.com/v1/getServiceInfo?veid="+veid+"&api_key="+api_key;
$httpClient.get(url, function(error, response, data){
let resp = JSON.parse(data)
  let data_next_reset = resp["data_next_reset"];
  let datares = (resp["data_counter"] / (1024 * 1024 * 1024)).toFixed(2);
  let datatotal = (resp["plan_monthly_data"] / (1024 * 1024 * 1024)).toFixed(0);
  let reset = redate(data_next_reset);
  $done({
  title: "BWG-LAx",
   // style: "good",
  icon: "personalhotspot",
  'icon-color': "#FFFFFF",
  content: "Used: " + datares + "G\n"+"Total: " + datatotal+"G\n"+"Reset: " + reset,
   //   icon: "pc",
   //   'icon-color': "#FFFFFF"
  });
});
function redate(datein) {
  let da = new Date(datein * 1000);
  let year = da.getFullYear();
  let month = da.getMonth() + 1;
  let date = da.getDate();
  return [year, month, date].join("-");
}
