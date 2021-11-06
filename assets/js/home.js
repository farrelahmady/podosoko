$(document).ready(function () {
	// const img = ["1.jpg", "2.jpg", "3.jpg"];
	let imageURL = "";
	function mediaChanged(mediaQuery) {
		if (mediaQuery.matches) {
			// If media query matches
			imageURL = "img/slideshow/landscape/";
		} else {
			imageURL = "img/slideshow/portrait/";
		}
		slideShow.run();
	}

	const slidePage = document.createElement("div");
	slidePage.id = "slide";
	const slideShowPage = document.getElementById("slide-show");

	let titleBox = document.createElement("div");
	let title = document.createElement("h1");
	title.className = "head";
	let subTitle = document.createElement("h2");
	subTitle.className = "desc";
	titleBox.appendChild(title);
	titleBox.appendChild(subTitle);

	const slideShow = {
		img: ["1.webp", "2.webp"],
		idx: -1,
		loop: 0,
		randNum: function (n) {
			let rand = Math.floor(Math.random() * n);
			return rand;
		},
		background: "",
		animation: function (anim) {
			for (let i = 0; i < 100; i++) {
				let pict = document.createElement("div");
				switch (anim) {
					case 0:
						pict.className = "slide-anim-2";
						break;

					default:
						pict.className = "slide-anim-1";
						break;
				}

				slidePage.appendChild(pict);

				pict.style.animationDelay = i * 0.01 + "s";

				if (i == 99) {
					pict.addEventListener("animationend", () => {
						let bgOpc = 0;
						switch (this.idx) {
							case 0:
								titleBox.className = "box  mid";
								title.innerHTML = "Selamat Datang";
								subTitle.innerHTML = "di Website Desa Podosoko";
								break;
							case 1:
								titleBox.className = "box  left";
								title.innerHTML = "Selamat Datang";
								subTitle.innerHTML = "di Website Desa Podosoko";
								break;
							default:
								titleBox.className = "box  right";
								title.innerHTML = "Selamat Datang";
								subTitle.innerHTML = "di Website Desa Podosoko";
								break;
						}

						const anim = setInterval(() => {
							if (bgOpc >= 0.7) {
								clearInterval(anim);
							}
							slideShowPage.style.backgroundImage =
								"linear-gradient(rgba(0, 0, 0," +
								bgOpc +
								"), rgba(0, 0, 0, " +
								bgOpc +
								")),url('../assets/" +
								imageURL +
								this.background;

							bgOpc += 0.005;
						}, 1);
						slideShowPage.style.backgroundImage =
							"url('../assets/" + imageURL + this.background;
						slideShowPage.innerHTML = "";
						slideShowPage.appendChild(titleBox);
					});
				}
			}
		},
		run: function () {
			clearTimeout(this.loop);
			this.idx > 2 ? (this.idx = 0) : this.idx < 0 ? (this.idx = 2) : [];
			this.background = this.img[this.randNum(this.img.length)];
			$("html").css(
				"--slideshow-img-url",
				"url('../" + imageURL + this.background
			);
			slideShowPage.appendChild(slidePage);
			slidePage.innerHTML = "";
			this.animation(this.randNum(2));

			// console.log(slideShow.idx);
			this.loop = setTimeout(() => {
				this.idx += 1;
				this.run();
			}, 7000);
		},
	};

	var mediaQuery = window.matchMedia("(orientation: landscape)");
	mediaChanged(mediaQuery); // Call listener function at run time
	mediaQuery.addListener(mediaChanged); // Attach listener function on state changes
	$("#home .l").click(function () {
		slideShow.idx--;
		slideShow.run();
	});
	$("#home .r").click(function () {
		slideShow.idx++;
		slideShow.run();
	});
	$("#home .r").click();

	const slider = document.querySelector("#avatar");
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener("mousedown", (e) => {
		isDown = true;
		slider.classList.add("active");
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener("mouseleave", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mouseup", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mousemove", (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 2; //scroll-fast
		slider.scrollLeft = scrollLeft - walk;
		console.log(walk);
	});

	const avatar = document.querySelectorAll("#avatar img");

	avatar.forEach((e) => {
		e.addEventListener("click", () => {
			avatar.forEach((elm) => {
				elm.classList.remove("active");
			});
			e.classList.add("active");
		});
	});
});
