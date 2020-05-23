//order window
let list = [];
let listv = [];
let totalv=0;
let items = [["Pav Bhaji","Biryani","Chole Bhature","Samosa"],
		 ["Dosa","Uttapamma","Idli","MaduVada"],
		 ["Pasta Macroli","Tortano","Pizza Margherita","Pizza Cappriciossa"],
		 ["Fried rice","Noodles","Manchurian","Kebab"],
		 ["Gulab Jamun","Rasagulla","Cheese Cake","Hot chocolate cake"]];
let price = [[100,150,120,45],
			 [70,50,50,50],
			 [70,110,130,150],
			 [120,90,60,130],
			 [130,120,140,150]];
let pricel = [];
function a(l,i){
	totalv++;
	let o = document.getElementById("cartvalue");
	o.innerHTML = totalv;
	let flag=0;
	for(j=0;j<list.length;j++){
		if(list[j]==items[l][i]){flag=1;break;}
	}
	if(flag==1)listv[j]++;
	else {list[list.length] = items[l][i];listv[listv.length]=1;pricel[pricel.length]=price[l][i];}
}

function cartwindow(){
	sessionStorage.items = JSON.stringify(items);
	sessionStorage.list = JSON.stringify(list);
	sessionStorage.listv = JSON.stringify(listv);
	sessionStorage.price = JSON.stringify(pricel);
	window.location.href = 'order.html';
}
