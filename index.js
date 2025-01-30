const images = [
  "lv.avif",
  "orlando.avif",
  "myrtle.avif",
  "atcity.avif",
  "palm.avif",
  "vir.avif",
  "wil.avif",
  "laket.avif",
  "ariz.avif",
  "arkansa.avif",
  "colord.avif",
  "georg.avif",
  "haw.avif",
  "idaho.avif",
  "ind.avif",
  "main.avif",
  "masachuss.avif",
  "michigan.avif",
  "minnes.avif",
  "mss.avif",
  "montana.avif",
  "new-hams.avif",
  "newmexico.avif",
  "north-carolina.avif",
  "oregon.avif",
  "pennyslavia.avif",
  "rhode.avif",
  "tennese.avif",
  "texas.avif",
  "uthah.avif",
  "vermont.avif",
  "washingto.avif",
  "wyoming.avif",
];

const imageGrid = document.getElementById("imageGrid");

images.forEach((image) => {
  const div = document.createElement("div");
  div.className = "card2";
  div.style.backgroundImage = `url(public/usdest/${image})`;

  const button = document.createElement("button");
  button.textContent = "View Upgrade";

  div.appendChild(button);
  imageGrid.appendChild(div);
});

const imageSlider1 = [
  {
    id: Date.now(),
    image: "public/imageSlider1/Myrtle-Beach.jpg",
    text: "My family has been coming here for the last twenty plus years and the memories are unforgettable.",
    writer: "Wyndham SeaWatch Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Las-Vegas---Shell.jpg",
    text: "I’d live here if I could! Comfortable and quiet rooms with everything you need, and the beds are amazing!",
    writer: "Desert Rose Resort ",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Orlando.jpg",
    text: "One of our favorite places to stay in Orlando. Staff is superb, rooms are top notch, pool and putt putt are fun time passers. Highly recommend",
    writer: "WorldMark Kingstown Reef",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Palm-Springs.jpg",
    text: "Loved it! The pool area is great for kids with a water slide. The food and service at the pool was also good. It was heaven",
    writer: "Palm Canyon Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Las-Vegas.jpg",
    text: "Super family friendly and a great place to stay! It’s the perfect distance from the strip. The pool is amazing.",
    writer: "Cancun Resort Las Vegas",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Vermont.jpg",
    text: "Simply the best place to relax, unwind and regroup from every day stress of life",
    writer: "Smugglers' Notch Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Utah.jpg",
    text: "Nice place to get some rest. Sauna, hot tub, pool, restaurant, game room, clean and comfortable rooms.",
    writer: "Cedar Breaks Lodge",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Tennessee-.jpg",
    text: "Sauna and pool after hiking with the views is incredible.",
    writer: "Wyndham at Fairfield Glade",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Texas.jpg",
    text: "Amazing activities. Tennis courts, shuffleboard, a theater, arcade, 3 swimming pools, s'mores ever day at 8pm. Would go again.",
    writer: "Holiday Inn Club Vacations Hill Country Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Orlando-legacy.jpg",
    text: "The staff was amazing. Our suite was beautiful and clean. The view from our room was very relaxing. We will be going back.",
    writer: "Holiday Inn Club Vacations Hill Country Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/New-Hampshire.jpg",
    text: "Great family get away! Such a nice place to wind down and lay your head. Can't help but feel like one with nature.",
    writer: "Steele Hill Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Maritime-Beach.jpg",
    text: "Love, love, love! Great view, nice pool, nice hot tub. Perfect little bridge from property onto the beach.",
    writer: "Maritime Beach Club",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Las-Vegas-tahiti.jpg",
    text: "Super clean, family friendly, and great service. The 2 pools and hot tub were amazing! I will definitely stay again.",
    writer: "Tahiti Village Resort & Spa",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Branson.jpg",
    text: "Lots of things to do for the family: indoor and outdoor pools, hot tubs, volleyball, miniature golf, shuffle board, pool table, nice rooms, etc!",
    writer: "The Suites at Fall Creek by Diamond Resorts",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Club-Wyndham.jpg",
    text: "This was a fantastic resort. The pool, lazy river and hot tubs were a huge hit for the kids. Great access straight to the beach.",
    writer: "Wyndham Towers on the Grove",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Lake-Tahoe.jpg",
    text: "We will definitely be coming back. Rooms are beautiful, clean, and spacious. The private beach is perfect.",
    writer: "Tahoe Beach & Ski Club",
  },

  {
    id: Date.now(),
    image: "public/imageSlider1/Idaho.jpg",
    text: "Wonderful resort. Well kept, beautiful location, lots to do.",
    writer: "Stoneridge Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Gatlinburg.jpg",
    text: "We really loved this place. Can't wait to visit again.",
    writer: "Town Square by Exploria Resorts",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Colorado.jpg",
    text: "Absolutely wonderful. The view is amazing, everyone is super friendly, clean and attentive.",
    writer: "Wyndham Pagosa",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Branson---Still-Waters.jpg",
    text: "There was so much to do! Pools were all clean and family friendly. We will definitely be returning next year!",
    writer: "Still Waters Vacation Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Arkansas-.jpg",
    text: "The views are great. It’s nice and quiet where you can enjoy yourself.",
    writer: "SunBay Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Arizona-.jpg",
    text: "This turned out to be a hidden gem.",
    writer: "Starr Pass Golf Suites",
  },
];

let currentIndex = 0;
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("sliderDots");

function createSlide(slideData) {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  const img = document.createElement("img");
  img.src = slideData.image;
  img.alt = slideData.writer;
  slide.appendChild(img);

  const text = document.createElement("p");
  text.textContent = `"${slideData.text}"`;
  slide.appendChild(text);

  const writer = document.createElement("h4");
  writer.textContent = slideData.writer;
  slide.appendChild(writer);

  return slide;
}

function updateSliderPosition() {
  slider.innerHTML = "";
  const slidesToShow = imageSlider1.slice(currentIndex, currentIndex + 6);
  slidesToShow.forEach((slideData) =>
    slider.appendChild(createSlide(slideData))
  );

  updateDots();
}

function updateDots() {
  dotsContainer.innerHTML = "";
  const totalDots = Math.ceil(imageSlider1.length / 6);

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === Math.floor(currentIndex / 6)) dot.classList.add("active");
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      currentIndex = i * 6;
      updateSliderPosition();
    });
  }
}

nextBtn.addEventListener("click", () => {
  if (currentIndex + 6 < imageSlider1.length) {
    currentIndex += 6;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex - 6 >= 0) {
    currentIndex -= 6;
  } else {
    currentIndex = imageSlider1.length - 6;
  }
  updateSliderPosition();
});

updateSliderPosition();
updateDots();

const images1 = [
  "lv.avif",
  "orlando.avif",
  "myrtle.avif",
  "atcity.avif",
  "palm.avif",
  "vir.avif",
  "wil.avif",
  "laket.avif",
  "ariz.avif",
  "arkansa.avif",
  "colord.avif",
  "georg.avif",
  "haw.avif",
  "idaho.avif",
  "ind.avif",
  "main.avif",
  "masachuss.avif",
  "michigan.avif",
  "minnes.avif",
  "mss.avif",
  "montana.avif",
  "new-hams.avif",
  "newmexico.avif",
  "north-carolina.avif",
  "oregon.avif",
  "pennyslavia.avif",
  "rhode.avif",
  "tennese.avif",
  "texas.avif",
  "uthah.avif",
  "vermont.avif",
  "washingto.avif",
  "wyoming.avif",
];

const imageGrid2 = document.getElementById("imageGrid2");

images1.forEach((image) => {
  const div = document.createElement("div");
  div.className = "card2";
  div.style.backgroundImage = `url(public/usdest/${image})`;

  const button = document.createElement("button");
  button.textContent = "View Upgrade";

  div.appendChild(button);
  imageGrid2.appendChild(div);
});

const imageSlider2 = [
  {
    id: Date.now(),
    image: "public/imageSlider1/Myrtle-Beach.jpg",
    text: "My family has been coming here for the last twenty plus years and the memories are unforgettable.",
    writer: "Wyndham SeaWatch Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Las-Vegas---Shell.jpg",
    text: "I’d live here if I could! Comfortable and quiet rooms with everything you need, and the beds are amazing!",
    writer: "Desert Rose Resort ",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Orlando.jpg",
    text: "One of our favorite places to stay in Orlando. Staff is superb, rooms are top notch, pool and putt putt are fun time passers. Highly recommend",
    writer: "WorldMark Kingstown Reef",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Palm-Springs.jpg",
    text: "Loved it! The pool area is great for kids with a water slide. The food and service at the pool was also good. It was heaven",
    writer: "Palm Canyon Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Las-Vegas.jpg",
    text: "Super family friendly and a great place to stay! It’s the perfect distance from the strip. The pool is amazing.",
    writer: "Cancun Resort Las Vegas",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Vermont.jpg",
    text: "Simply the best place to relax, unwind and regroup from every day stress of life",
    writer: "Smugglers' Notch Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Utah.jpg",
    text: "Nice place to get some rest. Sauna, hot tub, pool, restaurant, game room, clean and comfortable rooms.",
    writer: "Cedar Breaks Lodge",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Tennessee-.jpg",
    text: "Sauna and pool after hiking with the views is incredible.",
    writer: "Wyndham at Fairfield Glade",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Texas.jpg",
    text: "Amazing activities. Tennis courts, shuffleboard, a theater, arcade, 3 swimming pools, s'mores ever day at 8pm. Would go again.",
    writer: "Holiday Inn Club Vacations Hill Country Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Orlando-legacy.jpg",
    text: "The staff was amazing. Our suite was beautiful and clean. The view from our room was very relaxing. We will be going back.",
    writer: "Holiday Inn Club Vacations Hill Country Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/New-Hampshire.jpg",
    text: "Great family get away! Such a nice place to wind down and lay your head. Can't help but feel like one with nature.",
    writer: "Steele Hill Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Maritime-Beach.jpg",
    text: "Love, love, love! Great view, nice pool, nice hot tub. Perfect little bridge from property onto the beach.",
    writer: "Maritime Beach Club",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Las-Vegas-tahiti.jpg",
    text: "Super clean, family friendly, and great service. The 2 pools and hot tub were amazing! I will definitely stay again.",
    writer: "Tahiti Village Resort & Spa",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Branson.jpg",
    text: "Lots of things to do for the family: indoor and outdoor pools, hot tubs, volleyball, miniature golf, shuffle board, pool table, nice rooms, etc!",
    writer: "The Suites at Fall Creek by Diamond Resorts",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Club-Wyndham.jpg",
    text: "This was a fantastic resort. The pool, lazy river and hot tubs were a huge hit for the kids. Great access straight to the beach.",
    writer: "Wyndham Towers on the Grove",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Lake-Tahoe.jpg",
    text: "We will definitely be coming back. Rooms are beautiful, clean, and spacious. The private beach is perfect.",
    writer: "Tahoe Beach & Ski Club",
  },

  {
    id: Date.now(),
    image: "public/imageSlider1/Idaho.jpg",
    text: "Wonderful resort. Well kept, beautiful location, lots to do.",
    writer: "Stoneridge Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Gatlinburg.jpg",
    text: "We really loved this place. Can't wait to visit again.",
    writer: "Town Square by Exploria Resorts",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Colorado.jpg",
    text: "Absolutely wonderful. The view is amazing, everyone is super friendly, clean and attentive.",
    writer: "Wyndham Pagosa",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Branson---Still-Waters.jpg",
    text: "There was so much to do! Pools were all clean and family friendly. We will definitely be returning next year!",
    writer: "Still Waters Vacation Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Arkansas-.jpg",
    text: "The views are great. It’s nice and quiet where you can enjoy yourself.",
    writer: "SunBay Resort",
  },
  {
    id: Date.now(),
    image: "public/imageSlider1/Arizona-.jpg",
    text: "This turned out to be a hidden gem.",
    writer: "Starr Pass Golf Suites",
  },
];

// Second Slider (International Resorts)
let currentIndex2 = 0;
const slider2 = document.getElementById("slider2");
const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");
const dotsContainer2 = document.getElementById("sliderDots2");

function updateSliderPosition2() {
  slider2.innerHTML = "";
  const slidesToShow = imageSlider2.slice(currentIndex2, currentIndex2 + 6);
  slidesToShow.forEach((slideData) =>
    slider2.appendChild(createSlide(slideData))
  );
  updateDots2();
}

function updateDots2() {
  dotsContainer2.innerHTML = "";
  const totalDots = Math.ceil(imageSlider2.length / 6);
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === Math.floor(currentIndex2 / 6)) dot.classList.add("active");
    dot.dataset.index = i;
    dotsContainer2.appendChild(dot);
    dot.addEventListener("click", () => {
      currentIndex2 = i * 6;
      updateSliderPosition2();
    });
  }
}

nextBtn2.addEventListener("click", () => {
  if (currentIndex2 + 6 < imageSlider2.length) currentIndex2 += 6;
  else currentIndex2 = 0;
  updateSliderPosition2();
});

prevBtn2.addEventListener("click", () => {
  if (currentIndex2 - 6 >= 0) currentIndex2 -= 6;
  else currentIndex2 = imageSlider2.length - 6;
  updateSliderPosition2();
});

// Initialize both sliders
updateSliderPosition();
updateDots();
updateSliderPosition2();
updateDots2();

// Update background position on container scroll
const container = document.querySelector(".scroll-container");
container.addEventListener("scroll", () => {
  const scrollTop = container.scrollTop;
  container.style.setProperty("--scroll-offset", `${scrollTop * 0.5}px`);
});

// Initialize CSS variable
container.style.setProperty("--scroll-offset", "0px");
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
