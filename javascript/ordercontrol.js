//order window
let list = [];
let listv = [];
let totalv=0;
let items = [["Pav Bhaji","Biryani","Chole Bhature","Samosa"],
		 ["Dosa","Uttapamma","Idli","MaduVada"],
		 ["Pasta Macroli","Tortano","Pizza Margherita","Pizza Cappriciossa"],
		 ["Fried rice","Noodles","Manchurian","Kebab"],
		 ["Gulab Jamun","Rasagulla","Cheese Cake","Hot chocolate cake"]];
function a(l,i){
	totalv++;
	let o = document.getElementById("cartvalue");
	o.innerHTML = totalv;
	let flag=0;
	for(j=0;j<list.length;j++){
		if(list[j]==items[l][i]){flag=1;break;}
	}
	if(flag==1)listv[j]++;
	else {list[list.length] = items[l][i];listv[listv.length]=1;}
}

function val(){
	let x="";
	for(i=0;i<list.length;i++){
		x += list[i] +"" + listv[i]+"</br>";
	}
	return x;
}

function cartwindow(){
	sessionStorage.items = JSON.stringify(items);
	sessionStorage.list = JSON.stringify(list);
	sessionStorage.listv = JSON.stringify(listv);
	window.location.href = 'order.html';
}
