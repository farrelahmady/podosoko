const EdukasiCard = function create(target, object) {
	for (let i = 0; i < object.length; i++) {
		let content = document.createElement("section");
		content.className = "content";
		let container = document.createElement("div");
		container.className = "container";
		let edukasiSwiper = document.createElement("div");
		edukasiSwiper.className = "swiper edukasi-swiper";
		let wrapper = document.createElement("div");
		wrapper.className = "swiper-wrapper";
		let slider = document.createElement("div");
		slider.className = "swiper-slide";

		let img = document.createElement("img");
		img.src = object.img;
		let h2 = document.createElement("h2");
		h2.innerHTML = object.title;
		slider.appendChild(img);
		slider.appendChild(h2);
		object.content.forEach((text) => {
			if (Array.isArray(text)) {
				let ol = document.createElement("ol");
				text.forEach((t) => {
					let li = document.createElement("li");
					li.innerHTML = t;
					ol.appendChild(li);
				});
				slider.appendChild(ol);
			} else {
				let p = document.createElement("p");
				p.innerHTML = text;
				slider.appendChild(p);
			}
		});

		wrapper.appendChild(slider);
		edukasiSwiper.appendChild(wrapper);
		container.appendChild(edukasiSwiper);

		target.appendChild(container);
		let maskot = document.createElement("img");
		maskot.src = "../../assets/img/maskot2.gif";
		maskot.alt = "Maskot";
		maskot.className = "maskot";
		target.appendChild(maskot);
	}
};
