let items = JSON.parse(sessionStorage.items);
let list = JSON.parse(sessionStorage.list);
let listv = JSON.parse(sessionStorage.listv);
let i = "<tr><th>Item</th><th>Quantity</th></tr>";
for(j=0;j<list.length;j++){
	i+="<tr><td>"+list[j]+"</td>";
	i+="<td>"+listv[j]+"</td></tr>";
}
document.getElementById("itemlist").innerHTML=i;
