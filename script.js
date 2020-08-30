(function(){
	const cartBtn=document.querySelectorAll('.store-item-icon');
	cartBtn.forEach(function(btn){
		btn.addEventListener('touchstart',function(event){
			//console.log(event.target);

			if(event.target.parentElement.classList.contains('store-item-icon')){
				let fullPath=event.target.parentElement.parentElement.previousElementSibling.src;
			//	console.log(event.target.parentElement.parentElement.previousElementSibling.src);
			//let pos=fullPath.indexOf("images");
			//console.log(pos);
			//let partialPart=fullPath.slice(pos);
			//console.log(partialPart);


			const item={};
			item.img=`${fullPath}`;
			//console.log(item);
			//localStorage.setItem("image",item.img);

			let name=event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
			//console.log(name);


			item.name=name;
			//localStorage.setItem("name",item.name);

			let brand=event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[1].value;
			//console.log(brand);
			item.brand=brand;

			let quantity=event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[2].value;
			//console.log(quantity);

			item.quantity=quantity;
			//localStorage.setItem("quantity",item.quantity);





			const cartItem=document.createElement('div');
			cartItem.classList.add('cart-item','d-flex','justify-content-between','text-capitalize','my-3');

			cartItem.innerHTML=`

			<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" />
			
				<p id="cart-item-title" class="font-weight-bold cartName">${item.name}</p>
				<p id="cart-item-brand" class="font-weight-bold cartBrand">${item.brand}</p>
				<span id="cart-item-quantity" class="cart-item-quantity font-weight-bold">${item.quantity}</span>
			
				 <input type="checkbox">
		</div>`
		
		;


		const cart=document.getElementById('cart');
		const total=document.querySelector('.cart-total');
		cart.insertBefore(cartItem,total);
		alert('Item added to cart successfully🛒');
		showTotal();
			}
		});
	});

		function showTotal(){
		const total=[];
		const items=document.querySelectorAll('.cartName');

		items.forEach(function(item){
			total.push(item.textContent);
		});
		console.log(total);
		document.getElementById('item-count').innerHTML=total.length;
	}

})();


		




	