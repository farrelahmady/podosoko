$(document).ready(function () {
	// const img = ["1.jpg", "2.jpg", "3.jpg"];
	const imageURL = "../assets/img/slideshow/landscape/";

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
		img: ["1.jpg", "2.jpg", "3.jpg"],
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
								")),url('" +
								imageURL +
								this.background;

							bgOpc += 0.005;
						}, 1);
						slideShowPage.style.backgroundImage =
							"url('" + imageURL + this.background;
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
				"url('../img/slideshow/landscape/" + this.background
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

	$("#home .l").click(function () {
		slideShow.idx--;
		slideShow.run();
	});
	$("#home .r").click(function () {
		slideShow.idx++;
		slideShow.run();
	});
	$("#home .r").click();
});
